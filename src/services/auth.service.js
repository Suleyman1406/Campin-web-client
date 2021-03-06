import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const signup = (formValues) => {
  return axios
    .post("https://campinbackend.azurewebsites.net/api/Account/register", {
      ...formValues,
      roles: 1,
    })
    .then((response) => {
      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post("https://campinbackend.azurewebsites.net/api/Account/authenticate", {
      email,
      password,
    })
    .catch((e) => {
      console.log(e);
    })
    .then((response) => {
      console.log(response);
      if (response.data.data.jwToken) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
