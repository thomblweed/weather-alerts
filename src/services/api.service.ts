import axios from 'axios';

import type { AxiosHeaders } from 'axios';

interface ApiOptions {
  options: {
    baseURL: string;
    headers?: AxiosHeaders;
  };
}

const api = ({ options }: ApiOptions) =>
  axios.create({
    baseURL: options.baseURL,
    headers: options.headers ?? {},
  });

export default api;
