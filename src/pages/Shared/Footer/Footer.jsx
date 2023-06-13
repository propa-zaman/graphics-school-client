import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../../assets/logo_white_Artboard 1 copy 2.png'

const Footer = () => {
  return (
    <footer className="bg-violet-900 text-gray-300">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Website Logo" className="w-60 h-auto" />
          </div>
          <div className="flex space-x-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt />
                <p>018XXXXXXXX</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope />
                <p>graphicsschool@gmail.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt />
                <p>2 Street, Mirpur, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Graphics School. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
