import React, { useState } from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

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

const Profile = () => {
  const [dateValue, setDateValue] = useState(null);
  return (
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
          placeholder="Please write profile image url"
          variant="outlined"
          className="w-full mb-5"
        />

        <StyledTextField
          id="outlined-basic"
          label="Full Name"
          size="small"
          type={"text"}
          placeholder="Please write your name"
          variant="outlined"
          className="w-full mb-5"
        />

        <StyledTextField
          id="outlined-basic"
          label="Email"
          size="small"
          type={"email"}
          placeholder="Please write your name"
          variant="outlined"
          className="w-full mb-5"
        />

        <StyledTextField
          id="outlined-basic"
          label="Phone Number"
          type={"tel"}
          size="small"
          placeholder="Please write your name"
          variant="outlined"
          className="w-full mb-5"
        />

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
                className="w-full mb-5"
              />
            )}
          />
        </LocalizationProvider>
        <button className="w-full px-3 py-1 bg-campgreen rounded text-white tracking-widest font-semibold ml-auto hover:opacity-90 duration-150 active:translate-y-1">
          Save
        </button>
      </form>
    </div>
  );
};

export default Profile;
