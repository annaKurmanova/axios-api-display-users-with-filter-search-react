import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Employee from "./components/Employee";

const API_URL = "https://jsonplaceholder.typicode.com/users/";

function App() {
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
    <div className="App">
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
            <div className="employee" key={employee.id}>
              <Employee employee={employee} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
