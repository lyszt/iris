import { type FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <div className="bg-gray-100 p-5 w-full">
        <h1 className="w-full flex justify-left items-center gap-5">
          
          <svg 
          className="w-10"
          viewBox="0 0 16 16" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="#000000"><g 
          id="SVGRepo_bgCarrier"
          stroke-width="0"></g><g 
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round" 
          stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#df046e" fill-rule="evenodd" d="M0,8 C0,6.34315 1.34315,5 3,5 L13,5 C14.6569,5 16,6.34315 16,8 C16,9.65685 14.6569,11 13,11 L3,11 C1.34315,11 0,9.65685 0,8 Z M10,7 L13,7 C13.5523,7 14,7.44772 14,8 C14,8.55228 13.5523,9 13,9 L8,9 L10,7 Z"></path> </g></svg>
          Current ongoing projects
        </h1>
      </div>
    </div>
  );
};

export default Home;
