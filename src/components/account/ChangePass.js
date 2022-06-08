import React, { useState } from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import userService from "../../services/user.service";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";

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

const INITIAL_FORM_STATE = {
  password: "",
  confirmPassword: "",
};
const ChangePass = (currentUser) => {
  const [formValues, setFormValues] = useState(INITIAL_FORM_STATE);
  const [loading, setLoading] = useState(false);
  console.log();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValues.confirmPassword !== formValues.password) {
      toast.error("Passwords must be same.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!regex.test(formValues.password)) {
      toast.error(
        "Password must be contain minimum eight characters, at least one letter, one number and one special character.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      return;
    }
    setLoading(true);
    try {
      await userService
        .changePassword(
          currentUser?.currentUser?.email,
          formValues.password,
          formValues.confirmPassword
        )
        .then((response) => {
          setLoading(false);
          toast.success("Password changed successfully!", {
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
  return (
    <div className="flex animate-clipAnim1 flex-col justify-center items-center">
      <p className="text-2xl w-full font-bold text-campgreen">
        Change Password
      </p>
      <form className="w-[100%] mt-10" onSubmit={handleSubmit}>
        <StyledTextField
          id="outlined-basic"
          label="New Password"
          size="small"
          type={"password"}
          value={formValues.password}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, password: e.target.value }))
          }
          required
          placeholder="Please write new password"
          variant="outlined"
          className="w-full mb-5"
        />
        <StyledTextField
          id="outlined-basic"
          label="Confirm New Password"
          size="small"
          type={"password"}
          value={formValues.confirmPassword}
          onChange={(e) =>
            setFormValues((prev) => ({
              ...prev,
              confirmPassword: e.target.value,
            }))
          }
          required
          placeholder="Please write new password again"
          variant="outlined"
          className="w-full mb-5"
        />
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
  );
};

export default ChangePass;
