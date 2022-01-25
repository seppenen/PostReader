import styled from 'styled-components'
import {useState, useContext} from "react";
import {ApiService} from "../Service/api.service";
import {AuthContext} from "../context/AuthProvider";
import {useNavigate} from "react-router-dom";
import Cookies from 'js-cookie';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  font-size: 0.8em;
  flex-direction: column;

  input[type="text"] {
    margin-bottom: 10px;
    border: 1px solid #3498db;
    border-radius: 5px
  }
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
                    setCookies(sl_token);
                    navigate("/");
                })
        }
    }
    const setCookies = (sl_token) =>{
        let now = new Date();
        now.setTime(now.getTime() + 3600 * 1000);
        Cookies.set("accessToken", sl_token, {expires: now});
    }
    return (
        <Wrapper>
            <Form>
                Name
                <input type="text" onChange={(e) => setUser(e.target.value)}/>
                Email
                <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                <button type="button" onClick={handleLogin}>
                    Go
                </button>
            </Form>
        </Wrapper>
    )

}
