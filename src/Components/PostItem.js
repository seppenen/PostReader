import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 0.8em;
  color: #000;
  background-color: #fff;
  padding: 5px;
  margin-bottom: 15px;
`;

export const PostItem = ({ row }) => {
  const { message, from_name, created_time } = row;
  const date = new Date(created_time);

  return (
    <Wrapper>
      <p>
        {from_name} {date.toLocaleDateString()}{" "}
      </p>
      <p>{message}</p>
    </Wrapper>
  );
};
