import { useEffect, useState } from "react";
import { Github_Link, Linkedin_Link, Twitter_Link } from "../utils/constant";
const User = () => {
  const [userdata, setuserdata] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch("https://api.github.com/users/vprathap21");
    const json = await data.json();
    setuserdata(json);
    console;
  };
  const { avatar_url, login } = userdata;
  return (
    <div className=" mx-8 mb-8 sm:w-4/12  sm:mx-auto mt-10  shadow-xl rounded-lg  bg-white">
      <h1 className="font-bold text-center text-2xl">About Me</h1>
      <a href={Github_Link}>
        <img
          className="rounded-full object-cover h-28 w-28   m-auto mt-4"
          src={avatar_url}
          alt={login}
        />
      </a>

      <h1 className="text-center">react.js | javascript | tailwind</h1>
      <ul className="flex justify-center items-center py-2">
        <li className="px-1">
          <a href={Github_Link}>
            <svg
              class="w-8 h-8 text-gray-800 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
        <li className="px-1">
          <a href={Linkedin_Link}>
            <svg
              class="w-7 h-7 bg-blue-400 rounded-full p-1 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z"
                clip-rule="evenodd"
              />
              <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
            </svg>
          </a>
        </li>
        <li className="px-1">
          <a href={Twitter_Link}>
            <svg
              class="w-6 h-6 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13.8 10.5 20.7 2h-3l-5.3 6.5L7.7 2H1l7.8 11-7.3 9h3l5.7-7 5.1 7H22l-8.2-11.5Zm-2.4 3-1.4-2-5.6-7.9h2.3l4.5 6.3 1.4 2 6 8.5h-2.3l-4.9-7Z"
              />
            </svg>
          </a>
        </li>
        <li>
          <svg
          class="w-6 h-6"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            role="img"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Any Query! Mail me</title>
            <title></title>
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
          </svg>
        </li>
      </ul>
    </div>
  );
};
export default User;
