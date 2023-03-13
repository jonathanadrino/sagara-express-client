import React, { useEffect } from "react";
import {
  IoFlashOutline,
  IoFlashSharp,
  IoLogoGoogle,
  IoLogoWhatsapp,
  IoCallOutline,
} from "react-icons/io5";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <div className="mx-4 my-20">
        <h1 className="text-3xl font-bold text-slate-800">
          Kontak & Alamat Kami
        </h1>
      </div>
      <div>
        <h1 className="text-center text-3xl font-thin md:text-6xl md:text-left mx-4">
          PT. Lintas Sagara Express
        </h1>
      </div>
      <div>
        <div className="py-3 md:mx-10 md:flex md:justify-center">
          <div>
            <div className="w-80 px-6 py-3 mx-auto my-4 md:w-[50vw]">
              <h3 className="text-center md:text-left text-3xl font-bold">
                Bandung
              </h3>
              <p className="mt-3 text-justify">
                Jl. Sadang Sari I No.3, Sekeloa, Kecamatan Coblong, Kota
                Bandung, Jawa Barat 40133
              </p>
              <p className="my-8 text-center md:text-left font-semibold">
                <IoCallOutline className="inline mb-1" /> 082111830684
              </p>
              <a
                href="https://www.google.com/maps/place/PT.+Lintas+Sagara+Express/@-6.890873,107.6336179,17z/data=!4m5!3m4!1s0x0:0x2660812ba553f673!8m2!3d-6.890873!4d107.6258931"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="font-semibold mx-auto md:mx-0 border-2 px-4 py-3 block my-4 border-slate-400 rounded-full hover:bg-orange-300 transition-all duration-400">
                  Lihat di Google Maps
                  <IoLogoGoogle className="inline mb-1 ml-1" />
                </button>
              </a>
              <a
                href="https://wa.me/6282111830684"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="font-semibold mx-auto md:mx-0 border-2 px-4 py-3 block my-4 border-slate-400 rounded-full hover:bg-green-400 transition-all duration-400">
                  Hubungi Whatsapp
                  <IoLogoWhatsapp className="inline mb-1 ml-1" />
                </button>
              </a>
            </div>
          </div>
          <div>
            <div className="w-80 px-6 py-3 mx-auto my-4 md:w-[50vw]">
              <h3 className="text-center text-3xl font-bold md:text-left">
                Jakarta
              </h3>
              <p className="mt-3 text-justify">
                Thamrin city lt.3 blok H02 no 5, RT.10/RW.4, Kb. Kacang,
                Jakarta, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10240
              </p>
              <p className="my-8 text-center font-semibold md:text-left">
                <IoCallOutline className="inline mb-1" /> 081291596631
              </p>
              <a
                href="https://www.google.com/maps/place/Lintas+Sagara+express/@-6.1940029,106.8171271,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f574f19ab701:0xf9ed524b150c7511!8m2!3d-6.1940029!4d106.8193158"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mx-auto border-2 px-4 py-3 block my-4 border-slate-400 rounded-full font-semibold md:mx-0 hover:bg-orange-300 transition-all duration-400">
                  Lihat di Google Maps
                  <IoLogoGoogle className="inline mb-1 ml-1" />
                </button>
              </a>
              <a
                href="https://wa.me/6281291596631"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="font-semibold mx-auto border-2 px-4 py-3 block my-4 border-slate-400 rounded-full md:mx-0 hover:bg-green-400 transition-all duration-400">
                  Hubungi Whatsapp
                  <IoLogoWhatsapp className="inline mb-1 ml-1" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
