// DepartmentContacts.js
import React from "react";
import "../css/contacts.css"; // Import the CSS file

const departments = [
  {
    name: "Department A",
    email: "A@example.com",
    phone: "62777563248",
    address: "123 Sales St, Business City, BC 10001",
    hours: "Monday - Friday: 9 AM - 5 PM",
  },
  {
    name: "Department B",
    email: "B@example.com",
    phone: "62777556248",
    address: "456 Support Ave, Tech Town, TT 20002",
    hours: "Monday - Sunday: 24/7",
  },
  {
    name: "Department C",
    email: "C@example.com",
    phone: "62977563248",
    address: "789 Marketing Blvd, Creative Hub, CH 30003",
    hours: "Monday - Friday: 10 AM - 6 PM",
  },
  {
    name: "Department D",
    email: "D@example.com",
    phone: "62758563248",
    address: "101 HR Lane, Talentville, TV 40004",
    hours: "Monday - Friday: 9 AM - 5 PM (Appointments Only)",
  },
  {
    name: "Department D",
    email: "D@example.com",
    phone: "62758563248",
    address: "101 HR Lane, Talentville, TV 40004",
    hours: "Monday - Friday: 9 AM - 5 PM (Appointments Only)",
  },
  {
    name: "Department D",
    email: "D@example.com",
    phone: "62758563248",
    address: "101 HR Lane, Talentville, TV 40004",
    hours: "Monday - Friday: 9 AM - 5 PM (Appointments Only)",
  },
  {
    name: "Department D",
    email: "D@example.com",
    phone: "62758563248",
    address: "101 HR Lane, Talentville, TV 40004",
    hours: "Monday - Friday: 9 AM - 5 PM (Appointments Only)",
  },
];

function DepartmentContacts() {
  return (
    <div className="department-contacts-container">
      <h1>Our Departments</h1>
      <div className="departments-grid">
        {departments.map((dept, index) => (
          <div key={index} className="department-card">
            <h2>{dept.name}</h2>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${dept.email}`}>{dept.email}</a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${dept.phone}`}>{dept.phone}</a>
            </p>
            <p>
              <strong>Address:</strong> {dept.address}
            </p>
            <p>
              <strong>Hours:</strong> {dept.hours}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DepartmentContacts;
