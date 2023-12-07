import { $api } from "./api";

export const getUser = async (id) => {
  try {
    const response = await $api.get(`/users/${id}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
