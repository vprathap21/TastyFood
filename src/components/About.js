import { Link } from "react-router-dom";
import User from "./User";
import {useState} from "react";
const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
       <div className="text-center mt-4">
        {/* used ternary condition to Show my profile and Hide my Profile and using nested routing */}
        {show ? (
          <div className="text-center ">
            <Link >
              <button className=" bg-orange-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                
                onClick={() => setShow(false)}
              >
                Hide My Profile
              </button>
            </Link>
            <User/>
          </div>
        ) : (
          <Link >
            <button className=" bg-orange-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
             
              onClick={() => setShow(true)}
            >
              Show My Profile
            </button>
          </Link>
        )}
      </div>
      
      <div className="mt-8  grid grid-cols-1 sm:grid-cols-2 sm:mt-10">
        <div className="">
          {" "}
          <h1 className="font-bold ml-10 text-gray-600 text-4xl sm:text-7xl sm:sm:mt-20 sm:pt-20">Welcome to Our </h1>
          <h1 className="font-bold ml-10  text-gray-600 text-4xl sm:text-7xl">
          Delicious Universe!
          </h1>
          <h1 className="font-bold pl-10  text-gray-600 text-3xl sm:ztext-7xl"> </h1>
          <h1 className="rounded-lg flex  items-center text-center mt-8 font-bold text-2xl sm:text-3xl ">
            "Food for the body is not enough.there must be food for the soul that Red Food provides."
          </h1>
        </div>
        <div>
        <img className="w-full mb-8 " src="https://foodfire-app.netlify.app/burger-image.ec55d069.png"></img>
      </div>
      </div>
    </div>
  );
};
export default About;
