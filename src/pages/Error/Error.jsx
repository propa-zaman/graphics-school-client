import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../assets/error/error-01.png";
import useTitle from "../../hooks/useTitle";


const Error = () => {
    useTitle('404')
  return (
    <div className="py-10">
      <div className="text-center">
        <img className="w-80 mx-auto my-10" src={errorImg} alt="" />

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-400 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="flex items-center justify-center mt-6 gap-x-3">
          <Link to="/">
            <button className=" btn btn-primary ">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;