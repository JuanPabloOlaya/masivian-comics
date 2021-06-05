import axios from 'axios';

export default {
  getComic(num = 1) {
    return axios({
      method: 'GET',
      url: `https://xkcd.now.sh/?comic=${num}`,
    });
  },
  getLatestComic() {
    return axios({
      method: 'GET',
      url: 'https://xkcd.vercel.app/?comic=latest',
    });
  },
};
