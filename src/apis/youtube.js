import axios from 'axios';

const KEY = 'AIzaSyCd86waxPT5mUzDvXcrRQdHWMSznq1Blok';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
