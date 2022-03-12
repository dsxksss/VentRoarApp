import https from "./httpServices";

const tokenValidation = async () => {
  https.setHeaderJWT(getJWT());
  if (getJWT() !== null || getJWT() !== "")
    await https.post(`${https.api.userLoginApi}autoLogin`);
};

const loginIN = async (loginData?: object) => {
  const response = await https.post(`${https.api.userLoginApi}`, loginData);
  localStorage.setItem("token", response.headers["x-auth-token"]);
  https.setHeaderJWT(getJWT());
  localStorage.setItem("oldTime", response.data);
};

const loginOUT = (): void => {
  localStorage.clear();
};

const getJWT = (): string | null => {
  return localStorage.getItem("token");
};

const createUser = async (createData: object) => {
  await https.post(`${https.api.userCreateApi}`, createData);
};

const changeUserPassword = async (createData: object) => {
  await https.put(`${https.api.userCreateApi}`, createData);
};

const pushText = async (textData: object) => {
  https.setHeaderJWT(getJWT());
  await https.post(`${https.api.userTextApi}`, textData);
};

const changeUserText = async (textId: string, textData: object) => {
  https.setHeaderJWT(getJWT());
  await https.post(`${https.api.userTextApi}${textId}`, textData);
};

const pushTextAndUpdata = async (textID: string, textData: object) => {
  https.setHeaderJWT(getJWT());
  await https.put(`${https.api.userTextApi}${textID}`, textData);
};

const deleteUsetText = async (textID: string) => {
  https.setHeaderJWT(getJWT());
  await https.delete(`${https.api.textDataApi}${textID}`);
};

const adminDeleteUsetText = async (textID: string) => {
  https.setHeaderJWT(getJWT());
  await https.delete(`${https.api.textDataApi}${textID}/admin`);
};

export default {
  tokenValidation,
  loginIN,
  loginOUT,
  getJWT,
  createUser,
  pushText,
  pushTextAndUpdata,
  deleteUsetText,
  adminDeleteUsetText,
  changeUserPassword,
  changeUserText,
};
