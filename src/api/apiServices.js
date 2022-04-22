import http from './api';

const apiGetAll = () => http.get('2022-04-12');

const apiStoreService = {
  apiGetAll,
};

export default apiStoreService;
