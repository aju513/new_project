import React from "react";

const InputField = ({ value, type, handleChange, name }) => {
  return (
    <>
      <input
        style={{
          margin: "1.2em",
        }}
        value={value}
        type={type}
        onChange={(e) => {
          e.preventDefault();
          handleChange && handleChange(e.target.value, name);
        }}
      />
    </>
  );
};

export default InputField;
