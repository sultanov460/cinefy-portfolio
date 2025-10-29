import React from "react";

const notfound = () => {
  return (
    <div className="flex flex-col gap-2 text-center mt-15 items-center ">
      <h1 className="font-extrabold text-7xl md:text-9xl text-primary tracking-[5px] border-b border-primary">
        404
      </h1>
      <p className="font-medium text-sm md:text-2xl tracking-[3px]">
        Page not found.
      </p>
    </div>
  );
};

export default notfound;
