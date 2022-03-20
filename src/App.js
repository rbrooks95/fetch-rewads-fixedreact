import React from "react";
import FormInput from "./components/form-input/FormInput";
import DropDown from "./components/drop-down/DropDown";
import "./App.css";

const App = () => (
  <div className="container">
    <h1>Sign up to Fetch Rewards!</h1>
    {/* full name */}
    <form id="form">
      <FormInput
        min={"3"}
        max={"100"}
        type={"text"}
        label={"Full Name"}
        placeholder={"Full Name"}
        name={"name"}
      />
      {/* phone number */}
      <FormInput
        type={"tel"}
        label={"Phone Number"}
        placeholder={"555-555-5555"}
        name={"phone"}
      />
      {/* email */}
      <FormInput
        type={"email"}
        label={"Email"}
        placeholder={"email@address.com"}
        name={"email"}
      />
      {/* occupations and states */}
      <DropDown />
    </form>
  </div>
);

export default App;
