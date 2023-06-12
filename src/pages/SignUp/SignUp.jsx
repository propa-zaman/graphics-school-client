import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email };
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                            .catch(error => console.log(error));
                    })
                    .catch(error => console.log(error));
            });
    };

    return (
        <>
            <div className="max-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto ">
                    <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10 mt-80">
                        <div className="max-w-md mx-auto">
                            <div className="flex items-center space-x-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-yellow-600"><path d="M22 12h-4m-2 0a6 6 0 01-6 6a6 6 0 01-6-6a6 6 0 016-6a6 6 0 016 6z"></path></svg>
                                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                    <h2 className="leading-relaxed">Sign Up</h2>
                                    <p className="text-sm text-gray-500 font-normal leading-relaxed">Create your account.</p>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Name</label>
                                        <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-violet-500" />
                                        {errors.name && <span className="text-red-600">Name is required</span>}
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Photo URL</label>
                                        <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-violet-500" />
                                        {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Email</label>
                                        <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-violet-500" />
                                        {errors.email && <span className="text-red-600">Email is required</span>}
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Password</label>
                                        <input type="password" {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })} placeholder="Password" className="input w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-violet-500" />
                                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be at least 6 characters</p>}
                                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must contain at least one uppercase, one lowercase, one number, and one special character</p>}
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Confirm Password</label>
                                        <input type="password" {...register("confirmPassword", {
                                            required: true,
                                            validate: value => value === passwordRef.current || "Passwords do not match"
                                        })} placeholder="Confirm Password" className="input w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-violet-500" />
                                        {errors.confirmPassword?.type === 'required' && <p className="text-red-600">Confirm Password is required</p>}
                                        {errors.confirmPassword?.type === 'validate' && <p className="text-red-600">{errors.confirmPassword.message}</p>}
                                    </div>
                                </div>
                                <div className="pt-4 flex items-center space-x-4">
                                    <button disabled={isSubmitting} className="flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none bg-violet-500 hover:bg-violet-600 hover:shadow-lg">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                            <div className="pt-12 pb-12 text-center">
                                <p>
                                    Already have an account? <Link to="/login" className="underline font-semibold">Login here.</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
