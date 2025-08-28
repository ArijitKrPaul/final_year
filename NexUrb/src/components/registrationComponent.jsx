import React, { useState } from "react";

import "../css/registration.css";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./footerComponent";
import { useNavigate } from "react-router-dom";

export default function RegistrationComponent() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    password: "",
    gender: "",
    deptname: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // e.preventDefault();
    console.log(values);
    navigate("/home");
  };

  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name*</label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstname"
            onChange={(e) => handleChanges(e)}
            required
            value={values.firstname}
          />
          <label htmlFor="lastname">Last Name*</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastname"
            onChange={(e) => handleChanges(e)}
            required
            value={values.lastname}
          />
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            placeholder="Enter Email "
            name="email"
            onChange={(e) => handleChanges(e)}
            required
            value={values.email}
          />
          <label htmlFor="contact">Contact*</label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            name="contact"
            onChange={(e) => handleChanges(e)}
            required
            value={values.contact}
          />
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={(e) => handleChanges(e)}
            required
            value={values.password}
          />
          <label htmlFor="gender">Gender*</label>
          <input
            type="radio"
            name="gender"
            onChange={(e) => handleChanges(e)}
            required
            value="Male"
            checked={values.gender === "Male"}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            onChange={(e) => handleChanges(e)}
            required
            value="Female"
            checked={values.gender === "Female"}
          />{" "}
          Female
          <label htmlFor="deptname">Department Name*</label>
          <input
            type="text"
            placeholder="Enter Department Name"
            name="deptname"
            onChange={(e) => handleChanges(e)}
            required
            value={values.deptname}
          />
          <label htmlFor="address">Address*</label>
          <input
            type="text"
            placeholder="Enter Address"
            name="address"
            onChange={(e) => handleChanges(e)}
            required
            value={values.address}
          />
          <label htmlFor="city">City*</label>
          <input
            type="text"
            placeholder="Enter City"
            name="city"
            onChange={(e) => handleChanges(e)}
            required
            value={values.city}
          />
          <label htmlFor="pincode">Pincode*</label>
          <input
            type="number"
            placeholder="Enter Pincode"
            name="pincode"
            onChange={(e) => handleChanges(e)}
            required
            value={values.pincode}
          />
          <label htmlFor="state">State*</label>
          <input
            type="text"
            placeholder="Enter State"
            name="state"
            onChange={(e) => handleChanges(e)}
            required
            value={values.state}
          />
          <label htmlFor="country">Country*</label>
          <input
            type="text"
            placeholder="Enter Country"
            name="country"
            onChange={(e) => handleChanges(e)}
            required
            value={values.country}
          />
          <button
            type="button"
            onClick={() =>
              setValues({
                firstname: "",
                lastname: "",
                email: "",
                contact: "",
                password: "",
                gender: "",
                deptname: "",
                address: "",
                city: "",
                pincode: "",
                state: "",
                country: "",
              })
            }
          >
            Reset
          </button>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <FooterComponent />
    </div>
  );
}
