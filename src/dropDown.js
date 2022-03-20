import axios from "axios";
import React, { useState } from "react";

function DropDown() {
  const [job, setJob] = useState("");

  const fetchData = async () => {
    const response = await axios.get(
      "https://frontend-take-home.fetchrewards.com/form"
    );

    for (let jobs of response.data.occupations) {
      console.log(jobs);
      return jobs;
    }
  };
  fetchData();
  return (
    <form id="form">
      <div className="form-group">
        <label>Occupation</label>
        <select
          placeholder="pick"
          required
          name="occupation"
          onChange={() => {
            const choice = this.response.data.occupations;
            setJob(choice);
          }}
        >
          <option value={fetchData}> {fetchData}</option>
        </select>
      </div>
    </form>
  );
}

export default DropDown;
