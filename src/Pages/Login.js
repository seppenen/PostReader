import styled from 'styled-components'
import {useState} from "react";
import {apiService} from "../Service/api.service";


const Wrapper = styled.div`
    height:100vh;
    display:flex;
    background-color:gray;
    justify-content:center;
    align-items:center;
    
`;

const Form = styled.form`
    display:flex;
    flex-direction:column;
    input[type="text"] {
      margin-bottom:10px;
    }
`;

export function LoginPage({setToken}) {
    const [user, setUser] = useState()
    const [email, setEmail] = useState()
    const handleNameChange = (e) => setUser(e.target.value)
    const handleEmailChange = (e) => setEmail(e.target.value)

    const axiosParams = {
        method:'post',
        userName: user,
        email: email
    }

    const handleSubmit = () =>{
            apiService(axiosParams)
                .then(data => {
                    setToken(data.data.data.sl_token)
                    console.log("Token Ok")
                })
    }

    return (
        <Wrapper >
            <Form>
            <input
                type="text"
                placeholder="Name"
                onChange={handleNameChange}
            />
            <input
                type="text"
                placeholder="Email"
                onChange={handleEmailChange}
            />
            <button type="button" onClick={handleSubmit}>
                Login
            </button>
            </Form>
        </Wrapper>
    )

}
