import { notification } from 'antd';
import axios, { AxiosRequestConfig } from 'axios';

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const LOCAL = 'http://localhost:5000';
const PROD = 'http://you.itstud.ru/api/';

const requestSettings: AxiosRequestConfig = {
  baseURL: PROD,
  headers: HEADERS,
};

const onRejectedError = (error: any) => {
  switch (error.response?.status) {
    case 0:
    case 502:
      notification.error({
        message: 'Ошибка сервера: 502',
        description: 'Сервер временно недоступен',
        duration: 0,
        key: 'error-notification',
      });
      break;
  }

  return Promise.reject(error);
};

const http = axios.create(requestSettings);

http.interceptors.response.use((config) => {
  config.status !== 502 &&
    config.status !== 0 &&
    notification.destroy('error-notification');

  return config;
}, onRejectedError);

export default http;
