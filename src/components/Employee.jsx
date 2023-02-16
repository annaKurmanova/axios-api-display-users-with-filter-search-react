import React from "react";

const Employee = ({ employee }) => {
  return (
    <>
      <div className="name">
        <h3>{employee.name}</h3>
      </div>
      <div className="username">
        <p>
          Username: <b>{employee.username}</b>
        </p>
      </div>
      <div className="company">
        <p>
          Company: <b>{employee.company.name}</b>
        </p>
      </div>
      <div className="phone">
        <p>
          Phone Number: <b>{employee.phone}</b>
        </p>
      </div>
      <div className="website">
        <p>
          Website: <b>{employee.website}</b>
        </p>
      </div>
    </>
  );
};

export default Employee;
