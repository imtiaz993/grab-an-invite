import axios from "axios";
import { publicRequest } from "./requestHandler";

export const login = async (values) => {
  try {
    const { status, data } = await publicRequest({
      url: "/user/login",
      method: "POST",
      data: values,
    });
    return { status, data };
  } catch (e) {
    if (axios.isAxiosError(e)) {
      if (e.response) {
        throw { status: e.response.status, message: e.response.data?.message };
      }
    }
    throw e;
  }
};

export const register = async (userData) => {
  try {
    const { status, data } = await publicRequest({
      url: "/user/register",
      method: "POST",
      data: userData,
    });

    return { status, data };
  } catch (e) {
    if (axios.isAxiosError(e)) {
      if (e.response) {
        throw { status: e.response.status, message: e.response.data?.message };
      }
    }
    throw e;
  }
};
