import React from "react";
import { PropagateLoader } from "react-spinners";

export default function Loading () {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
    <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
    <div className="relative">
      <PropagateLoader color="#ffffff" size={10} />
    </div>
  </div>
  );
};

