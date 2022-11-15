import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-400">
        <h1 className="text-white bg-black py-5 text-2xl pl-8">TV Info</h1>
        <div className="flex justify-center py-4">
          <input className="outline-none ml-4" type="radio" name="radio" />
          <label>Actor</label>
          <input className="ml-4" type="radio" name="radio"/>
          <label>Shows</label>
        </div>
      </div>
  );
};

export default Header;
