import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../service/dashboard.service"; 

export const useDashboard = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};