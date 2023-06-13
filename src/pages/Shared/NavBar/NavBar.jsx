import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaSearch } from "react-icons/fa";
import logo from '../../../assets/logo.png';
import { useState } from "react";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = (
        <>
            <li><Link to="/" className="text-lg">Home</Link></li>
            <li><Link to="/instructors" className="text-lg">Instructors</Link></li>
            <li><Link to="/classes" className="text-lg">Classes</Link></li>
            {
                user ? (
                    <>
                        <li><Link to="/dashboard" className="text-lg">Dashboard</Link></li>
                        <li><img src={user?.photoUrl} alt="User profile" className="h-8 w-8 rounded-full" /></li>
                        <button onClick={handleLogOut} className="btn btn-ghost text-lg">LogOut</button>
                    </>
                ) : (
                    <>
                        <li><Link to="/login" className="text-lg">Login</Link></li>
                    </>
                )
            }
        </>
    );

    return (
        <>
            <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-40 bg-white text-violet-900">
                <div className="navbar-start">
                    <div className={`dropdown ${isMenuOpen ? 'active' : ''}`}>
                        <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${isMenuOpen ? 'active' : ''}`}>
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl logo-container w-60 h-auto">
                        <img src={logo} alt="" className="w-full h-full" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost opacity-75 hover:opacity-100">
                        <FaSearch />
                    </button>
                </div>
            </div>
        </>
    );
};

export default NavBar;
