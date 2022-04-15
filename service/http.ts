import axios from "axios";
import nprogress from "nprogress";
import qs from "qs";
// 设置请求头和请求路径
//填写域名
axios.defaults.baseURL = "http://127.0.0.1:3007/";
axios.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

// Add a request interceptor
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     const token = window.sessionStorage.token
//     if (token) {
//         config.headers.Authorization = token;
//     }
//     return config;
// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });

// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//     return response;
// }, function (error) {
//     // Do something with response error
//     return Promise.reject(error);
// });

const http = {
  get(url: string, params: string) {
    return new Promise((resolve, reject) => {
      nprogress.start();
      axios
        .get(url, { params })
        .then((res) => {
          nprogress.done();
          resolve(res.data);
        })
        .catch((err) => {
          nprogress.done();
          reject(err.data);
        });
    });
  },
  post(url: string, params: string) {
    return new Promise((resolve, reject) => {
      nprogress.start();
      axios
        .post(url, qs.stringify(params))
        .then((res) => {
          nprogress.done();
          resolve(res.data);
        })
        .catch((err) => {
          nprogress.done();
          reject(err.data);
        });
    });
  },
};

export default http;
