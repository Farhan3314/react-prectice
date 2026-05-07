import React from "react";

const Card = (props) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="rounded-4xl py-3 px-3.5 w-1/4 border-12 border-red-400 text-center hover:block ">
        <img
          className="w-50 h-50 mx-auto rounded-full my-3 object-cover cursor-pointer"
          src={props.img}
          alt=""
        />

        <h1 className="my-3 font-bold text-3xl">
          {props.user} / {props.age}
        </h1>

        <p className="my-3 font-bold font-mono">{props.p}</p>

        <button
          className="rounded-full py-2 px-4 mb-3 mt-3 uppercase text-xs font-bold cursor-pointer text-red-500 border-red-500 border-2 bg-transparent
       hover:text-red-900 hover:border-gray-50"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Card;
