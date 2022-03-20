import axios from "axios";
import React, { useState, useEffect } from "react";

function DropDown() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://frontend-take-home.fetchrewards.com/form"
      );

      setJobs(response.data.occupations);
    };
    fetchData();
  }, []);

  console.log(jobs);
  return (
    <div className="form-group">
      <label>Occupation</label>
      <select
        placeholder="pick"
        required
        name="occupation"
        onChange={() => {
          const choice = this.response.data.occupations;
        }}
      >
        <option value="" disabled selected hidden>
          Choose a Occupation
        </option>
        {jobs.map((job) => {
          return <option value={job}>{job}</option>;
        })}
      </select>
    </div>
  );
}

export default DropDown;
