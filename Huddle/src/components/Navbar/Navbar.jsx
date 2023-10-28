import React from "react";

import logo from "./logo.svg";

export default function Navbar() {
  return (
    <div className="h-14 flex items-center justify-between px-6 pt-6">
      <img src={logo} width={120} className="aspect-auto" />

      <button className="border-2 border-[#ff8fd8] px-8 py-1 rounded-full drop-shadow-2xl text-[#ff8fd8]">
        Try It Free
      </button>
    </div>
  );
}
