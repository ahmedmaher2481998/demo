import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { SlCalender } from "react-icons/sl";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [startDate, setStartDate] = useState<null | Date>();

  return (
    <div className="flex items-center flex-col justify-center w-[45%] ml-auto lg:mr-10 xl:mr-16">
      <div className="w-full relative flex border mb-5 border-gray-300 text-gray-900  bg-shady rounded-lg focus:ring-secondary w-full focus:border-secondary   ">
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
      <div className=" w-full relative flex border mb-5 border-gray-300 text-gray-900  bg-shady rounded-lg focus:ring-secondary focus:border-secondary   ">
        <input
          type="text"
          className=" rounded-lg w-full  text-sm bg-shad min-h-full text-black  focus:outline-none p-2.5"
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

      <div className=" relative w-full flex border mb-5 border-gray-300 text-gray-900  bg-shady rounded-lg focus:ring-secondary focus:border-secondary   ">
        <DatePicker
          className=" h-10 w-full rounded-lg p-2 "
          placeholderText="Select date"
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        />

        {/* <SlCalender
          className="bg-white absolute top-3  left-3 text-gray-600"
          onClick={() => setFirstName("")}
        /> */}
      </div>
      <div className=" pr-4 relative w-full text-center flex border mb-5 border-gray-300 text-gray-900  bg-shady rounded-lg focus:ring-secondary focus:border-secondary   ">
        <select
          name="User"
          className="w-full h-10 p-2 pr-6 rounded-lg outline-none "
          id="user"
          defaultValue={"User"}
        >
          {/* <option value="User" className="hidden" disabled selected></option> */}
          <option value="user">User</option>
          <option value="trader">Trader</option>
        </select>
      </div>

      <button
        onClick={() => {
          navigate("/Hello");
        }}
        className="bg-secondary text-shady mt-2 mb-3 w-full p-3 rounded-lg btn-shadow"
      >
        Sign up
      </button>
    </div>
  );
};
export default Form;
