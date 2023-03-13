import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BarLoader from "react-spinners/BarLoader";

const Loading = ({ showLoading }) => {
  if (!showLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-100 bg-opacity-30 flex justify-center items-center z-50 h-screen w-screen">
      <div className="p-3 bg-amber-500">
        <BarLoader color="#0e7490" height={20} width={200} />
      </div>
    </div>
  );
};

export default Loading;
