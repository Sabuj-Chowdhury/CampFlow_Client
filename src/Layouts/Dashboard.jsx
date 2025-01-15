import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar/SideBar";

const Dashboard = () => {
  return (
    <div className="flex ">
      {/* dashboard links */}
      <SideBar></SideBar>
      {/* outlet */}
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
