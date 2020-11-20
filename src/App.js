import React from 'react';
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import NewPunchlistForm from './components/newPunchlistForm';

const useStyles = makeStyles((theme) => ({

}));

function App() {
  return (
    <Container>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography>Generated PDF</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <NewPunchlistForm />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
