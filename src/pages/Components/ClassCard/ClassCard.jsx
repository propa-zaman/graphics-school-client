import { FaUsers, FaMoneyBillWave } from 'react-icons/fa';

const ClassCard = ({ school }) => {
  const { class_image, class_name, instructor, available_seats, price } = school;

  return (
    <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
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
      </div>
    </div>
  );
};

export default ClassCard;
