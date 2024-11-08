import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { QueryClient } from "react-query";

const queryClient = new QueryClient();

const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [isAdmin, setIsAdmin] = useState(null);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        const fetchIsAdmin = async () => {
            if (!loading && user?.email) {
                setIsAdminLoading(true);
                try {
                    const adminStatus = await queryClient.fetchQuery([user.email, "isAdmin"], async () => {
                        const res = await axiosSecure.get(`/user/admin/${user.email}`); //url needs to set
                        return res.data?.admin;
                    });
                    setIsAdmin(adminStatus);
                } catch (error) {
                    console.error("Failed to fetch admin status:", error);
                } finally {
                    setIsAdminLoading(false);
                }
            }
        };
        fetchIsAdmin();
    }, [loading, user?.email, axiosSecure]);

    return [isAdmin, isAdminLoading];
};

export default useAdmin;
