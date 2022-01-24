import {apiCall} from "../Service/api.service";
import {useEffect} from "react";

const Posts = () => {


useEffect(() =>{
    run();
    console.log(token, "test")
},[token])

const run = () => {
    apiCall('get','https://api.supermetrics.com/assignment/posts')
        .then(data => {
            console.log(data)
        })
}

const getPosts = async (sl_token) => {
    return await fetch(`https://api.supermetrics.com/assignment/posts?sl_token=${sl_token}`);
};
}
