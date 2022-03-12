import https from "./httpServices";

//获取已注册的全部用户基本数据
const getUserData = async () => {
  const { data } = await https.get(`${https.api.userDataApi}`);
  return data;
};

//获取用户
const getUserTextData = async (HeaderJWT: any) => {
  https.setHeaderJWT(HeaderJWT);
  const { data } = await https.get(`${https.api.userDataApi}me`);
  return data;
};

const getAllTextData = async () => {
  const { data } = await https.get(`${https.api.textDataApi}`);
  return data;
};

const getUserAllTextData = async (HeaderJWT: any) => {
  https.setHeaderJWT(HeaderJWT);
  const { data } = await https.get(`${https.api.textDataApi}myText`);
  return data;
};

export default {
  getUserData,
  getUserTextData,
  getAllTextData,
  getUserAllTextData,
};
