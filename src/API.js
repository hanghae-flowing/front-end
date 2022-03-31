import axios from 'axios';
import { useQuery } from 'react-query';

export const userInfo = '';
// sessionStorage.getItem('userInfo') &&
// JSON.parse(sessionStorage.getItem('userInfo'));
export const projectInfo = '';
// sessionStorage.getItem('projectInfo') &&
// JSON.parse(sessionStorage.getItem('projectInfo'));

export const URL = axios.create({
  baseURL: 'http://13.209.41.157',
  headers: {},
});

// 본서버  http://52.79.220.93:8888
// 요한님 테스트 서버 http://13.209.41.157
// 효진님 테스트 서버 http://52.79.250.142
