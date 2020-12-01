import React from "react";
import {
  Container,
  Card,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Typography,
  Fab,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import AddIcon from "@material-ui/icons/Add";

import PunchlistItemTable from "./punchlistItemTable";

const useStyles = makeStyles((theme) => ({}));

const NewPunchlistDisplay = ({ form }) => {
  const classes = useStyles();

  const [editPunchlist, setEditPunchlist] = React.useState(false);
  const [showAddItemForm, setShowAddItemForm] = React.useState(false);
  const [propertyAddress, setPropertyAddress] = React.useState(
    form.property_address
  );
  const [propertyDeposit, setPropertyDeposit] = React.useState(
    form.property_deposit
  );
  const [newItemDecscription, setNewItemDescription] = React.useState("");
  const [newItemLaborHours, setNewItemLaborHours] = React.useState(0);
  const [newItemMaterialCost, setNewItemMaterialCost] = React.useState(0);
  const [items, setItems] = React.useState([
    {
      id: 0,
      item_description: "Standard Cleaning",
      owner_responsibility: false,
      item_labor_hours: 0,
      item_labor_cost: 0,
      item_material_cost: 250,
      item_total: 250,
    },
    {
      id: 1,
      item_description: "Replace Air Filter",
      owner_responsibility: false,
      item_labor_hours: 0,
      item_labor_cost: 0,
      item_material_cost: 15,
      item_total: 15,
    },
  ]);

  const handleEditPunchlist = () => {
    setEditPunchlist(!editPunchlist);
  };

  const handleAddressChange = (event) => {
    setPropertyAddress(event.target.value);
  };

  const handleDepositChange = (event) => {
    setPropertyDeposit(event.target.value);
  };

  const handleAddItem = () => {
    setShowAddItemForm(!showAddItemForm);
  };

  const handleItemDescriptionChange = (event) => {
    setNewItemDescription(event.target.value);
  };

  const handleItemLaborHoursChange = (event) => {
    setNewItemLaborHours(event.target.value);
  };

  const handleItemMaterialCostChange = (event) => {
    setNewItemMaterialCost(event.target.value);
  };

  const handleSubmitNewItem = (event) => {
    event.preventDefault();
    const laborHours = newItemLaborHours * 20;
    const total = parseInt(laborHours) + parseInt(newItemMaterialCost);
    let item = {
      id: items.length,
      item_description: newItemDecscription,
      item_labor_hours: newItemLaborHours,
      item_labor_cost: laborHours,
      owner_responsibility: false,
      item_material_cost: newItemMaterialCost,
      item_total: total,
    };
    let newSet = [...items];
    newSet.push(item);
    setItems(newSet);
    setShowAddItemForm(false);
    setNewItemDescription("");
    setNewItemLaborHours(0);
    setNewItemMaterialCost(0);
  };

  const handleDeleteItem = (index) => {
    const itemList = items;

    itemList.splice(index, 1);
    setItems(itemList);
  };

  return (
    <Card>
      <CardContent>
        <Grid container direction="column" justify="center" spacing={2}>
          <Grid
            item
            xs
            container
            direction="row"
            justify="space-between"
            spacing={2}
          >
            <Grid item xs={11}>
              {!editPunchlist && (
                <Typography variant="h5">{propertyAddress}</Typography>
              )}
              {editPunchlist && (
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Address"
                  value={propertyAddress}
                  onChange={handleAddressChange}
                />
              )}
            </Grid>
            <Grid
              item
              container
              xs={1}
              alignItems="center"
              alignContent="center"
              justify="center"
            >
              {!editPunchlist && (
                <IconButton aria-label="edit" onClick={handleEditPunchlist}>
                  <EditIcon />
                </IconButton>
              )}
              {editPunchlist && (
                <IconButton aria-label="edit" onClick={handleEditPunchlist}>
                  <SaveIcon />
                </IconButton>
              )}
            </Grid>
          </Grid>
          <Grid item>
            {!editPunchlist && (
              <Typography variant="body2">
                Deposit: ${propertyDeposit}.00
              </Typography>
            )}
            {editPunchlist && (
              <TextField
                fullWidth
                variant="outlined"
                label="Deposit"
                value={propertyDeposit}
                onChange={handleDepositChange}
              />
            )}
          </Grid>
          {items && (
            <Grid item>
              <PunchlistItemTable items={items} handler={handleDeleteItem} />
            </Grid>
          )}
          {editPunchlist && showAddItemForm && (
            <Container>
              <form onSubmit={handleSubmitNewItem}>
                <Grid
                  item
                  xs
                  container
                  direction="row"
                  justify="space-evenly"
                  spacing={1}
                >
                  <Grid item xs>
                    <TextField
                      onChange={handleItemDescriptionChange}
                      variant="outlined"
                      label="Description"
                    />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      onChange={handleItemLaborHoursChange}
                      variant="outlined"
                      label="Labor Hours"
                    />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      onChange={handleItemMaterialCostChange}
                      variant="outlined"
                      label="Material Cost"
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton aria-label="Submit Item" type="submit">
                      <AddIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </form>
            </Container>
          )}
          {editPunchlist && !showAddItemForm && (
            <Grid
              item
              xs
              container
              direction="row"
              justify="flex-end"
              alignContent="flex-end"
              alignItems="flex-end"
            >
              <Fab
                color="primary"
                aria-label="Add Item"
                onClick={handleAddItem}
              >
                <AddIcon />
              </Fab>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default NewPunchlistDisplay;
