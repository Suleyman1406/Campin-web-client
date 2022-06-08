import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import authService from "../../services/auth.service";
import ChangePass from "./ChangePass";
import Favorites from "./Favorites";
import Profile from "./Profile";
import Reservations from "./Reservations";
import Sidebar from "./Sidebar";

const Account = () => {
  const [selectedTab, setSelectedTab] = useState("profile");
  const navigate = useNavigate();
  const currentUser = authService.getCurrentUser();
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, []);
  const notify = () =>
    toast.error("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  console.log(currentUser);
  return currentUser ? (
    <>
      <div className="flex flex-row">
        <div className="w-2/3 ">
          <div className="w-full py-5 px-8">
            <div className="w-[70%] py-7 mx-auto px-5 shadow-2xl border-[#3e3f46] min-h-[80vh] skew-x-3 border-4 border-dashed flex flex-col justify-center items-center">
              {selectedTab === "profile" && (
                <Profile currentUser={currentUser} />
              )}
              {selectedTab === "password" && (
                <ChangePass currentUser={currentUser} />
              )}
              {selectedTab === "reservations" && <Reservations />}
              {selectedTab === "favorites" && <Favorites />}
            </div>
          </div>
        </div>
        <div className="w-1/3 px-5 h-[80vh] flex justify-center items-center">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </>
  ) : (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <HashLoader color={"#84cc16"} loading={true} size={100} />
    </div>
  );
};

export default Account;
