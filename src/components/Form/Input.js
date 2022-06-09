import React from "react";

function Input({ placeholder, name, value, onChange }) {
  return (
    <>
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
