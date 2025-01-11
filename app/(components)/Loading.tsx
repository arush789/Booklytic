import React from "react";

const Loading = () => {
  return (
    <div className=" flex w-full justify-center h-[calc(100vh-100px)] items-center">
      <div className="flex flex-row gap-2">
        <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
        <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};

export default Loading;
