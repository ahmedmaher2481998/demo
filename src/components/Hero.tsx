import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Hero = () => {
  let mainText;
  const { pathname } = useLocation();
  if (pathname === "/log-in" || pathname === "/final") {
    mainText = "Sign In to Recharge Direct";
  } else {
    mainText = "Join F8 to discover so much more..";
  }
  return (
    <>
      <div className="hue-container">
        <div className="yellow "></div>
        <div className="blue "></div>
      </div>
      <div className="grid grid-cols-2 grid-rows-1  md:ml-10 mt-14 md:mt-48">
        <div className="row-span-1 row-start-1 ">
          <div className="flex items-center">
            <div className="-mt-32 mr-16">
              <h1
                className={`text-white font-bold 
                w-[22rem] text-4xl`}
              >
                {mainText}
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
