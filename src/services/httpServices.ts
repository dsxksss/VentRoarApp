//封装axios请求模块
import axios from "axios";
import { toast } from "react-toastify";

//设置请求头部内容

axios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    toast.error("网络繁忙! 发生了一些意外的网络错误!!!");
  }
  // else if (expectedError) {
  //    toast.error("发生了一些已知但未处理的网络错误!!!");
  // }
  return Promise.reject(error);
}); // 参数1:请求成功 和 参数2:请求失败

const apiPath = `https://ventroar.xyz:2546/`;
const apiName = {
  userDataApi: `${apiPath}userDataApi/`, //只用于获得用户数据、不提供其他权限
  textDataApi: `${apiPath}textDataApi/`, //只用于获得文本数据、不提供其他权限
  userCreateApi: `${apiPath}userCreateApi/`, //只允许用户创建数据,不提供其他权限
  userLoginApi: `${apiPath}userLoginApi/`, //只允许验证用户创建后的数据,不提供其他权限
  userTextApi: `${apiPath}userTextApi/`, //用户提交文本类型等功能的一个集合
};

const setHeaderJWT = (JWT: any) => {
  axios.defaults.headers.common["x-auth-token"] = JWT;
};

export default {
  api: apiName,
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setHeaderJWT,
};
