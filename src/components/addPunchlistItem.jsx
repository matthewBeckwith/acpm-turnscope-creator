import React from 'react';
import {
    Grid,
    TextField,
    FormGroup,
    FormControlLabel,
    Checkbox
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

export default function AddPunchlistItem() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <Grid container>
            <Grid item></Grid>
            <Grid item></Grid>
            <Grid item></Grid>
        </Grid>
    );
}