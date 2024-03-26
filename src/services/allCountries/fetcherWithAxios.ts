import axios from "axios";

export const fetcherWithAxios = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};
