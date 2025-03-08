import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EmployeeManagement.css";

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/employees")
      .then(response => setEmployees(response.data))
      .catch(error => console.error("Error fetching employees", error));
  }, []);

  return (
    <div className="employee-management">
      <h2>Employee List</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp._id}>{emp.name} ({emp.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeManagement;
