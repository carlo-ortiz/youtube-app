import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => search(defaultSearchTerm), [defaultSearchTerm]);

  const search = async (searchTerm) => {
    const { data } = await youtube.get('/search', {
      params: {
        q: searchTerm,
      },
    });

    setVideos(data.items);
  };

  return [videos, search];
};

export default useVideos;
