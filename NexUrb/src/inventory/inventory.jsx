import HeaderComponent from "../components/HeaderComponent";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import FooterComponent from "../components/footerComponent";
import "./inventory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faTrash,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Stack, Backdrop, Typography, Button, Toolbar } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function InventoryComponent() {
  const [open, setOpen] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);
  const [open1, setOpen1] = React.useState(false);
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const [price, setPrice] = React.useState(0);
  const [open2, setOpen2] = React.useState(false);
  const [del, setDel] = React.useState("");
  const errorp = document.getElementsByTagName("p")[3];

  const handleOpen = (e) => {
    setOpen(true);
    console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quantity);
    setQuantity();
    setOpen(false);
    setOpen1(false);
  };

  const handleAdd = () => {
    setOpen1(true);
    setName("");
    setAmount(0);
    setPrice(0);
  };

  const handleClose = () => {
    setOpen(false);
    setOpen1(false);
    setDel("");
    setOpen2(false);
    errorp.classList.remove("error");
  };

  const handleDelete = (e) => {
    console.log(e);
    setOpen2(true);
    errorp.classList.remove("error");
    errorp.innerText = "";
  };

  const handleDelSubmit = () => {
    if (del === "Permanentlydelete") {
      setOpen2(false);
      setDel("");
    } else {
      errorp.innerText = "Wrong Text!";
      errorp.classList.add("error");
    }
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "itemName",
      headerName: "Item name",
      width: 200,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      width: 150,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 150,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "addicon",
      headerName: "",
      width: 150,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <FontAwesomeIcon
          icon={faCirclePlus}
          size="2x"
          color="grey"
          className="Icon"
          onClick={() => handleOpen(params.row.itemName)}
        />
      ),
    },
    {
      field: "trashicon",
      headerName: "",
      width: 150,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <FontAwesomeIcon
          icon={faTrash}
          size="2x"
          color="grey"
          className="Icon"
          onClick={() => handleDelete(params.row.itemName)}
        />
      ),
    },
  ];
  const rows = [
    {
      id: 1,
      itemName: "nail",
      quantity: 14,
      price: 15,
    },
    {
      id: 2,
      itemName: "nail-x",
      quantity: 14,
      price: 150,
    },
  ];
  return (
    <div>
      <Toolbar id="ProjectNavbar">
        <p>NexUrb</p>
        <FontAwesomeIcon
          icon={faCirclePlus}
          size="1x"
          id="addButton"
          onClick={handleAdd}
        />
      </Toolbar>
      <div className="inventory-container">
        <DataGrid
          id="inventory-table"
          rows={rows}
          columns={columns}
          pageSize={10}
          pageSizeOptions={[10, 15]}
        />
      </div>
      <Backdrop
        sx={(theme) => ({ color: "black", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <Stack
          id="updateItem"
          gap={2}
          width={450}
          alignContent={"center"}
          textAlign={"center"}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            mb={2}
          >
            <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "left" }}>
              Update Quantity
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
            label="Enter new Quantity"
            variant="filled"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Button className="inventory-form-button" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Backdrop>
      <Backdrop
        sx={(theme) => ({ color: "black", zIndex: theme.zIndex.drawer + 1 })}
        open={open1}
      >
        <Stack
          id="updateItem"
          gap={2}
          width={450}
          alignContent={"center"}
          textAlign={"center"}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            mb={2}
          >
            <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "left" }}>
              Add New Item
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
            label="Enter Item Name"
            variant="filled"
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Enter Amount"
            variant="filled"
            type="number"
            value={amount}
            required
            onChange={(e) => setAmount(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Price per Item"
            variant="filled"
            type="number"
            value={price}
            required
            onChange={(e) => setPrice(e.target.value)}
          />
          <Button className="inventory-form-button" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Backdrop>
      <Backdrop
        sx={(theme) => ({ color: "black", zIndex: theme.zIndex.drawer + 1 })}
        open={open2}
      >
        <Stack
          id="DelItem"
          gap={2}
          width={450}
          alignContent={"center"}
          textAlign={"center"}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            mb={2}
          >
            <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "left" }}>
              Delete Item
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
          <p>Do you want to permanently delete this item?</p>
          <TextField
            id="filled-basic"
            label="Enter 'Permanentlydelete'"
            variant="filled"
            type="text"
            value={del}
            onChange={(e) => setDel(e.target.value)}
          />
          <p></p>
          <Button className="inventory-form-button" onClick={handleDelSubmit}>
            Submit
          </Button>
        </Stack>
      </Backdrop>
      <FooterComponent />
    </div>
  );
}
