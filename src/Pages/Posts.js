import {
    useContext,
    useEffect,
    useState
} from "react";
import styled from 'styled-components'
import {ApiService} from "../Service/api.service";
import {Header} from "../Components/Header"
import {PostItem} from "../Components/PostItem"
import {UserList} from "../Components/UserList";
import {Spinner} from "../Components/Spinner";
import {AuthContext} from "../context/AuthProvider";
import {useParams} from "react-router-dom";
import {processRows,
    distinct,
    sortArray,
    totalCount,
    updateList
} from "../Utils/Filter";


const Container = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  background-color: #ddd;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2px;
`;
const UserListWrapper = styled.div`
  align-self: flex-start;
  padding: 10px;
  border: 1px solid #999999;
  width: 20%
`;
const PostListWrapper = styled.div`
  padding: 10px;
  border: 1px solid #999999;
  width: 80%;
`;

export default function Posts() {
    const {accessToken} = useContext(AuthContext)
    const {id} = useParams();
    const [data, setData] = useState();
    const [userList, setUserList] = useState();
    const [postList, setPostsList] = useState();
    const [sortMode, setSortMode] = useState('dateASC')

    const axiosParams = {
        method: 'get',
        token: accessToken
    }
    const doCall = () => {
        ApiService(axiosParams)
            .then(data => {
                setData(data.data.data.posts)
            })
    }
    const getPostItem = () => {
        if (postList) {
            sortArray(sortMode ,postList)
            return postList.map(row => {
                return (<PostItem key={row.id} row={row}/>
                )
            })
        }
    }
    const getUserList = () => {
        if (data) {
            const filteredObj = distinct(userList || data)
            sortArray('nameASC', filteredObj);
            return filteredObj.map(row => {
                const count = totalCount(data, row.from_id)
                return (<UserList count={count} key={row.id} id={id} row={row}/>
                )
            })
        }
    }
    const updateUserlist = (userName) => {
        setUserList(updateList(data, userName))
    }
    const updatePostlist = (userName) => {
        setPostsList(updateList(data, userName))
    }

    useEffect(() => {
        setPostsList(processRows(data, id, null))
    }, [data, id])

    useEffect(() => {
        doCall();
    }, [accessToken])

    return (
        <Container>
            <Header
                callBack={(value) =>{
                    setSortMode(value)
                }}
                searchUsers={(userName) => {
                    updateUserlist(userName);
                }}
                searchPosts={(userName) => {
                    updatePostlist(userName);
                }}/>
            <Wrapper>
                <UserListWrapper>
                    {getUserList()}
                </UserListWrapper>
                <PostListWrapper>
                    {getPostItem() || <Spinner/>}
                </PostListWrapper>
            </Wrapper>
        </Container>
    )

}
