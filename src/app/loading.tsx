import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <ScaleLoader color="#f6be00" height={50} width={5} />
    </div>
  );
};

export default Loading;
