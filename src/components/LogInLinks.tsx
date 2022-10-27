import React from "react";
import ImgLink from "./ImageLink";
const LogInLinks = () => {
  return (
    <>
      <h2 className="w-full text-center text-shady border-shady mt-5 mb-6 line-element">
        <span className="p-2">Or continue with</span>
      </h2>
      <div className="flex flex-row items-center justify-between w-full">
        <ImgLink
          alt="google log in "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
        />
        <ImgLink
          alt="apple log in"
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
        />
        <ImgLink
          alt="facebook log in "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
        />
      </div>
    </>
  );
};

export default LogInLinks;
