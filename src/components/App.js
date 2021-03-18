import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [videos, search] = useVideos('buildings');

  const [selectedVideo, setselectedVideo] = useState(null);

  useEffect(() => setselectedVideo(videos[0]), [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setselectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
