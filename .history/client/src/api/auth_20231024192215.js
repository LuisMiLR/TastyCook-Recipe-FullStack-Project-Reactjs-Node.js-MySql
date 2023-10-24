import axios from "axios";
import env from "react-dotenv";

//register user with axios
export const registerUser = async (data) => {
  await axios({
    method: "post",
    url: `${env.REACT_APP_API_URL}/user/register`,
    data: data,
  });
  console
    
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

//login with axios
export const loginUser = async (data) => {
  return await axios({
    method: "post",
    url: `${env.REACT_APP_API_URL}/user/auth`,
    data: data,
  })
    .then((res) => {
      const token = res.data.token;
      if (token != null) {
        localStorage.setItem("token", token);
        return token;
      }
    })
    .catch((e) => {
      console.log(e.response.data.error);
    });
};

//logout user
export const logoutUser = (res) => {
  localStorage.removeItem("token");
};

//get logged in user
export const getUserInfo = async (token) => {
  return await axios({
    method: "get",
    url: `${env.REACT_APP_API_URL}/user/me`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.data.user;
    })
    .catch((e) => {
      console.log(e.response.data.error);
    });
};
