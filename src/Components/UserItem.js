import styled from "styled-components";
import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";


const Wrapper = styled.div`
  font-size: 1.2em;
  min-width: 230px;
  margin-bottom: 10px;
  border: 3px solid #000;
  background-color: ${(props) => (props.active ? "#707070" : '#d9d9d9')};
  a:link, a:visited {
    text-decoration: none;
    color: black;
  }
  ul {
    list-style-type: none;
    padding: 3px;
    margin: 0;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 2px;
  align-items: center;
  justify-content: space-between;
`;
const Circle = styled.div`
  height: 40px;
  width: 40px;
  line-height: 40px;
  background-color: #bbb;
  border-radius: 50%;
  text-align: center;
`;

export const UserItem = ({url, count, row}) => {
    const {from_name, from_id} = row
    const [active, setActive] = useState(url)

    //Checking for active element
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        url === from_id ? setActive(true) : setActive(false)
    })
    return (
        <Wrapper active={active}>
            <Link
                to={`/posts/${from_id}`}>
                <ul>
                    <li>
                        <ContentWrapper>
                            {from_name}
                            <Circle>{count}</Circle>
                        </ContentWrapper>
                    </li>
                </ul>
            </Link>
        </Wrapper>
    )
}
