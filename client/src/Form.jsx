import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import dataJson from "./datajson.json";
import InputField from "./InputField";
axios.withCredentials = true;
const Form = () => {
  const [state, setState] = useState(dataJson);
  console.log(state);
  const handleChange = (data, type) => {
    var obj = state;

    obj.forEach((element) => {
      if (type[0] === Object.keys(element)[0]) {
        element[type[0]] = data;
      }
    });
    axios.post("http://localhost:8000/api", obj, { withCredentials: true });
    axios.get("http://localhost:8000/api").then((res) => setState(res.data));
  };
  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          margin: "1.2em",
        }}
      >
        {state.map((e) => (
          <InputField
            type="text"
            value={Object.values(e)}
            handleChange={handleChange}
            name={Object.keys(e)}
          />
        ))}
        <InputField type="submit" value="submit" />
      </form>
    </>
  );
};

export default Form;
