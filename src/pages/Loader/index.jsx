import React from "react";

const Loader = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F6F4F0] z-50">
      <img
        src="/loader.png"
        alt="Company Logo"
        className="w-40 mb-6 opacity-90"
      />
      <div className="flex space-x-2">
        <span className="h-5 w-5 bg-[#373736] rounded-full animate-bounce [animation-delay:-0.3s]" />
        <span className="h-5 w-5 bg-[#373736] rounded-full animate-bounce [animation-delay:-0.15s]" />
        <span className="h-5 w-5 bg-[#373736] rounded-full animate-bounce" />
      </div>
    </div>
  );
};

export default Loader;
