import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function Header({callBack,searchUsers, searchPosts}) {
    const handleSorting = (value) => {
        callBack(value)
    }
    return (
        <Wrapper>
            <input
                type="text"
                placeholder="Type..."
                onChange={(e) => {
                    searchUsers(e.target.value);
                }}
            />
            <button onClick={(e) => handleSorting(e.target.outerText)}>ASC</button>
            <button onClick={(e) => handleSorting(e.target.outerText)}>DESC</button>
            <input
                type="text"
                placeholder="Type..."
                onChange={(e) => {
                    searchPosts(e.target.value);
                }}
            />
        </Wrapper>
    )
}
