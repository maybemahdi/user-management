import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const Layout = () => {
    return (
        <div className="w-[80%] mx-auto">
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default Layout;