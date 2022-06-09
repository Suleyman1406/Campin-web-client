import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import HashLoader from "react-spinners/HashLoader";
import { toast, ToastContainer } from "react-toastify";

const INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};
const override = {
  display: "block",
  margin: "0 10 0 10px",
  borderColor: "red",
};

const Register = () => {
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
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
    }
    setLoading(true);
    try {
      await authService.signup(formValues).then(
        () => {
          setLoading(false);
          navigate("/login");
        },
        (error) => {
          setLoading(false);
          console.log(error);
          toast.error("Username or email is already used!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error("Error occurred!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="images/register-image.jpg"
              className="w-full"
              alt="Sample imag"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <p className="font-logo text-3xl text-campgreen font-extrabold mb-3">
              Campin
            </p>
            <form>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">REGISTER</p>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  required
                  value={formValues.firstName}
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-campgreen/50 focus:border-green-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="First Name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  required
                  value={formValues.lastName}
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-campgreen/50 focus:border-green-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Last Name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  required
                  value={formValues.userName}
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      userName: e.target.value,
                    }))
                  }
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-campgreen/50 focus:border-green-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Username"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  required
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-campgreen/50 focus:border-green-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-4">
                <input
                  type="tel"
                  required
                  value={formValues.phoneNumber}
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      phoneNumber: e.target.value,
                    }))
                  }
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-campgreen/50 focus:border-green-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Phone number"
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  required
                  value={formValues.password}
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-campgreen/50 focus:border-green-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  required
                  value={formValues.confirmPassword}
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-campgreen/50 focus:border-green-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="flex justify-between items-center mb-4">
                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    onClick={handleLogin}
                    className="inline-block w-full px-7 py-3 bg-campgreen/80 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-campgreen/90 hover:shadow-lg focus:bg-campgreen/100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-campgreen/100 active:translate-y-1 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <span className="mr-4">Register</span>
                    <HashLoader
                      color={"white"}
                      loading={loading}
                      cssOverride={override}
                      size={20}
                    />
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Already have an account?
                    <Link
                      to="/login"
                      className="text-green-600 ml-2 uppercase hover:text-green-800 focus:text-green-700 transition duration-200 ease-in-out"
                    >
                      LOGIN
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Register;
