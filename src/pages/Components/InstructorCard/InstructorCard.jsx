import { FaUsers, FaChalkboardTeacher } from 'react-icons/fa';
import { motion } from 'framer-motion';

const InstructorCard = ({ school }) => {
  const { instructor_image, instructor, classes_taken_by_instructor, enrolled_students } = school;

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-4 flex flex-col space-y-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-shrink-0">
        <img src={instructor_image} alt="Instructor" className="h-64 w-64rounded-full object-cover mx-auto" />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">{instructor}</h3>
        <div className="flex items-center justify-center">
          <FaChalkboardTeacher className="text-gray-500 mr-1" />
          <p className="text-gray-500 text-sm">{classes_taken_by_instructor} classes</p>
        </div>
        <div className="flex items-center justify-center">
          <FaUsers className="text-gray-500 mr-1" />
          <p className="text-gray-500 text-sm">{enrolled_students} enrolled students</p>
        </div>
      </div>
    </motion.div>
  );
};

export default InstructorCard;
