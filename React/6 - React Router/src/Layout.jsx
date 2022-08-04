import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/aboutUs">About Us</Link>
                <Link to="/users">Users</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <section>
                <Outlet />
            </section>
        </>
    );
}
export default Layout;
