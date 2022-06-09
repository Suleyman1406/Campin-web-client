import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { HashLoader } from "react-spinners";
import userService from "../../services/user.service";
import { toast } from "react-toastify";

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
const override = {
  display: "block",
  margin: "0 10 0 10px",
  borderColor: "red",
};
const INITIAL_FORM_VALUE = {
  photoUrl: "",
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  phoneNumber: "",
};
const Profile = ({ currentUser }) => {
  // const [dateValue, setDateValue] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUE);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    userService.getUserInfo(currentUser.id).then((e) => setUserInfo(e.data));
  }, [currentUser.id]);
  useEffect(() => {
    if (userInfo) {
      setFormValues((prev) => ({
        ...prev,
        ...userInfo,
      }));
    }
  }, [userInfo]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await userService
        .updateUserInfo(currentUser.id, formValues)
        .then((response) => {
          console.log(response);
          setLoading(false);
          toast.success("User information successfully updated!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return userInfo ? (
    <div className="flex flex-col animate-clipAnim1 justify-center items-center">
      {formValues?.photoUrl ? (
        <img
          src={formValues?.photoUrl}
          alt="profile"
          className="w-36 h-36 rounded-full object-cover p-1 bg-campgreen/50 shadow-md"
        />
      ) : (
        <img
          src="images/blank-profile-image.png"
          alt="profile"
          className="w-36 h-36 rounded-full object-cover p-1  shadow-md"
        />
      )}
      <form className="w-[80%] mt-10" onSubmit={handleSubmit}>
        <StyledTextField
          id="outlined-basic"
          label="Profile Image URL"
          size="small"
          type={"text"}
          value={formValues.photoUrl}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, photoUrl: e.target.value }))
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
          value={formValues.email}
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
          required
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
          <span className="mr-4">Save</span>
          <HashLoader
            color={"white"}
            loading={loading}
            cssOverride={override}
            size={20}
          />
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
