import React, { useState } from 'react';
import Iframe from 'react-iframe';
import { Grid } from '@mui/material';

import './css/videoSec.css';
const VideoSec = ({ data }) => {
  const [toggle, setToggle] = useState(true);
  const trigger = (e) => {
    console.log(toggle);
    const Videoelement = e.currentTarget.nextSibling;
    toggle
      ? (Videoelement.style.display = 'block')
      : (Videoelement.style.display = 'none');
    setToggle(!toggle);
  };
  return (
    <Grid container>
      <Grid item xs={0} md={2}></Grid>
      <Grid item xs={12} md={8}>
        <div className="videoSec">
          {data.map((vid) => {
            return (
              <div key={vid.id}>
                <div className="videoBar" onClick={trigger}>
                  <div className="video-dateBox">
                    <span className="dateBox-day">{vid.day}</span>
                    <span className="dateBox-monthyear">
                      {vid.month}, {vid.year}
                    </span>
                  </div>
                  <div className="bar-description">
                    <span className="bar-des-title">{vid.title}</span>
                    <span className="bar-des-moderate">{vid.moderate}</span>
                    <span className="bar-des-gust">
                      {vid.guest && 'Guests : ' + vid.guest}
                    </span>
                  </div>
                </div>
                <div className="vidBanner">
                  <Iframe
                    url={vid.vidUrl}
                    width="640px"
                    height="320px"
                    id=""
                    className="vidFrame"
                    display="block"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </Grid>
  );
};

export default VideoSec;
