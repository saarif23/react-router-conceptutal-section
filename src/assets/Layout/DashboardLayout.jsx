import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="flex gap-20  pl-20">
            
            <ul  className="w-[20%] text-2xl bg-teal-200">
                <li>
                    <Link to="/dashboard"> Dashboard</Link>
                </li>
                <li>
                    <Link to="/dashboard/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/dashboard/editProfile">Edit Profile</Link>
                </li>
            </ul>
            <div className="w-[80%]">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;