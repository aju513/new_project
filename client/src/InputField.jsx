import React from "react";

const InputField = ({
  label,
  value,
  type,
  handleChange,
  name,
  error,
  setError,
}) => {
  return (
    <>
      <div style={{ margin: "4px", marginLeft: "20px", marginBottom: "20px" }}>
        <p style={{ color: "red", fontSize: "11px" }}>{error && error.err}</p>
        <h4>{label}</h4>
        <input
          defaultValue={value}
          type={type}
          onChange={(e) => {
            e.preventDefault();
            setError({ err: "", name: "" });
            handleChange && handleChange(e.target.value, name);
          }}
        />
      </div>
    </>
  );
};

export default InputField;
