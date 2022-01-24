import styled from "styled-components";
import {Link, useParams} from 'react-router-dom';


const Wrapper = styled.div`
  margin: 5px;
  font-size: 0.8em;
`;
export const UserList = ({count,row}) => {
    const {from_name, from_id} = row


    return (
        <Wrapper>
            <ul>
                <li>
                    <Link
                        to={`/posts/${from_id}`}>
                        {from_name}
                        {count.length}

                    </Link>

                </li>
            </ul>

        </Wrapper>
    )
}
