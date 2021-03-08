import { data } from './data.js';

// axios 라이브러리 흉내내기
const axios = {
  async get(data) {
    await setTimeout(() => data, 100);
    return data;
  },
};

export const getData = () => {
  return axios.get(data);
};
