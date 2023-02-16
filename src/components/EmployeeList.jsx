import { useState, useEffect } from "react";
import axios from "axios";
import Employee from "./Employee";
import { Routes, Route, Link } from "react-router-dom";
import Single from "../pages/Single";

const API_URL = "https://jsonplaceholder.typicode.com/users/";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchEmployees = async () => {
    axios.get(`${API_URL}`).then((res) => {
      const people = res.data;
      setEmployees(people);
    });
  };

  useEffect(() => {
    searchEmployees();
  }, []);

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search Employees"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => searchEmployees(searchTerm)}>Search</button>
      </div>
      <div className="employees">
        {employees
          .filter((employee) =>
            searchTerm.toLowerCase() === ""
              ? employee
              : employee.name.toLowerCase().includes(searchTerm)
          )
          .map((employee) => (
            <Link
              to={`/single/${employee.id}`}
              key={employee.id}
              className="employee"
            >
              <Employee employee={employee} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default EmployeeList;
