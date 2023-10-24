import axios from "axios";
import env from "react-dotenv";

//function post recipe
export const createPost = async (data, token) => {
  return await axios({
    method: "post",
    url: `${env.REACT_APP_API_URL}/post/create`,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.data.post;
    })
    .catch((e) => {
      console.log(e);
    });
};

//function get all recipes
export const getPosts = async () => {
  return await axios({
    method: "get",
    url: `${process.env.REACT_APP_API_URL}/post/get-all`,
  })
    .then((posts) => {
      return posts;
    })
    .catch((e) => {
      console.log("error getting recipes", e);
    });
};

//function delete recipe
export const deletePost = async (postId) => {
  return await axios({
    method: "delete",
    url: `${process.env.REACT_APP_API_URL}/post/${postId}`,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};

//function update recipe
export const updatePost = async (data, postId) => {
  return await axios({
    method: "put",
    url: `${process.env.REACT_APP_API_URL}/post/edit/${postId}`,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => {
      return res.data.post;
    })
    .catch((e) => {
      console.log(e);
    });
};

//function get one recipe by id
export const getOnePost = async (postId) => {
  return await axios({
    method: "get",
    url: `${process.env.REACT_APP_API_URL}/post/one/${postId}`,
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};

//function get all recette by user id 
export const getPostsByUser = async (token) => {
  return await axios({
    method: "get",
    url: `${process.env.REACT_APP_API_URL}/post/get-all-posts-user`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};
