import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { RiCalendar2Line } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import Blank from "../../assets/empty-search.png";
import "react-datepicker/dist/react-datepicker.css";

const OverviewPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="py-[37px] px-[85px]">
      <div className="flex justify-between">
        <div className="py-[10px]">
          <h2 className="text-2xl leading-[28px] font-extrabold text-[#247B7B]">
            Overview
          </h2>
        </div>
        <div className="flex gap-[16px]">
          <div className="flex border-solid border-1 w-[305px] py-[10px] px-[8px] ">
            <div className="flex gap-[10px] mr-2 pr-2 border-r-1">
              <RiCalendar2Line className="text-[#247B7B]" />
              <span className="text-[12px]">Date Range</span>
            </div>
            <div className="mr-2">
              <p className="text-[#666666] text-[12px]">
                Nov 1, 2022 - Nov 7, 2022.
              </p>
            </div>
            <div>
              <FaChevronDown className="text-[#247B7B]" />
            </div>
          </div>

          <div className="flex bg-[#F0F4F4] w-[135px] py-[10px] px-[32px] rounded-[8px] text-[#247B7B] gap-2 items-center">
            <FiUpload className="font-semibold" />
            <span>Export</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-[100px]">
        <img src={Blank} alt="" className="h-[290px]" />
        <p className="mt-4">
          No activity yet. Create anew campaign to get started
        </p>

        <div className="bg-[#247B7B] w-[192px] py-[10px] px-[32px] mt-4 flex gap-[10px] align-middle rounded-[4px] cursor-pointer">
          <span className="text-white">
            <FaPlus />
          </span>{" "}
          <span className="text-white text-[14px] font-semibold">
            New Campaign{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
