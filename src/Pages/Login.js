import styled from 'styled-components'
import {useState, useContext, useEffect} from "react";
import {ApiService} from "../Service/api.service";
import {AuthContext} from "../context/AuthProvider";
import {useNavigate} from "react-router-dom";


const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  background-color: #ddd;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  border: 1px solid #000;
  background-color: #fff;
  height:300px;
  padding: 0px 150px 0px 150px;
`;

const WrapperForm = styled.form`
  display: flex;
  font-size: 0.8em;
  flex-direction: column;
  button {
    align-self: flex-end;
  }

  input[type="text"] {
    margin-bottom: 10px;
    border: 1px solid #3498db;
    border-radius: 5px
  }
`;
const WrapperHeading = styled.div`
  text-align: center;
font-size:2em;
`;

export default function Login() {
    const {setAccessToken} = useContext(AuthContext)
    const [user, setUser] = useState()
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    const axiosParams = {
        method: 'post',
        userName: user,
        email: email
    }
    const handleLogin = () => {
        if (user && email) {
            ApiService(axiosParams)
                .then(data => {
                    const {sl_token} = data.data.data
                    setAccessToken(sl_token);
                    navigate("/");
                })
        }
    }
    return (
        <Wrapper>
            <ContentWrapper>
                <WrapperHeading>
                    Login
                </WrapperHeading>
                <WrapperForm>
                    Name
                    <input type="text" onChange={(e) => setUser(e.target.value)}/>
                    Email
                    <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                    <button type="button" onClick={handleLogin}>
                        Go
                    </button>
                </WrapperForm>
            </ContentWrapper>
        </Wrapper>
    )

}
