import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0px 10px 10px 0px;
  justify-content: space-between;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-grow: 2
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1
`;

export function Header({callBack, searchUsers, searchPosts}) {
    const handleSorting = (value) => {
        callBack(value)
    }
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
                <button onClick={(e) => handleSorting(e.target.outerText)}>ASC</button>
                <button onClick={(e) => handleSorting(e.target.outerText)}>DESC</button>
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
    )
}
