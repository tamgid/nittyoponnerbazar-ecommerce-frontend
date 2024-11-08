import { Outlet } from "react-router-dom";
const Dashboard = () => {
    return (
        <>
        <div className="flex flex-col md:flex-row">
            <div className=" ">
          
            </div>
            <div className="flex-1 py-8">
                <Outlet></Outlet>
            </div>   
        </div>
       
        </>
    );
};

export default Dashboard;