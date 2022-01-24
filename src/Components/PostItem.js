import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;
  font-size: 0.8em;
`;

export const PostItem = ({row}) => {
    const {message, from_name, created_time} = row;
    const date = new Date(created_time);

    return (
        <Wrapper>
            {message}
            <p>{from_name} {date.toLocaleDateString() } </p>
        </Wrapper>
    )
}
