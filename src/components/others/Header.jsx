
import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium text-amber-50 ">Hello <br /> <span className="text-3xl  font-semibold">Safia👋</span> </h1>
      <button className="px-4 py-2 text-lg font-medium text-white rounded bg-red-600">Logout</button>
    </div>
  );
};

export default Header;
