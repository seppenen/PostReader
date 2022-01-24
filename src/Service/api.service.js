import {
    LOGIN_URL,
    POST_URL
} from "../Resources/Constants";

const axios = require('axios')
const qs = require('qs')


export function ApiService(axiosParams) {
    return new Promise((resolve, reject) => {
        const secretKey = process.env.REACT_APP_NOT_SECRET_CODE;
        const {method, token, userName, email} = axiosParams;
        const baseUrl = token ? `${POST_URL}?sl_token=${token}` : LOGIN_URL;

        const dataAsString = qs.stringify({
            client_id: secretKey,
            email: email,
            name: userName
        })
        const customConfig = {
            method: method,
            url: baseUrl,
            data: dataAsString
        }
        try {
            axios(customConfig)
                .then(response => {
                    resolve(response)
                })
        } catch (err) {
            reject(err);
        }
    })
}
