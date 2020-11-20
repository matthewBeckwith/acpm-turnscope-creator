import React, { Component } from 'react';
import {
  Grid,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

export default function NewPunchlistForm() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return(
        <form noValidate autoComplete="off">
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Grid container direction="row" spacing={3}>
                        <Grid item xs={6}>
                            <TextField fullWidth id="property_address" label="Address" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth id="property_deposit" label="Deposit Amount" variant="outlined" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="row" spacing={3}>
                        <Grid item xs={6}>
                            <TextField fullWidth id="punchlist_item" label="Punchlist Item" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth id="punchlist_item_location" label="Item Location" variant="outlined" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="row" spacing={3}>
                        <Grid item xs={6}>
                            <TextField fullWidth id="punchlist_item_labor" label="Labor Hours" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth id="punchlist_item_material_cost" label="Material Cost" variant="outlined" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="row" spacing={3}>
                        <Grid item xs={6}>
                            <FormGroup row>
                                <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                }
                                label="Owner Responsibility"
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth multiline id="punchlist_item_notes" label="Notes" variant="outlined" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}