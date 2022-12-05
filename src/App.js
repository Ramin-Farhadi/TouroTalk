import HeroSec from './components/HeroSec';
import VideoSec from './components/VideoSec';
import videoData from './videoData';
import Title from './components/Title';
import './components/css/general.css';

function App() {
  return (
    <div>
      {/* Navigation must be added here */}
      <Title />
      {/* Navigation must be added here */}
      <HeroSec />
      <VideoSec data={videoData} />
    </div>
  );
}

export default App;
