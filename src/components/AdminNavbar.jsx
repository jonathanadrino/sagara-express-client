import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminNavbar = ({authentication}) => {
  const navigate = useNavigate();
  const [active, setActive] = useState("order");

  if(!authentication) {
    return null
  }

  function click(value) {
    setActive(value);
    navigate(`/admin/${value}`);
  }
  return (
    <div className="w-full bg-orange-300 flex justify-center gap-5">
      <button
        className={`px-3 py-2 w-40 text-center my-3 rounded-full ${
          active == "order" ? "bg-slate-300" : "bg-green-300"
        }`}
        onClick={() => click("order")}
      >
        Order
      </button>
      <button
        className={`px-3 py-2 w-40 text-center my-3 rounded-full ${
          active == "banner" ? "bg-slate-300" : "bg-green-300"
        }`}
        onClick={() => click("banner")}
      >
        Banner & Gallery
      </button>
      <button
        className={`px-3 py-2 w-40 text-center my-3 rounded-full ${
          active == "harga" ? "bg-slate-300" : "bg-green-300"
        }`}
        onClick={() => click("harga")}
      >
        Harga
      </button>
    </div>
  );
};

export default AdminNavbar;
