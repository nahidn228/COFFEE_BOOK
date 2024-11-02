import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className='text-center my-12 '>
      <h1 className="text-5xl font-thin pb-4"> {title} </h1>
      <p className="text-lg font-thin"> {subtitle} </p>
    </div>
  );
};

export default Heading;
