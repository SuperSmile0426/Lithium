// import client
import { getClient } from "./client";

// import models
import IUser from "../models/user.model";

const mainClient = getClient(process.env.REACT_PUBLIC_SERVER_API || "");

const userApi = {
  async signUp(data: IUser) {
    try {
      const res = await mainClient.post(
        `${process.env.REACT_APP_SERVER_API}/api/v1/auth/signup`,
        data
      );
      const resBody = res.data;
      return resBody;
    } catch (err) {
      throw err;
    }
  },

  async signIn(data: IUser) {
    try {
      const res = await mainClient.post(
        `${process.env.REACT_APP_SERVER_API}/api/v1/auth/signin`,
        data
      );
      const resBody = res;
      return resBody;
    } catch (err) {
      throw err;
    }
  },
  async getMe() {
    try {
      const res = await mainClient.get(
        `${process.env.REACT_APP_SERVER_API}/api/v1/users/getme`);
      const resBody = res.data;
      return resBody;
    } catch (err) {
      throw err;
    }
  },
};

export default userApi;
