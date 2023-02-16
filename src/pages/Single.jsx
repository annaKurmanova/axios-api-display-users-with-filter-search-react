import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Single = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, [id]);
  return (
    <>
      {employee && (
        <div className="employee-container">
          <div className="main-info">
            <div className="main-info-header inner">
              <h1>{employee.name} </h1>
            </div>
            <div className="inner">
              <h3>Address:</h3>
              <p>
                {employee.address.street} {employee.address.suite}
              </p>
              <p>
                {employee.address.city} {employee.address.zipcode}
              </p>
            </div>
          </div>
          <div className="more-info inner">
            <Link className="back-link" to={"/"}>
              Go back
            </Link>
            <p>
              Username: <span>{employee.username}</span>
            </p>
            <p>
              Company: <span>{employee.company.name}</span>
            </p>
            <p>
              Phone: <span>{employee.phone}</span>
            </p>
            <p>
              Website: <span>{employee.website}</span>
            </p>
            <div className="quote">
              <p>Quote:</p>
              <span>"{employee.company.catchPhrase}"</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Single;
