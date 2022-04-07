import axios from 'axios';

export const URL = axios.create({
  baseURL: 'https://girin.jeonbar2-1.shop',
  headers: {},
});

// 본서버  http://52.79.220.93:8888
// 요한님 테스트 서버 http://13.209.41.157
// 효진님 테스트 서버 http://52.79.250.142
