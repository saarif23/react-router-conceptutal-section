import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <nav className="flex justify-between my-5 shadow-md py-5 rounded-lg px-16">
                <div>
                    <h3 className="text-xl font-bold">Amazon</h3>
                </div>
                <ul className="flex gap-7">

                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-yellow-400 rounded-xl py-1 px-3" : ""}>
                        Home
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-yellow-400 rounded-xl py-1 px-3" : ""}>
                        Products
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-yellow-400 rounded-xl py-1 px-3" : ""}>
                        About
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-yellow-400 rounded-xl py-1 px-3" : ""}>
                        Dashboard
                    </NavLink>

                </ul>
            </nav>
            <div className="max-w-7xl mx-auto min-h-screen">
                <Outlet></Outlet>
            </div>
            <footer className=" h-28 md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </footer>

        </div>

    );
};

export default MainLayout;