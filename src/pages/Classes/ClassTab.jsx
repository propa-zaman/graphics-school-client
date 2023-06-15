import { FaUsers, FaMoneyBillWave } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext } from 'react';
import useEnrolled from '../../hooks/useEnrolled';
import { useLocation, useNavigate } from 'react-router-dom';

const ClassTab = ({ school }) => {
  const { class_image, class_name, instructor, available_seats, price } = school;
  const {user} = useContext(AuthContext);
  const [, refetch] = useEnrolled();
  const navigate = useNavigate();
  const location = useLocation();

//   TODO:make admin and instructors dynamic
  const isAdmin = false;
  const isInstructor = false;

  const handleSelect = school=> {
    console.log(school);
    if(user && user.email){
        const enrolledClass = {classId: _id, class_name, class_image, price, available_seats, email: user.email}
        fetch('https://graphics-school-sever-propa-zaman.vercel.app/enrolled', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(enrolledClass)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                refetch(); // refetch enrolled to update the number of classes in the enrolled
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class added on the dashboard',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    else{
        Swal.fire({
            title: 'Please login to enroll class',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from: location}})
            }
          })
    }
}

  return (
    <div className={`flex items-center bg-white rounded-lg shadow-lg p-4 ${available_seats === 0 ? 'bg-red-200' : ''}`}>
      <div className="w-32 h-32 rounded-full overflow-hidden">
        <img src={class_image} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold">{class_name}</h3>
        <p className="text-gray-500">{instructor}</p>
        <div className="flex items-center mt-2">
          <FaUsers className="text-gray-400 mr-1" />
          <p className="text-gray-500">{available_seats} seats</p>
        </div>
        <div className="flex items-center mt-2">
          <FaMoneyBillWave className="text-gray-400 mr-1" />
          <p className="text-yellow-500">${price}</p>
        </div>
        <button
          onClick={handleSelect}
          className={`mt-4 btn btn-primary ${available_seats === 0 || isAdmin || isInstructor ? 'disabled:opacity-50' : ''}`}
          disabled={available_seats === 0 || isAdmin || isInstructor}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ClassTab;
