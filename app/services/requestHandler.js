import axios from "axios";
import { getSession } from "next-auth/react";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
});

let jwt;

export const authRequest = async ({ url, method = "GET", data, headers }) => {
  let session = await getSession();

  if (session) {
    jwt = session.jwt;
  }

  return new Promise((resolve, reject) => {
    axiosClient({
      method,
      headers: {
        ...(jwt && {
          Authorization: jwt,
        }),
        ...headers,
      },
      url,
      data,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject({
          ...err.response.data,
        });
      });
  });
};

export const publicRequest = async ({ url, method = "GET", data, headers }) => {
  return new Promise((resolve, reject) => {
    axiosClient({
      method,
      headers: {
        ...headers,
      },
      url,
      data,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject({
          ...err.response.data,
        });
      });
  });
};
