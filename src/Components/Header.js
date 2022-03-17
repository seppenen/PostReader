import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0px 10px 10px 0px;
  justify-content: space-between;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

export function Header({ handleSortMode, searchUsers, searchPosts }) {
  const setSortMode = (value) => handleSortMode(value);
 
  return (
    <Wrapper>
      <input
        type="text"
        placeholder="User search"
        onChange={(e) => {
          searchUsers(e.target.value);
        }}
      />
      <ButtonWrapper>
        <button onClick={(e) => setSortMode(e.target.outerText)}>ASC</button>
        <button onClick={(e) => setSortMode(e.target.outerText)}>DESC</button>
      </ButtonWrapper>
      <InputWrapper>
        <input
          type="text"
          placeholder="Post search"
          onChange={(e) => {
            searchPosts(e.target.value);
          }}
        />
      </InputWrapper>
    </Wrapper>
  );
}
