import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";

const Layout = () => {
    return (
        <div className="min-h-screen bg-slate-900 font-roboto text-white">
            <Header/>
            <div className="container"></div>
            <Outlet/>
        </div>
    );
};

export default Layout;
