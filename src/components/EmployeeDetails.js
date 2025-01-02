import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EmployeeDetails.css'; // Importing the CSS for styling

const EmployeeDetail = () => {
  const { psNumber } = useParams(); // Get PS number from URL
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the employee data based on PS number
    fetch('/data/data.json') // Path to your employee data JSON file
      .then((response) => response.json())
      .then((data) => {
        const hr = data.find((hr) => hr.psNumber === psNumber);
        setEmployee(hr); // Set employee data
      });
  }, [psNumber]);

  if (!employee) {
    return <p>No employee found for PS number {psNumber}. Please check the PS number.</p>;
  }

  return (
    <div className="employee-detail-page">
      <div className="video-background">
      <img src="/images/hrbg.png" alt="Background" className="background-img" />

        <div className="overlay"></div>
      </div>
      <div className="employee-card">
        <img src={employee.image} alt="HR" className="employee-img" />
        <div className="employee-info">
          <h2>{employee.name}</h2>
          <p><strong>PS Number:</strong> {employee.psNumber}</p>
          <p><strong>Department:</strong> {employee.department}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Phone:</strong> {employee.phone}</p>
          <p><strong>Address:</strong> {employee.address}</p>
          <p><strong>Job Title:</strong> {employee.jobTitle}</p>
        </div>
      </div>
      <button className="back-btn" onClick={() => navigate('/')}>Back to Home</button>
    </div>
    
  );
};

export default EmployeeDetail;
