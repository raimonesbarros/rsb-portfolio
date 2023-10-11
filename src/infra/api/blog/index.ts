import { api } from "..";

export const fetchIssues = async (query = "") => {
  const response = await api.get(`/search/issues`, {
    params: {
      q: `repo:raimonesbarros/github-blog ${query}`,
      _sort: "created_at",
      _order: "desc",
    },
  });

  return response.data;
};

export const getAllIssues = async () => {
  const response = await api.get(`/search/issues`, {
    params: {
      q: `repo:raimonesbarros/github-blog`,
      _sort: "created_at",
      _order: "desc",
    },
  });

  return response.data;
};
