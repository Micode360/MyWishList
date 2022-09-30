import axios from "axios";

export const getRequest = async (path) => {
  const response = await axios.get(path);
  return response.data;
};

export const postRequest = async (path, body) => {
  try {
    const response = await axios.post(path, body);
    return response.data;
  } catch (err) {
    return { type: "Error", message: err };
  }
};
