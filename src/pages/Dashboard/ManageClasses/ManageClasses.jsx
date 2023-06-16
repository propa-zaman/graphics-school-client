import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
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

    const handleDelete = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://graphics-school-sever-propa-zaman.vercel.app/school/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                        }
                    });
            }
        });
    };

    return (
        <div className="w-full">
            <h3 className="text-3xl font-semibold my-4">Total Classes: {school.length}</h3>
            <div className="overflow-x-auto">
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
                            <th>Action</th>
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
                             
                                <td>
                                    <button onClick={() => handleDelete(sc)} className="btn btn-ghost bg-red-600 text-white">
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;
