import { AxiosInstance } from 'axios';

export default {
  interceptorRequest: (instance: AxiosInstance) => {
    instance.interceptors.request.use(
      (config) => {
        config.baseURL = 'https://tdx.transportdata.tw/api/basic/v2';
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  },
  interceptorResponse: (instance: AxiosInstance) => {
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response) {
          alert(error.response.data.message);
        }
        return Promise.reject(error);
      }
    );
  }
};
