import axios from "axios";

export const getProjects = async (path: string) => {
  const response = await axios.get(path).then((response) => response.data);

  return response;
};
