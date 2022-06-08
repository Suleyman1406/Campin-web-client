import axios from "axios";

const getUserInfo = (userId) => {
  return axios
    .get(
      `https://campinbackend.azurewebsites.net/api/Account/GetUserById?userId=${userId}`
    )
    .then((response) => {
      return response.data;
    });
};

const updateUserInfo = (userId, userInfo) => {
  return axios.post(
    `https://campinbackend.azurewebsites.net/api/Account/UpdateUser?userId=${userId}`,
    {}
  );
};

const changePassword = async (email, password, confirmPassword) => {
  const response = await axios.post(
    `https://campinbackend.azurewebsites.net/api/Account/forgot-password`,
    {
      email,
    }
  );
  const token = response?.data?.data?.body?.split(" - ")[1] || "";
  return axios
    .post(
      `https://campinbackend.azurewebsites.net/api/Account/reset-password`,
      {
        email,
        token,
        password,
        confirmPassword,
      }
    )
    .catch((e) => console.log(e))
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

const userService = { getUserInfo, updateUserInfo, changePassword };

export default userService;
