import axios from 'axios';

export default {
  getComic(num = 1) {
    return axios({
      method: 'GET',
      url: `https://xkcd-proxy.vercel.app/${num}`,
    });
  },
  getLatestComic() {
    return axios({
      method: 'GET',
      url: 'https://xkcd-proxy.vercel.app/latest',
    });
  },
};
