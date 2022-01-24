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
import {
    processRows,
    distinct,
    sortArray,
    totalCount,
    updateUserList,
    updatePostList
} from "../Utils/Filter";

const Section = styled.div`
  background-color: #333634;
  height: 100vh;
`;
const Container = styled.div`
  max-width: 1000px;
  padding: 20px;
  margin: 0 auto;
  background-color: inherit;

`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 7px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
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
            sortArray(sortMode, postList)
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
                return (<UserList count={count} key={row.id} url={id} row={row}/>
                )
            })
        }
    }
    const handleUserSearch = (value) => {
        setUserList(updateUserList(data, value))
    }
    const handlePostSearch = (value) => {
        setPostsList(updatePostList(data, value))
    }
    useEffect(() => {
        setPostsList(processRows(data, id, null))
    }, [data, id])

    useEffect(() => {
        doCall();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessToken])

    return (
        <Section>
            <Container>
                <Header
                    callBack={(value) => {
                        setSortMode(value)
                    }}
                    searchUsers={(value) => {
                        handleUserSearch(value);
                    }}
                    searchPosts={(value) => {
                        handlePostSearch(value);
                    }}/>
                <Wrapper>
                    <div>
                        {getUserList()}
                    </div>
                    <div>
                        {getPostItem() || <Spinner/>}
                    </div>
                </Wrapper>
            </Container>
        </Section>
    )

}
