import React from 'react';

import { Grid } from '@mui/material';
import Videos from './Videos';

const VideoSec = ({ data }) => {
  return (
    <Grid container>
      <Grid item xs={0} md={2}></Grid>
      <Grid item xs={12} md={8}>
        <Videos rawData={data} />
      </Grid>
      <Grid item xs={0} md={2}></Grid>
    </Grid>
  );
};

export default VideoSec;
