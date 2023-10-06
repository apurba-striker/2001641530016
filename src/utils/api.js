
import axios from 'axios';

const baseURL = 'http://20.244.56.144/train';
const companyName = 'Train Central';
const clientID = 'b46128a0-fbde-4c16-a4b1-6ae6ad718e27';
const clientSecret = 'XOyolORPayKBODAN';

export const getAuthToken = async () => {
    try {
      const response = await axios.post(`${baseURL}/auth`, {
        companyName,
        clientID,
        clientSecret,
      });
      return response.data.access_token;
    } catch (error) {
      throw error;
    }
  };
export const registerCompany = async () => {
  try {
    const response = await axios.post(`${baseURL}/register`, {
      companyName,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSingleTrain = async (trainNumber) => {
    const token = await getAuthToken();
    try {
      const response = await axios.get(`${baseURL}/trains/${trainNumber}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
export const getAllTrains = async () => {
  const token = await getAuthToken();
  try {
    const response = await axios.get(`${baseURL}/trains`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};



