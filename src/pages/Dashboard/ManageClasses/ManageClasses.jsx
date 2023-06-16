import { useQuery } from "@tanstack/react-query";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageClasses = () => {
    useTitle('Manage Classes');
    const [axiosSecure] = useAxiosSecure();
    const { data: school = [], refetch } = useQuery(['school'], async () => {
        const res = await axiosSecure.get('/school');
        console.log(res.data);
        return res.data;
    });

    const handleApprove = (sc) => {
        fetch(`https://graphics-school-sever-propa-zaman.vercel.app/school/${sc._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${sc.class_name} is Approved!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };

    const handleDeny = (sc) => {
        fetch(`https://graphics-school-sever-propa-zaman.vercel.app/school/${sc._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${sc.class_name} is Denied!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };

    return (
        <div className="w-full">
            <h3 className="text-3xl font-semibold my-4">Total Classes: {school.length}</h3>
            <div className="">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className="font-semibold">
                            <th>#</th>
                            <th>Class</th>
                            <th>Image</th>
                            <th>Instrctor</th>
                            <th>Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {school.map((sc, index) => (
                            <tr key={sc._id}>
                                <th>{index + 1}</th>
                                <td>{sc.class_name}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={sc.class_image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{sc.instructor}</td>
                                <td>{sc.instructor_mail}</td>
                                <td>{sc.available_seats}</td>
                                <td>{sc.price}</td>
                                <td>  {(sc.status === 'approve' || sc.status === 'deny') ? (
                                        user.role
                                    ) : (
                                        <>
                                            <button onClick={() => handleApprove(sc)} className="btn btn-ghost bg-green-600 text-white">
                                                <FaRegThumbsUp />
                                            </button>
                                            <button onClick={() => handleDeny(sc)} className="btn btn-ghost bg-red-600 text-white">
                                                <FaRegThumbsDown/>
                                            </button>
                                        </>
                                    )}</td>
                             
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;
