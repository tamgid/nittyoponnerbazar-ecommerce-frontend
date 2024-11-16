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
        {/* <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 ">
          <UserCommonSidebar></UserCommonSidebar>
            </div>
           <div className="md:flex-1">
           <UserDashboardBanner></UserDashboardBanner>
            <div className=" py-8">
                <Outlet></Outlet>
            </div> 
           </div>
        </div> */}
        </>
    );
};

export default Dashboard;