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
