import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../../assets/logo_white_Artboard 1 copy 2.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Website Logo" className="h-32 w-64" />
          </div>
          <div className="flex space-x-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt />
                <p>123-456-7890</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope />
                <p>info@example.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt />
                <p>123 Street, City, State, Country</p>
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
