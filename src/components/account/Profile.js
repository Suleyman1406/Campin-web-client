import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { HashLoader } from "react-spinners";
import userService from "../../services/user.service";

const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#84cc16",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#C5C5C5",
    },
  },
});
const INITIAL_FORM_VALUE = {
  imageUrl: "",
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  phoneNumber: "",
  dateOfBirth: "",
};
const Profile = ({ currentUser }) => {
  // const [dateValue, setDateValue] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUE);
  useEffect(() => {
    userService.getUserInfo(currentUser.id).then((e) => setUserInfo(e.data));
  }, [currentUser.id]);
  useEffect(() => {
    if (userInfo) {
      setFormValues((prev) => ({
        ...prev,
        userName: userInfo.userName,
        email: userInfo.email,
      }));
    }
  }, [userInfo]);
  const handleSubmit = (e) => {
    e.pereventDefault();
  };

  return userInfo ? (
    <div className="flex flex-col animate-clipAnim1 justify-center items-center">
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        alt="profile"
        className="w-36 h-36 rounded-full object-cover p-1 bg-campgreen/50 shadow-md"
      />
      <form className="w-[80%] mt-10">
        <StyledTextField
          id="outlined-basic"
          label="Profile Image URL"
          size="small"
          type={"text"}
          value={formValues.imageUrl}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, imageUrl: e.target.value }))
          }
          // required
          placeholder="Please write profile image url"
          variant="outlined"
          className="w-full mb-3"
        />

        <StyledTextField
          id="outlined-basic"
          label="First Name"
          size="small"
          type={"text"}
          required
          value={formValues.firstName}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, firstName: e.target.value }))
          }
          defaultValue={currentUser.firstName}
          placeholder="Please write your first name"
          variant="outlined"
          className="w-full mb-3"
        />
        <StyledTextField
          id="outlined-basic"
          label="Last Name"
          size="small"
          type={"text"}
          required
          value={formValues.lastName}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, lastName: e.target.value }))
          }
          placeholder="Please write your last name"
          variant="outlined"
          className="w-full mb-3"
        />
        <StyledTextField
          id="outlined-basic"
          label="Username"
          size="small"
          type={"text"}
          disabled={true}
          value={formValues.userName}
          placeholder="Please write your username"
          variant="outlined"
          className="w-full mb-3"
        />

        <StyledTextField
          id="outlined-basic"
          label="Email"
          size="small"
          type={"email"}
          disabled={true}
          value={formValues.userName}
          placeholder="Please write your email"
          variant="outlined"
          className="w-full mb-3 cursor-not-allowed"
        />

        <StyledTextField
          id="outlined-basic"
          label="Phone Number"
          type={"tel"}
          size="small"
          value={formValues.phoneNumber}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, phoneNumber: e.target.value }))
          }
          placeholder="Please write your phone number"
          variant="outlined"
          className="w-full mb-3"
        />
        {/* 
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            displayStaticWrapperAs="desktop"
            label="Date of Birth"
            value={dateValue}
            onChange={(newValue) => {
              setDateValue(newValue);
            }}
            renderInput={(params) => (
              <StyledTextField
                {...params}
                size="small"
                className="w-full mb-3"
              />
            )}
          />
        </LocalizationProvider> */}
        <button
          type="submit"
          className="w-full px-3 py-1 bg-campgreen rounded text-white tracking-widest font-semibold ml-auto hover:opacity-90 duration-150 active:translate-y-1"
        >
          Save
        </button>
      </form>
    </div>
  ) : (
    <div className="w-full h-full flex justify-center items-center">
      <HashLoader color={"#84cc16"} loading={true} size={100} />
    </div>
  );
};

export default Profile;
