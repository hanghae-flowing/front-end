import axios from "axios";

export const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

export const URL = axios.create({
  baseURL: "http://13.209.41.157",
  headers: {},
})


// 본서버  http://3.39.10.246:8888
// 요한님 테스트 서버 http://13.209.41.157
// 효진님 테스트 서버 http://52.79.250.142