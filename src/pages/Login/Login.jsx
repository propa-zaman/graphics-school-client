import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: 'User Login Successful.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        navigate(from, { replace: true });
      })
  }

  const handleGoogleLogin = () => {
    googleSignIn().then(result => {
      // Handle success here
    }).catch(error => {
      // Handle error here
    });
  }

  return (
    <div className="max-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto mt-40">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-yellow-600"><path d="M22 12h-4m-2 0a6 6 0 01-6 6a6 6 0 01-6-6a6 6 0 016-6a6 6 0 016 6z"></path></svg>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Login</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">Access your account.</p>
              </div>
            </div>
            <form onSubmit={handleLogin} className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">Email</label>
                  <input type="email" name="email" className="input w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500" required />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="leading-loose">Password</label>
                  <div className="relative">
                    <input type={passwordVisible ? "text" : "password"} name="password" className="input w-full pr-16 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500" required />
                    <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="absolute inset-y-0 right-0 pr-2 flex items-center">
                      {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button className="flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none bg-green-500 hover:bg-green-600 hover:shadow-lg">
                  Login
                </button>
                <button onClick={handleGoogleLogin} className="flex justify-center items-center w-full h-12 text-white px-4 py-3 rounded-md focus:outline-none bg-red-500 hover:bg-red-600 hover:shadow-lg">
                  <FaGoogle /> 
                </button>
              </div>
            </form>
            <div className="pt-12 pb-12 text-center">
              <p>
                Don't have an account? <Link to="/signup" className="underline font-semibold">Sign up here.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
