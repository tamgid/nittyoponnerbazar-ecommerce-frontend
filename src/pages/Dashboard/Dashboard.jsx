import { Outlet } from "react-router-dom";
import UserDashboardBanner from "../../components/UserDashboardBanner";
import UserCommonSidebar from "../../components/userCommonSidebar/UserCommonSidebar";
const Dashboard = () => {
    return (
        <>
        <UserDashboardBanner></UserDashboardBanner>
        <div className="flex flex-col md:flex-row">
            <div className=" ">
          <UserCommonSidebar></UserCommonSidebar>
            </div>
            <div className="flex-1 py-8">
                <Outlet></Outlet>
            </div>   
        </div>
       
        </>
    );
};

export default Dashboard;