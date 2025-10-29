import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ScaleLoader color="#f6be00" height={50} width={5} />
    </div>
  );
};

export default Loading;
