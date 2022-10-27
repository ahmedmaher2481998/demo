import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import ImgLink from "./ImageLink";
import LogInLinks from "./LogInLinks";
const Form = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [startDate, setStartDate] = useState<null | Date>();

  return (
    <div className="flex items-center flex-col justify-center w-max ml-auto lg:mr-10 xl:mr-16">
      <script src="https://unpkg.com/flowbite@1.5.3/dist/datepicker.js"></script>
      <div className=" relative flex border mb-3 border-gray-300 text-gray-900  bg-shady rounded-lg focus:ring-secondary w-full focus:border-secondary   ">
        <input
          type="text"
          className="w-full rounded-lg  text-sm bg-shad min-h-full text-black  focus:outline-none p-2.5"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          required
        />
        <AiOutlineCloseCircle
          className="bg-white absolute top-3 cursor-pointer right-3 text-gray-600"
          onClick={() => setFirstName("")}
        />
      </div>
      <div className=" w-full relative flex border mb-3 border-gray-300 text-gray-900  bg-shady rounded-lg focus:ring-secondary focus:border-secondary   ">
        <input
          type="text"
          className=" rounded-lg  text-sm bg-shad min-h-full text-black  focus:outline-none p-2.5"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
          required
        />
        <AiOutlineCloseCircle
          className="bg-white absolute top-3 cursor-pointer right-3 text-gray-600"
          onClick={() => setLastName("")}
        />
      </div>

      <div className=" relative w-full flex border mb-3 border-gray-300 text-gray-900  bg-shady rounded-lg focus:ring-secondary focus:border-secondary   ">
        <DatePicker
          className=" h-10 rounded-lg p-2 "
          placeholderText="Select date"
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        />

        <AiOutlineCloseCircle
          className="bg-white absolute top-3 cursor-pointer right-3 text-gray-600"
          onClick={() => setFirstName("")}
        />
      </div>
      <div className=" relative w-full text-center flex border mb-3 border-gray-300 text-gray-900  bg-shady rounded-lg focus:ring-secondary focus:border-secondary   ">
        <select name="User" className="w-full h-10 p-2 rounded-lg " id="user">
          <option value="" disabled selected>
            User
          </option>

          <option value="ahmed">User 1</option>
          <option value="ahmed">User 2</option>
          <option value="ahmed">User 3</option>
        </select>
      </div>

      <p className="w-full flex mb-3 p-2">
        <Link className=" text-sm -mt-2 text-gray-400 ml-auto   " to="#">
          Recover Password ?
        </Link>
      </p>

      <button
        onClick={() => {
          navigate("/Hello");
        }}
        className="bg-secondary mt-2 mb-3 w-full p-3 rounded-lg btn-shadow"
      >
        Sign up
      </button>
      <LogInLinks />
    </div>
  );
};
export default Form;