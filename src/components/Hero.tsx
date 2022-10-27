import React from "react";
import { Link, Outlet } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hue-container">
        <div className="yellow "></div>
        <div className="blue "></div>.
      </div>
      <div className="grid grid-cols-2 grid-rows-1 md:ml-10 mt-14 md:mt-48">
        <div className="row-span-1 row-start-1">
          <div className="flex items-center">
            <div>
              <h1 className="text-white text-4xl w-[25rem] font-bold">
                Sign In to Recharge Direct
              </h1>
              <div className="text-white m-auto text-xl  mt-10 font-semibold">
                if you don&apos;t an account you can
                <span className="text-secondary">
                  <Link to="/sign-up">&nbsp; Register here!</Link>
                </span>
              </div>
            </div>
            <img
              className="mx-auto hidden lg:inline-block w-[65%]"
              src="/assets/Character 1.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Hero;