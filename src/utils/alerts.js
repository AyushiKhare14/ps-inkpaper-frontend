import * as React from 'react';
import Alert from '@mui/material/Alert';


function successAlert(msg) {
    return (
      <Alert  severity="success">
        {msg} was successful.
      </Alert>
    );
  }

export {successAlert}