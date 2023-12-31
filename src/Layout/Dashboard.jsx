import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import { FaBook, FaHome, FaUsers, FaClipboard, FaUserGraduate, FaCalendarAlt, FaFileAlt } from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';



const Dashboard = () => {
    useTitle('Dashboard');
   
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, transition: { duration: 0.5 } },
    };

    return (
        <div>

            <div className="flex h-screen  bg-gray-100">

                {/* Sidebar */}
                <motion.aside
                    className={`flex-shrink-0 w-20 lg:w-64 bg-violet-900 text-white ${isSidebarOpen ? '' : 'hidden lg:block'
                        }`}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={containerVariants}
                >
                    {/* Sidebar Content */}
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-4">Dashboard</h3>
                        <ul className="menu p-4 w-90">

                            {
                                isAdmin ? <>
                                    <li><NavLink to="/"><FaHome></FaHome> Admin Home</NavLink></li>
                                    <li><NavLink to="/dashboard/manageclasses"> <FaBook /> Manage Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/allusers"><FaUsers /> Manage Users</NavLink></li>


                                </> : isInstructor ? <>
                                    <li><NavLink to="/"><FaHome></FaHome> Instructor Home</NavLink></li>
                                    <li><NavLink to="/dashboard/addclass"> <FaClipboard /> Add A Class</NavLink></li>
                                    <li><NavLink to="/dashboard/myclasses"> <FaFileAlt /> My Classes</NavLink></li>
                                    

                                </> : <>
                                    <li><NavLink to="/"><FaHome></FaHome> Student Home</NavLink></li>
                                    <li><NavLink to="/dashboard/selectedclasses"> <FaUserGraduate />My Selected Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/enrolledclasses"> <FaCalendarAlt /> My Enrolled Classes</NavLink></li>
                                </>
                            }




                            <div className="divider"></div>
                            <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                            <li><NavLink to="/classes"> Our Classes</NavLink></li>
                            <li><NavLink to="/instructors">Out Instructors</NavLink></li>
                        </ul>
                    </div>
                </motion.aside>

<Outlet>
</Outlet>

            </div>
        </div>
    );
};

export default Dashboard;
