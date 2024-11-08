import Lottie from "lottie-react";
import animation from "./Animation.json";
import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div className="my-24 md:h-1/2 md:w-1/2 mx-auto ">
        <Lottie animationData={animation} className="mb-5"/>
       <div className="text-center my-5">
       <button className="btn btn-ghost bg-teal-500 text-white text-lg text-center">
          <Link to="/">
          Go to Home
          </Link>
        </button>
       </div>
    </div>
    );
};

export default Error;