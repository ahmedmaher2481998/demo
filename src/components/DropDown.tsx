import React from "react";

const DropDown = () => {
  return (
    <>
      <select
        className="bg-home text-white p-2 outline-none"
        name="lang"
        id="lang"
        disabled={false}
        defaultValue="end"
      >
        <option className="border-none" value="eng">
          English
        </option>
        <option className="border-none" value="ger">
          German
        </option>
        <option className="border-none" value="arb">
          Arabic
        </option>
      </select>
    </>
  );
};

export default DropDown;
