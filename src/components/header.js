import React from "react";
import { FaSearch } from "react-icons/fa";
import person from "../assets/person.png";
import { FaRegBell } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

const header = () => {
  return (
    <div className="flex py-[24px] px-[85px] justify-between border-b-1">
      <div className="flex justify-between w-[391px] h-[44px] p-[12px] bg-white rounded-[4px]">
        <input
          placeholder="Search..."
          className="h-[16px] w-[52px] border-none outline-none"
        />
        <FaSearch className="text-[#666666]" />
      </div>

      <div className="flex justify-between w-[171px] h-[44px] p-[12px] bg-white rounded-[4px] items-center">
        <FaRegBell />
        <div className="w-[25px] h-[25px]">
          <img src={person} alt="person" />
        </div>
        <div className="flex items-center">
          <p className="mr-1">BigTech</p>
          <FaChevronDown className="text-[#247B7B]" />
        </div>
      </div>
    </div>
  );
};

export default header;
