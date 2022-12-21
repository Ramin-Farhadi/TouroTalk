import React from 'react';
import './css/heroSec.css';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import theme from './css/breakPoints';

const HeroSec = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          className="heroSec"
          theme={theme}
          sx={{
            px: {
              xs: '30px',
              md: '180px',
              lg: '230px',
              xl: '250px',
              xxl: '300px',
              xxxl: '450px',
            },
          }}
        >
          <div className="hero-texts">
            <p className="hero-title">TOURO TALKS</p>
            <p>
              Touro Talks-an interface between presiden Alan Kadish, and notable
              from around the world, including philosophers, theologians,
              senators, supreme court justices, business leaders, diplomats,
              social justice leaders, and much more.
            </p>
            <p className="hero-footer">
              | Directed and curated by Nahum Twersky
            </p>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeroSec;
