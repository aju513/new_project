import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import dataJson from "./datajson.json";
import InputField from "./InputField";
axios.withCredentials = true;
const Form = () => {
  const [state, setState] = useState(dataJson);
  const [error, setError] = useState({ err: "", name: "" });

  const handleChange = (data, type) => {
    var obj = state;

    obj.forEach((element) => {
      if (element.name === type) {
        element.value = data;
      }
    });
    console.log(obj);
    axios.get("http://localhost:8000/api").then((res) => setState(res.data));
    axios.post("http://localhost:8000/api", obj, { withCredentials: true });
  };
  const validate = (e) => {
    e.preventDefault();
    state.forEach((element) => {
      if (element.value.length === 0) {
        const value = ` ${element.name} is empty`;
        setError({ err: value, name: element.name });
      } else if (element.value.length < 4) {
        const value = `${element.name} length is less than 4`;
        setError({
          err: value,
          name: element.name,
        });
      }
    });
  };
  return (
    <>
      <form
        onSubmit={(e) => validate(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          margin: "1.2em",
          border: "solid black ",
          borderRadius: "4px",
        }}
      >
        {state.map((e) => (
          <InputField
            type={e.type}
            value={e.value}
            handleChange={handleChange}
            name={e.name}
            setError={setError}
            label={e.name}
            error={error.name === e.name && error}
          />
        ))}
        <InputField type="submit" value="submit" />
      </form>
    </>
  );
};

export default Form;
