import Posts from "../Pages/Posts";

export const protectedPaths = {
    "/": 'Posts',
    "/posts": 'Posts',
    "/posts/:id": 'Posts',
  };