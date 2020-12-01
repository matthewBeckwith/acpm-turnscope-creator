import React from "react";
import {
  Grid,
  TextField,
  Card,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

const NewPunchlistForm = ({
  handleAddressChange,
  handleDepositChange,
  handleSubmit,
}) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Create New Punchlist</Typography>
        <br />
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="property_address"
                label="Address"
                variant="outlined"
                onChange={handleAddressChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="property_deposit"
                label="Deposit Amount"
                variant="outlined"
                onChange={handleDepositChange}
              />
            </Grid>
            <Grid item xs={2}>
              <Button fullWidth type="submit">
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewPunchlistForm;
