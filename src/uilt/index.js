import axios from "axios";

// 自定义axios
const server = axios.create({
  baseURL: "http://localhost:8081",
  timeout: 1000
});
// 添加请求拦截器
server.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
server.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log(response)
    if(response.data.messge != 0){

    }

    return data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default server;
