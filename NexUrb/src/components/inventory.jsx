import HeaderComponent from "./HeaderComponent";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import FooterComponent from "./footerComponent";
import "../css/inventory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faTrash,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Stack, Backdrop, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function InventoryComponent() {
  const [open, setOpen] = React.useState(false);
  const [quantity, setQuantity] = React.useState();
  const handleOpen = (e) => {
    setOpen(true);
    console.log(e);
  };

  const handleSubmit = () => {
    console.log(quantity);
    setQuantity();
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
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
      renderCell: () => (
        <FontAwesomeIcon
          icon={faTrash}
          size="2x"
          color="grey"
          className="Icon"
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
      <HeaderComponent />
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
      <FooterComponent />
    </div>
  );
}
