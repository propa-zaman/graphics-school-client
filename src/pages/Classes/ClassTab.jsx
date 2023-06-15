import { FaUsers, FaMoneyBillWave } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ClassTab = ({ school, isLoggedIn, isAdmin, isInstructor }) => {
  const { class_image, class_name, instructor, available_seats, price } = school;

  const handleSelect = () => {
    if (!isLoggedIn) {
      Swal.fire({
        icon: 'info',
        title: 'Please log in',
        text: 'Please log in to select the course.',
      });
    } else if (available_seats === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'No available seats',
        text: 'No available seats for this course.',
      });
    } else if (isAdmin || isInstructor) {
      Swal.fire({
        icon: 'warning',
        title: 'Unauthorized',
        text: 'You are not allowed to select this course as an admin or instructor.',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Course selected!',
      });
      // Handle the course selection logic here
    }
  };

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
