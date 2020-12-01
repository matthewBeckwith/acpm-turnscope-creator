import React from 'react';
import {
  Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import NewPunchlistForm from './components/newPunchlistForm';
import NewPunchlistDisplay from './components/newPunchlistDisplay';

const useStyles = makeStyles((theme) => ({

}));

function App() {
  const classes = useStyles();
  const [punchlistCreated, setPunchlistCreated] = React.useState(false);
  const [propertyAddress, setPropertyAddress] = React.useState('');
  const [propertyDeposit, setPropertyDeposit] = React.useState(0);
  const [punchlistForm, setPunchlistForm] = React.useState({
    property_address: '',
    property_deposit: 0
  });

  const handleAddressChange = (event) => {
    setPropertyAddress(event.target.value);
  }

  const handleDepositChange = (event) => {
    setPropertyDeposit(event.target.value);
  }

  const handlePunchlistFormSubmit = (event) => {
    event.preventDefault();
    setPunchlistForm({
      property_address: propertyAddress,
      property_deposit: propertyDeposit
    });
    setPunchlistCreated(true);
  }

  return (
    <Container>
      {!punchlistCreated &&
        <NewPunchlistForm
          handleAddressChange={handleAddressChange}
          handleDepositChange={handleDepositChange}
          handleSubmit={handlePunchlistFormSubmit}
        />
      }
      {punchlistCreated &&
        <NewPunchlistDisplay form={punchlistForm} />
      }
    </Container >
  );
}

export default App;
