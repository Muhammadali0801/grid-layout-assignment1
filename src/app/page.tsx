import React from "react";

const home = () => {
  return (
    <div className="flex justify-center min-h-screen py-5 ">
      <div className="grid grid-rows-[auto_1fr_auto] grid-cols-[1fr_3fr_1fr] gap-2  max-w-[50%] w-full ">
        {/* navbar */}
        <div className=" row-span-3 bg-yellow-500 p-4">
          <p>NAVBAR</p>
        </div>

        {/* Header */}
        <div className=" col-span-2 bg-yellow-500 p-4">
          <p>HEADER</p>
        </div>

        {/* artticale  */}
        <div className="bg-yellow-500 p-4">
          <p>ARTICLE</p>
        </div>

        {/* Ads */}
        <div className="bg-yellow-500 p-4">
          <p>ADS</p>
        </div>

        {/* Footer */}
        <div className="col-span-2 bg-yellow-500 p-4">
          <p>FOOTER</p>
        </div>
      </div>
    </div>
  );
};

export default home;
