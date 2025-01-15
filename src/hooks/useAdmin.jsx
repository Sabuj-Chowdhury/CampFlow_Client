import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/admin/${user.email}`);
      return data.admin;
    },
  });
  return { isAdmin };
};

export default useAdmin;
