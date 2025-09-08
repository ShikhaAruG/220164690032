import api from './api';

export const shortenUrl = async (originalUrl) => {
  const res = await api.post('/shorten', { originalUrl });
  return res.data;
};

export const redirectUrl = async (shortCode) => {
  return `${process.env.REACT_APP_API_URL}/${shortCode}`;
};
