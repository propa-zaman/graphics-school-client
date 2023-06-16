import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import MyClassesRow from "./MyClassesRow";


const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [myClasses, setMyClasses] = useState([]);

    const url = `https://graphics-school-sever-propa-zaman.vercel.app/school?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyClasses(data))
    }, [url]);

    const handleDelete = id => {
        Swal.fire({
          title: 'Are you sure?',
          text: 'You won\'t be able to revert this!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(result => {
          if (result.isConfirmed) {
            fetch(`https://graphics-school-sever-propa-zaman.vercel.app/school/${id}`, {
              method: 'DELETE'
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire('Deleted', 'Deleted successfully', 'success');
                  const remaining = myClasses.filter(myClass => myClass._id !== id);
                  setMyClasses(remaining);
                }
              })
          }
        });
      };
      



    return (
        <div>
            <h2 className="text-4xl font-semibold text-violet-800 mt-10">My Classes: {myClasses.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Available Students</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map(myClass => <MyClassesRow
                                key={myClass._id}
                                myClass={myClass}
                                handleDelete={handleDelete}
                            ></MyClassesRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClasses;