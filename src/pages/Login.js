import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import HashLoader from "react-spinners/HashLoader";

const INITIAL_FORM_VALUES = {
  email: "",
  password: "",
};
const override = {
  display: "block",
  margin: "0 10 0 10px",
  borderColor: "red",
};

const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const [loading, setLoading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await authService.login(formValues.email, formValues.password).then(
        (e) => {
          console.log(e);
          setLoading(false);
          navigate("/");
        },
        (error) => {
          setLoading(false);
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="images/login-image.jpeg"
              className="w-full"
              alt="Sample imag"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <p className="font-logo text-3xl text-campgreen font-extrabold mb-3">
              Campin
            </p>
            <form onSubmit={handleLogin}>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">LOGIN</p>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  required
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-campgreen/50 focus:border-green-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  value={formValues.password}
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  required
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-campgreen/50 focus:border-green-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-campgreen/80 checked:border-campgreen/70 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-gray-500">
                  Forgot password?
                </a>
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-block disabled:opacity-80 disabled:cursor-not-allowed px-7 py-3 bg-campgreen/80 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-campgreen/90 hover:shadow-lg focus:bg-campgreen/100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-campgreen/100 active:translate-y-1 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <span className="mr-4">Login</span>
                  <HashLoader
                    color={"white"}
                    loading={loading}
                    cssOverride={override}
                    size={20}
                  />
                </button>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <Link
                    to="/register"
                    className="text-green-600 ml-2 uppercase hover:text-green-800 focus:text-green-700 transition duration-200 ease-in-out"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
