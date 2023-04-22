import React from "react";
import { useState, useEffect } from "react";

const Input = ({ label, type = "text", ...props }) => {
  const [show, setShow] = useState(false);
  const [inputType, setType] = useState(type);

  useEffect(() => {
    if (show) {
      setType("text");
    } else if (type === "password") {
      setType("password");
    }
  }, [show]);

  return (
    <label className="block relative">
      <input
        {...props}
        required={true}
        type={inputType}
        className="bg-zing-50 border text-xs w-full h-[38px] px-2 rounded-sm outline-none focus:border-gray-400 valid:pt-[10px] peer"
      />
      <small className="absolute top-1/2 left-[8px] text-xs cursor-text pointer-events-none text-gray-500 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">
        {label}
      </small>

      {type === "password" && props?.value && (
        <div
          type="button"
          onClick={() => {
            setShow(!show);
          }}
          className="cursor-pointer select-none absolute top-0 right-0 h-full flex items-center text-sm font-semibold pr-2"
        >
          {show ? "Hide" : "Show"}
        </div>
      )}
    </label>
  );
};

export default Input;
