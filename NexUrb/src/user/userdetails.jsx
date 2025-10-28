import React from "react";
import "./user.css";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/footerComponent";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button, Divider } from "@mui/material";

export default function UserDetailsComponent() {
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("userDetails")) || {
    firstname: "ARIJIT",
    lastname: "PAUL",
    dob: "16/07/2004",
    email: "a@gmail.com",
    contact: "6289987565",
    gender: "M",
    deptname: "admin",
    address: "bkp",
    city: "kol",
    pincode: "700119",
    state: "WB",
    country: "INDIA",
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div className="page-wrapper">
      <HeaderComponent />

      <div id="userdetails-container">
        <Card
          sx={{
             width: "80%",        
             maxWidth: "900px", 
            margin: "40px auto",
            padding: "20px",
            boxShadow: 3,
            borderRadius: "16px",
            backgroundColor: "#fafafa",
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              color="primary"
              gutterBottom
              sx={{ textAlign: "center", marginBottom: "20px" }}
            >
              User Details
            </Typography>

            <Divider sx={{ marginBottom: 3 }} />

            <div className="details-grid">
              <div className="detail-row">
                <strong>First Name:</strong> <span>{storedUser.firstname}</span>
              </div>
              <div className="detail-row">
                <strong>Last Name:</strong> <span>{storedUser.lastname}</span>
              </div>
              <div className="detail-row">
                <strong>Date of Birth:</strong> <span>{storedUser.dob}</span>
              </div>
              <div className="detail-row">
                <strong>Email:</strong> <span>{storedUser.email}</span>
              </div>
              <div className="detail-row">
                <strong>Contact:</strong> <span>{storedUser.contact}</span>
              </div>
              <div className="detail-row">
                <strong>Gender:</strong> <span>{storedUser.gender}</span>
              </div>
              <div className="detail-row">
                <strong>Department:</strong> <span>{storedUser.deptname}</span>
              </div>
              <div className="detail-row">
                <strong>Country:</strong> <span>{storedUser.country}</span>
              </div>
              <div className="detail-row">
                <strong>State:</strong> <span>{storedUser.state}</span>
              </div>
              <div className="detail-row">
                <strong>City:</strong> <span>{storedUser.city}</span>
              </div>
              <div className="detail-row">
                <strong>Pincode:</strong> <span>{storedUser.pincode}</span>
              </div>
              <div className="detail-row">
                <strong>Address:</strong> <span>{storedUser.address}</span>
              </div>
            </div>

            <Divider sx={{ marginTop: 3, marginBottom: 2 }} />

            <div style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleBack}
                sx={{ marginTop: 2 }}
              >
                Back to Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <FooterComponent />
    </div>
  );
}


