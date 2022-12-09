import React from 'react';
import './css/title.css';
import { Grid } from '@mui/material';

function Title() {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <h1 className="title">NEWS & EVENTS</h1>
        </Grid>
      </Grid>
    </>
  );
}

export default Title;
