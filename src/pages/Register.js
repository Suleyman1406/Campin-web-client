import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
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

              <div class="mb-6">
                <input
                  type="text"
                  required
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-campgreen/50 focus:border-green-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Full Name"
                />
              </div>

              <div class="mb-6">
                <input
                  type="email"
                  required
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-campgreen/50 focus:border-green-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
              </div>

              <div class="mb-6">
                <input
                  type="password"
                  required
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-campgreen/50 focus:border-green-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                />
              </div>

              <div class="mb-6">
                <input
                  type="password"
                  required
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white hover:border-campgreen/50 focus:border-green-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Confirm Password"
                />
              </div>

              <div class="flex justify-between items-center mb-6">
                <div class="text-center lg:text-left">
                  <button
                    type="submit"
                    class="inline-block px-7 py-3 bg-campgreen/80 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-campgreen/90 hover:shadow-lg focus:bg-campgreen/100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-campgreen/100 active:translate-y-1 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Register
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
