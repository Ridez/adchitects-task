import axios from 'axios';

const apiUrl = 'https://adchitects-cms.herokuapp.com';

const auth = {
  username: 'adchitects',
  password: 'jsrulezzz',
};

export const getPages = () => {
  return axios
    .get(`${apiUrl}/pages`, { auth })
    .then((res) => res)
    .catch((err) => err);
};

export const getPage = (id: string) => {
  return axios
    .get(`${apiUrl}/page/${id}`, { auth })
    .then((res) => res)
    .catch((err) => err);
};

export const singUpToNewsletter = (email: string) => {
  return axios
    .post(`${apiUrl}/newsletter`, { email }, { auth })
    .then((res) => res)
    .catch((err) => err.response);
};
