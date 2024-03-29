import axios from "axios";
import { authRequest } from "./requestHandler";

export const addEvent = async (values) => {
  try {
    const { status, data } = await authRequest({
      url: "/events",
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