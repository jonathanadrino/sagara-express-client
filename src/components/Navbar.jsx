import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    checkRoute();
  }, []);

  function checkRoute() {
    console.log(location.pathname);

    let name = "";

    for (let i = 0; i < location.pathname.length; i++) {
      if (i > 0) {
        name += location.pathname[i];
      }
    }

    setCurrent(name);
  }

  function click(value) {
    setOpen(!open);
    setCurrent(value);
  }

  function clickHome() {
    navigate("/");
    setOpen(false);
    setCurrent("");
  }
  return (
    <>
      <div className="bg-slate-100/60 backdrop-blur-xl w-full sticky top-0 lg:hidden overflow-hidden z-10">
        <div className="relative h-full items-center justify-center">
          <div className="py-2">
            <img
              src={logo}
              onClick={() => clickHome()}
              className="h-14 mx-auto pt-2 w-30"
            />
          </div>
          <div
            className="mr-4 text-5xl right-0 absolute top-3 cursor-pointer duration-200 ease-in-out"
            onClick={() => click()}
          >
            {open ? "x" : "≡"}
          </div>
        </div>
        <motion.div
          className={`${open ? "bg-slate-100/70 backdrop-blur-2xl h-full" : "hidden"} duration-1000 transition-all`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <Link
            onClick={() => click()}
            to="/"
            className="block text-center py-2 font-semibold border-b-2 border-x-2"
          >
            Beranda
          </Link>
          <Link
            onClick={() => click()}
            to="/aboutus"
            className="block text-center py-2 font-semibold border-b-2 border-x-2"
          >
            Tentang Kami
          </Link>
          <Link
            onClick={() => click()}
            to="/tracking"
            className="block text-center py-2 font-semibold border-b-2 border-x-2"
          >
            Tracking Paket
          </Link>
          <Link
            onClick={() => click()}
            to="/calculation"
            className="block text-center py-2 font-semibold border-b-2 border-x-2"
          >
            Hitung Biaya Pengiriman
          </Link>
          <Link
            onClick={() => click()}
            to="/contact"
            className="block text-center py-2 font-semibold border-b-2 border-x-2"
          >
            Kontak & Alamat
          </Link>
        </motion.div>
      </div>
      <div className="bg-slate-100/50 backdrop-blur-lg h-20 w-full sticky top-0 hidden lg:block z-10">
        <div className="h-full container mx-auto flex items-center ">
          <div className="">
            <img
              src={logo}
              onClick={() => clickHome()}
              className="h-20 pt-2 w-30 cursor-pointer"
            />
          </div>
          <div className="flex gap-1 ml-20">
            <Link
              onClick={() => clickHome()}
              to="/"
              className={`block text-center px-6 py-5 font-semibold hover:bg-orange-300 hover:px-8 transition-all duration-150 ease-in-out ${
                current == "" ? "bg-sky-300 px-8" : null
              }`}
            >
              Beranda
            </Link>
            <Link
              onClick={() => click("aboutus")}
              to="/aboutus"
              className={`block text-center px-6 py-5 font-semibold hover:bg-orange-300 hover:px-8 transition-all duration-150 ease-in-out ${
                current == "aboutus" ? "bg-sky-300 px-8" : null
              }`}
            >
              Tentang Kami
            </Link>
            <Link
              onClick={() => click("tracking")}
              to="/tracking"
              className={`block text-center px-6 py-5 font-semibold hover:bg-orange-300 hover:px-8 transition-all duration-150 ease-in-out ${
                current == "tracking" ? "bg-sky-300 px-8" : null
              }`}
            >
              Tracking Paket
            </Link>
            <Link
              onClick={() => click("calculation")}
              to="/calculation"
              className={`block text-center px-6 py-5 font-semibold hover:bg-orange-300 hover:px-8 transition-all duration-150 ease-in-out ${
                current == "calculation" ? "bg-sky-300 px-8" : null
              }`}
            >
              Hitung Biaya Pengiriman
            </Link>
            <Link
              onClick={() => click("contact")}
              to="/contact"
              className={`block text-center px-6 py-5 font-semibold hover:bg-orange-300 hover:px-8 transition-all duration-150 ease-in-out ${
                current == "contact" ? "bg-sky-300 px-8" : null
              }`}
            >
              Kontak & Alamat
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
