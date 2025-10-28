import "./dashboard.css";
import FooterComponent from "../components/footerComponent";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HeaderComponent from "../components/HeaderComponent";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

export default function DashboardComponent() {
  const navigate = useNavigate();
  //checkingn something
  const changeproject = () => {
    navigate("/home/project");
  };

  const changeInventory = () => {
    navigate("/home/inventory");
  };
  const contactPage = () => {
    navigate("/home/contact");
  };
  const changeUserDetails = () => {
    navigate("/home/userdetails");
  };

  return (
    <div>
      <HeaderComponent />
      <div className="main-container">
        <div id="home-card-area">
          <Card sx={{ maxWidth: 345 }} className="cards">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Projects
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <Divider />
            <CardActions className="dashboard-btns-area">
              <Button
                size="small"
                className="dashboard-btns"
                onClick={changeproject}
              >
                ADD PROJECT
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }} className="cards">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Inventory
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <Divider />
            <CardActions className="dashboard-btns-area">
              <Button
                size="small"
                className="dashboard-btns"
                onClick={changeInventory}
              >
                MANAGE
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }} className="cards">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                User Details
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <Divider />
            <CardActions className="dashboard-btns-area">
              <Button
                size="small"
                className="dashboard-btns"
                onClick={changeUserDetails}
              >
                USER
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }} className="cards">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Contact
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <Divider />
            <CardActions className="dashboard-btns-area">
              <Button
                size="small"
                className="dashboard-btns"
                onClick={contactPage}
              >
                Contact Departments
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }} className="cards">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Forums
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <Divider />
            <CardActions className="dashboard-btns-area">
              <Button size="small" className="dashboard-btns">
                JOIN
              </Button>
            </CardActions>
          </Card>
        </div>
        <div id="notice-board">
          <Card
            sx={{ backgroundColor: "white", boxShadow: 3 }}
            id="notice-area"
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                color="primary"
                gutterBottom
                fontSize={"30px"}
              >
                Notice Board
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={"20px"}
              >
                • <b>Exam Alert:</b> Semester exams start Sept 10.
                <br />• <b>Assignment:</b> AI/ML Project submission deadline is
                Aug 31.
                <br />• <b>Event:</b> CPP Workshop on Sept 2.
                <br />• <b>Result:</b> Mid-term results will be declared on Sept
                5.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
