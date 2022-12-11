import React, { useState } from 'react';
import Iframe from 'react-iframe';
import './css/videoSec.css';

const Videos = ({ rawData }) => {
  const [data, setData] = useState(rawData);
  const toggle = (id) => {
    const newData = [];
    data.forEach((v) => {
      if (v.id === id) {
        v.bool = true;
      } else {
        v.bool = false;
      }
      newData.push(v);
    });
    setData(newData);
  };

  return (
    <div className="videoSec">
      {data.map((vid) => {
        return (
          <div key={vid.id}>
            <div className="videoBar" onClick={() => toggle(vid.id)}>
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
            {vid.bool ? (
              <div>
                <Iframe
                  url={vid.vidUrl}
                  width="100%"
                  height="320px"
                  className="vidFrame"
                  display="block"
                />
              </div>
            ) : (
              ''
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Videos;
