import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 2em;
  color: #fff;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
`;
export const Spinner = () => {

    return (
        <Wrapper>Loading</Wrapper>

    )
}
