// import axios from "axios";

// export function request(config) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: "http://127.0.0.1:8082",
//     timeout: 5000,
//   });

//   // 2.axios的拦截器
//   // 2.1.请求拦截的作用
//   instance.interceptors.request.use(
//     (config) => {
//       return config;
//     },
//     (err) => {
//       // console.log(err);
//     }
//   );

//   // 2.2.响应拦截
//   instance.interceptors.response.use(
//     (res) => {
//       return res.data;
//     },
//     (err) => {
//       console.log(err);
//     }
//   );

//   // 3.发送真正的网络请求
//   return instance(config);
// }

import axios from 'axios'
import { Message, MessageBox } from 'element-ui'



// 创建axios实例
const service = axios.create({
  baseURL: "http://127.0.0.1:8082", // api 的 base_url
  timeout: 5000 // 请求超时时间
})


// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== 20001) {
    //   Message({
    //     message: res.message,
    //     type: 'success',
    //     duration: 5 * 1000
    //   })
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
