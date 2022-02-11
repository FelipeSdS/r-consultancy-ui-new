import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

type SimplePaperProps = {
    elevation: number;
}

const SimplePaper = ( props : SimplePaperProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          maxWidth: '1120px',
          height: 128,
          padding: '2rem'
        },
      }}
    >
      <Paper elevation={props.elevation}>
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
      </Paper>
    </Box>
  );
}

export default SimplePaper;