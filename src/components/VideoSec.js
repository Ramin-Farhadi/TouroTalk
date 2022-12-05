import { useState } from 'react';

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
              <video controls width="70%">
                <source src={vid.vidURL} type="video/mp4" />
              </video>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoSec;
