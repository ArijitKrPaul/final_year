import "../css/header.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Box,
  Toolbar,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import Backdrop from "@mui/material/Backdrop";
import TextField from "@mui/material/TextField";
//date
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCirclePlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
library.add(fas, far, fab);

import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "../css/project.css";
import FooterComponent from "./footerComponent";

export default function ProjectComponent() {
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [dept, setDept] = React.useState("");
  const [project, setProject] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [addState, setAddState] = React.useState("");
  const [date, setDate] = React.useState(null);

  const statesWithCities = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
    "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro", "Bomdila"],
    Assam: ["Guwahati", "Dibrugarh", "Jorhat", "Silchar"],
    Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
    Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur", "Korba"],
    Delhi: ["New Delhi"],
    Goa: ["Panaji", "Margao", "Vasco da Gama"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    Haryana: ["Chandigarh", "Faridabad", "Gurgaon", "Panipat"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Kullu"],
    Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
    Karnataka: ["Bangalore", "Mysore", "Mangalore", "Hubli"],
    Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    Manipur: ["Imphal"],
    Meghalaya: ["Shillong"],
    Mizoram: ["Aizawl"],
    Nagaland: ["Kohima", "Dimapur"],
    Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Puri"],
    Punjab: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"],
    Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
    Sikkim: ["Gangtok"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
    Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
    Tripura: ["Agartala"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi"],
    Uttarakhand: ["Dehradun", "Haridwar", "Nainital", "Rishikesh"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol"],
  };

  const handleSubmit = () => {
    console.log(state, city);
    setState("");
    setCity("");
  };

  const handleForm = () => {
    console.log(dept, project, location, desc, addState, date);
    setDept("");
    setProject("");
    setLocation("");
    setAddState("");
    setDesc("");
    setDate(null);
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <Toolbar id="ProjectNavbar">
        <p>NexUrb</p>
        <FontAwesomeIcon
          icon={faCirclePlus}
          size="1x"
          id="addButton"
          onClick={handleOpen}
        />
      </Toolbar>
      <div class="projectcontainer">
        <div class="search-area">
          <FormControl fullWidth variant="filled">
            <InputLabel>State</InputLabel>
            <Select
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                setCity(""); // Reset city when state changes
              }}
            >
              {Object.keys(statesWithCities).map((stateName) => (
                <MenuItem key={stateName} value={stateName}>
                  {stateName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl variant="filled" disabled={!state} fullWidth>
            <InputLabel>City</InputLabel>
            <Select value={city} onChange={(e) => setCity(e.target.value)}>
              {state &&
                statesWithCities[state].map((cityName) => (
                  <MenuItem key={cityName} value={cityName}>
                    {cityName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
        <Button id="search-button" onClick={handleSubmit}>
          Search
        </Button>

        <div class="card-area">
          <Card sx={{ maxWidth: 950 }}>
            <CardActionArea component="div">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  The golden rays of the late afternoon sun spilled across the
                  quiet park, painting long shadows that swayed gently in the
                  breeze. A faint hum of distant traffic mingled with the soft
                  rustle of leaves overhead. Somewhere, a dog barked playfully,
                  and the scent of fresh grass carried on the wind. For a brief
                  moment, it felt as if time had slowed, wrapping everything in
                  a warm, unhurried embrace.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 950 }}>
            <CardActionArea component="div">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  The golden rays of the late afternoon sun spilled across the
                  quiet park, painting long shadows that swayed gently in the
                  breeze. A faint hum of distant traffic mingled with the soft
                  rustle of leaves overhead. Somewhere, a dog barked playfully,
                  and the scent of fresh grass carried on the wind. For a brief
                  moment, it felt as if time had slowed, wrapping everything in
                  a warm, unhurried embrace.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 950 }}>
            <CardActionArea component="div">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  The golden rays of the late afternoon sun spilled across the
                  quiet park, painting long shadows that swayed gently in the
                  breeze. A faint hum of distant traffic mingled with the soft
                  rustle of leaves overhead. Somewhere, a dog barked playfully,
                  and the scent of fresh grass carried on the wind. For a brief
                  moment, it felt as if time had slowed, wrapping everything in
                  a warm, unhurried embrace.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <Backdrop
          sx={(theme) => ({ color: "black", zIndex: theme.zIndex.drawer + 1 })}
          open={open}
        >
          <Stack
            gap={2}
            width={450}
            alignContent={"center"}
            textAlign={"center"}
            className="addForm"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
              mb={2}
            >
              <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "left" }}>
                Add New Project
              </Typography>
              <FontAwesomeIcon
                icon={faCircleXmark}
                size="2x"
                color="red"
                className="xMark"
                onClick={handleClose}
                style={{ cursor: "pointer" }}
              />
            </Box>

            <TextField
              id="filled-basic"
              label="Department Name"
              variant="filled"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              required
            />
            <TextField
              id="filled-basic"
              label="Project Type"
              variant="filled"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              required
            />
            <TextField
              id="filled-multiline-flexible"
              label="Project Description"
              multiline
              maxRows={4}
              variant="filled"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            />
            <TextField
              id="filled-basic"
              label="State"
              variant="filled"
              value={addState}
              onChange={(e) => setAddState(e.target.value)}
              required
            />
            <TextField
              id="filled-basic"
              label="Location"
              variant="filled"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Choose Date"
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
            <Button
              variant="contained"
              className="addFormButton"
              sx={{ backgroundColor: "#6b46a6" }}
              onClick={handleForm}
            >
              ADD
            </Button>
          </Stack>
        </Backdrop>
      </div>
      <FooterComponent />
    </div>
  );
}
