import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import HashLoader from "react-spinners/HashLoader";

const INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
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
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section class="h-screen">
      <div class="px-6 h-full text-gray-800">
        <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="images/register-image.jpg"
              class="w-full"
              alt="Sample imag"
            />
          </div>
          <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <p className="font-logo text-3xl text-campgreen font-extrabold mb-3">
              Campin
            </p>
            <form>
              <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p class="text-center font-semibold mx-4 mb-0">REGISTER</p>
              </div>

              <div class="mb-4">
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
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-campgreen/50 focus:border-green-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="First Name"
                />
              </div>
              <div class="mb-4">
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
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-campgreen/50 focus:border-green-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Last Name"
                />
              </div>
              <div class="mb-4">
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
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-campgreen/50 focus:border-green-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Username"
                />
              </div>

              <div class="mb-4">
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
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-campgreen/50 focus:border-green-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
              </div>

              <div class="mb-4">
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
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-campgreen/50 focus:border-green-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                />
              </div>

              <div class="mb-4">
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
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-campgreen/50 focus:border-green-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Confirm Password"
                />
              </div>

              <div class="flex justify-between items-center mb-4">
                <div class="text-center lg:text-left">
                  <button
                    type="submit"
                    onClick={handleLogin}
                    class="inline-block w-full px-7 py-3 bg-campgreen/80 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-campgreen/90 hover:shadow-lg focus:bg-campgreen/100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-campgreen/100 active:translate-y-1 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <span className="mr-4">Register</span>
                    <HashLoader
                      color={"white"}
                      loading={loading}
                      cssOverride={override}
                      size={20}
                    />
                  </button>
                  <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                    Already have an account?
                    <Link
                      to="/login"
                      class="text-green-600 ml-2 uppercase hover:text-green-800 focus:text-green-700 transition duration-200 ease-in-out"
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
    </section>
  );
};

export default Register;
