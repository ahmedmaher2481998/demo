import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [activeBtn, setActiveBtn] = useState<string | null>("Forex");
  const img1 =
    "https://as2.ftcdn.net/v2/jpg/02/15/84/43/1000_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";
  const img2 = "/assets/Rectangle 2.png";
  const [img, setImg] = useState(img2);
  return (
    <div className="flex items-center flex-col justify-center w-[45%] ml-auto lg:mr-10 xl:mr-16">
      <div className="flex justify-center items-center -mt-20 mb-5">
        <div className="relative">
          <img
            src={img}
            alt="Profile avatar"
            className="w-auto h-32 rounded-lg"
          />
          <AiOutlineCloseCircle
            onClick={() => setImg(img1)}
            className="absolute top-2 cursor-pointer text-gray-600 right-2"
          />
        </div>
      </div>
      <div className="relative flex border mb-5 border-gray-300 text-gray-900  bg-shady rounded-lg focus:ring-secondary w-full focus:border-secondary   ">
        <input
          type="text"
          className="w-full rounded-lg  text-sm bg-shad min-h-full text-black  focus:outline-none p-2.5"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
          required
        />
        <AiOutlineCloseCircle
          className="bg-white absolute top-3 cursor-pointer right-3 text-gray-600"
          onClick={() => setCountry("")}
        />
      </div>
      <div className=" w-full relative flex border mb-5 border-gray-300 text-gray-900  bg-shady rounded-lg focus:ring-secondary focus:border-secondary   ">
        <input
          type="text"
          className=" rounded-lg w-full  text-sm bg-shad min-h-full text-black  focus:outline-none p-2.5"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="State"
          required
        />
        <AiOutlineCloseCircle
          className="bg-white absolute top-3 cursor-pointer right-3 text-gray-600"
          onClick={() => setState("")}
        />
      </div>
      <div className="flex items-start-start flex-col w-full  justify-center">
        <p className="text-sm text-[#c7c7c7]">Pick your Interest!</p>
        <div className="flex justify-between mt-5 space-x-3 items-center">
          <button
            onClick={(e) => setActiveBtn(e.currentTarget.textContent)}
            className={`w-24 rounded-md p-3  text-base ${
              activeBtn === "Forex" ? "active-btn" : "bg-shady"
            }`}
          >
            Forex
          </button>
          <button
            onClick={(e) => setActiveBtn(e.currentTarget.textContent)}
            className={`w-28 rounded-md p-3  text-base ${
              activeBtn === "Crypto" ? "active-btn" : "bg-shady"
            }`}
          >
            Crypto
          </button>
          <button
            onClick={(e) => setActiveBtn(e.currentTarget.textContent)}
            className={`w-28 rounded-md p-3  text-base ${
              activeBtn === "Binary" ? "active-btn" : "bg-shady"
            }`}
          >
            Binary
          </button>
        </div>
      </div>

      <button
        onClick={() => {
          navigate("/log-in");
        }}
        className="bg-secondary text-shady mt-2 mb-3 w-full p-3 rounded-lg btn-shadow"
      >
        Continue
      </button>
    </div>
  );
};
export default Form;
