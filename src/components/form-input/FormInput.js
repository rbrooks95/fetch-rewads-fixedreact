import React from "react";

import "./FormInput.css";

function FormInput({ label, type, placeholder, max, min, name }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        minLength={min}
        maxLength={max}
        required
      />
    </div>
  );
}

export default FormInput;
