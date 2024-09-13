import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiDashboard2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import logo from "../assets/messages.png";
import campaign from "../assets/campaign.png";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-[#247B7B] bg-white mt-2";

  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-[#455454] hover:bg-white hover:text-[#247B7B] mt-2";

  return (
    <div className="sidebar bg-gray-100">
      <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto py-[23px] pl-[40px] pr-[24px]">
        <div className="flex gap-[16px]">
          <img src={logo} alt="messages" className="h-[48px] w-[48px]" />
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#247B7B] to-[#3B247B] text-[32px] font-bold">
            Scrutz
          </p>
        </div>

        <div className="mt-[57px] w-[228px] h-[383px]">
          <button
            className="bg-[#247B7B] w-[196px] p-[10px] px-[32px] flex gap-[10px] align-middle rounded-[4px] cursor-pointer"
            onClick={() => navigate("/create-campaigns")}
          >
            <span className="text-white">
              <FaPlus />
            </span>{" "}
            <span className="text-white text-[14px] font-semibold">
              New Campaign{" "}
            </span>
          </button>
          <div className="mt-[40px] w-[196px]">
            <Link
              to="/overview"
              className={
                location.pathname === "/overview" ? activeLink : normalLink
              }
              // className="w-[192px] flex gap-[10px] rounded-[4px] px-[32px] py-[8px] text-#247B7B hover:bg-white"
            >
              <RiDashboard2Line className="h-[24px] w-[24px]" />
              <p className="text-[14px] font-semibold">Overview</p>
            </Link>
            <Link
              to="/campaign"
              className={
                location.pathname === "/campaign" ? activeLink : normalLink
              }
              // className="flex gap-[10px] rounded-[4px] px-[32px] py-[8px] text-#247B7B hover:bg-white"
            >
              <img
                src={campaign}
                alt="messages"
                className="h-[25px] w-[25px]"
              />

              <p className="text-[14px] font-semibold">Camaigns</p>
            </Link>
            <Link
              to="/test"
              className={
                location.pathname === "/test" ? activeLink : normalLink
              }
              // className="flex gap-[10px] rounded-[4px] px-[32px] py-[8px] text-#247B7B hover:bg-white"
            >
              <HiOutlineLightBulb className="h-[24px] w-[24px]" />
              <p className="text-[14px] font-semibold">Market Intelligence</p>
            </Link>
            <Link
              to="/test"
              className={
                location.pathname === "/test" ? activeLink : normalLink
              }
              // className="flex gap-[10px] rounded-[4px] px-[32px] py-[8px] text-#247B7B hover:bg-white"
            >
              <IoSettingsOutline className="h-[24px] w-[24px]" />
              <p className="text-[14px] font-semibold">Account Settings</p>
            </Link>
          </div>
        </div>
        <div className="bg-white py-[30px] px-[41px] ">
          <div className="flex flex-col items-center align-middle justify-center">
            <BsQuestionCircle className="h-[24px] w-[24px] text-[#247B7B]" />
            <p className="items-center mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#247B7B] to-[#3B247B] font-semibold">
              Need Help
            </p>
            <p className="text-[14px]">
              We’re readily available to provide help
            </p>
          </div>

          <div className="mt-3">
            <button className="border-2 border-[#247B7B] py-[8px] px-[25px] text-[#247B7B]">
              Get Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
