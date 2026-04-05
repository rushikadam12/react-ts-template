import { apiClient } from "@/config/axiosInstance";

export const fetchUsers = async () => {
  const res = await apiClient.get("/users");
  return res.data;
};