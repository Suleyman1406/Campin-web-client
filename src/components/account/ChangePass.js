import React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

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
const ChangePass = () => {
  return (
    <div className="flex animate-clipAnim1 flex-col justify-center items-center">
      <p className="text-2xl w-full ml-16 font-bold text-campgreen">
        Change Password
      </p>
      <form className="w-[80%] mt-10">
        <StyledTextField
          id="outlined-basic"
          label="Old Password"
          size="small"
          type={"password"}
          placeholder="Please write old password"
          variant="outlined"
          className="w-full mb-5"
        />
        <StyledTextField
          id="outlined-basic"
          label="New Password"
          size="small"
          type={"password"}
          placeholder="Please write new password"
          variant="outlined"
          className="w-full mb-5"
        />
        <StyledTextField
          id="outlined-basic"
          label="Confirm New Password"
          size="small"
          type={"password"}
          placeholder="Please write new password again"
          variant="outlined"
          className="w-full mb-5"
        />
        <button className="w-full px-3 py-1 bg-campgreen rounded text-white tracking-widest font-semibold ml-auto hover:opacity-90 duration-150 active:translate-y-1">
          Save
        </button>
      </form>
    </div>
  );
};

export default ChangePass;
