import React, { useState, useEffect } from "react";
import {
  IoFlashSharp,
  IoLogoGoogle,
  IoLogoWhatsapp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTiktok,
} from "react-icons/io5";
import axios from "axios";
import Loading from "../components/Loading";
import Carousel from "../components/Carousel";
import { BiWorld } from "react-icons/bi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios({
      method: "GET",
      url: "https://api.lintassagaraserver.com/homeimage",
    })
      .then((response) => {
        setSlides(response.data);
        setTimeout(() => {
          setShowLoading(false);
        }, 1000);
      })
      .then(() => {
        setCurrentIndex(0);
      })
      .catch((err) => {
        console.log(err);
        setShowLoading(false);
      });
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (showLoading) {
    return <Loading showLoading={showLoading} />;
  }

  return (
    <div
      className="min-h-screen z-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <Carousel slides={slides} autoSlide={true} />

      <div className="xl:mx-32 my-4 mx-2 text-center sm:flex sm:justify-center sm:gap-4">
        <div className="xl:w-1/3 p-5 border-2 mx-auto sm:mx-0 my-4 shadow-lg bg-orange-300">
          <div className="flex justify-center">
            <BiWorld style={{ fontSize: "5rem" }} />
          </div>
          <h3 className="text-center mt-6 font-semibold">Hemat</h3>
          <p className="mt-3">Harga pengiriman internasional yang terjangkau</p>
        </div>
        <div className="xl:w-1/3 p-6 border-2 mx-auto sm:mx-0 my-4 shadow-lg bg-sky-300">
          <div className="flex justify-center">
            <FaMoneyBillAlt style={{ fontSize: "5rem" }} />
          </div>
          <h3 className="text-center mt-6 font-semibold">Cepat</h3>
          <p className="mt-3">
            Layanan sistem yang efeisien dengan sistem tracking
          </p>
        </div>
        <div className="xl:w-1/3 p-6 border-2 mx-auto sm:mx-0 my-4 shadow-lg bg-slate-200">
          <div className="flex justify-center">
            <GoPackage style={{ fontSize: "5rem" }} />
          </div>
          <h3 className="text-center mt-6 font-semibold">Tepat</h3>
          <p className="mt-3">Layanan untuk pengiriman ke 193 negara</p>
        </div>
      </div>

      <div className="mx-3">
        <div className="text-center">
          <h3 className="text-3xl font-extralight text-slate-600">
            LOKASI KAMI
          </h3>
        </div>
        <div className=" py-3">
          <div>
            <div className="w-80 sm:w-[85vw] sm:text-center px-6 py-3 border-2 mx-auto my-4 shadow-lg bg-sky-100">
              <h3 className="text-center text-3xl font-semibold">Bandung</h3>
              <p className="mt-3">
                Jl. Sadang Sari I No.3, Sekeloa, Kecamatan Coblong, Kota
                Bandung, Jawa Barat 40133
              </p>
              <p className="my-2">082111830684</p>
              <div className="xl:flex xl:justify-center xl:gap-3">
                <a
                  href="https://www.google.com/search?q=lintas%20sagara%20express&rlz=1C5CHFA_enID1039ID1039&oq=lintas+sagara&aqs=chrome.0.69i59i512j69i57j0i22i30j0i10i22i30j69i61l3.5958j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:3&tbm=lcl&rflfq=1&num=10&rldimm=2765352195662804595&lqi=ChVsaW50YXMgc2FnYXJhIGV4cHJlc3NIkuOejru3gIAIWicQABABEAIYABgBGAIiFWxpbnRhcyBzYWdhcmEgZXhwcmVzczICaWSSARpmcmVpZ2h0X2ZvcndhcmRpbmdfc2VydmljZaoBPhABGh8QASIbkMefRLtNQQd45bq0a_bQXpgVUknxYcoAJ7IhKhkiFWxpbnRhcyBzYWdhcmEgZXhwcmVzcygm&ved=2ahUKEwjsu6Kcw_T8AhUQxHMBHc1BBzsQvS56BAgZEAE&sa=X&rlst=f#rlfi=hd:;si:2765352195662804595,l,ChVsaW50YXMgc2FnYXJhIGV4cHJlc3NIkuOejru3gIAIWicQABABEAIYABgBGAIiFWxpbnRhcyBzYWdhcmEgZXhwcmVzczICaWSSARpmcmVpZ2h0X2ZvcndhcmRpbmdfc2VydmljZaoBPhABGh8QASIbkMefRLtNQQd45bq0a_bQXpgVUknxYcoAJ7IhKhkiFWxpbnRhcyBzYWdhcmEgZXhwcmVzcygm;mv:[[-6.88689530516434,107.63240716919891],[-6.894660130629765,107.61631391510956],null,[-6.890777733793401,107.62436054215424],17]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <button className="font-semibold mx-auto border-2 px-4 py-3 block my-4 border-slate-400 rounded-full hover:bg-orange-300  duration-400 transition-all">
                    Lihat di Google Maps
                    <IoLogoGoogle className="inline mb-1 ml-1" />
                  </button>
                </a>
                <a
                  href="https://wa.me/6282111830684"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <button className="font-semibold mx-auto border-2 px-4 py-3 block my-4 border-slate-400 rounded-full hover:bg-green-400  duration-400 transition-all">
                    Hubungi Whatsapp
                    <IoLogoWhatsapp className="inline mb-1 ml-1" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="w-80 sm:w-[85vw] sm:text-center px-6 py-3 border-2 mx-auto my-4 shadow-lg bg-orange-100">
              <h3 className="text-center text-3xl font-semibold">Jakarta</h3>
              <p className="mt-3">
                Thamrin city lt.3 blok H02 no 5, RT.10/RW.4, Kb. Kacang,
                Jakarta, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10240
              </p>
              <p className="my-2">081291596631</p>
              <div className="xl:flex xl:justify-center xl:gap-3">
                <a
                  href="https://www.google.com/maps/place/Lintas+Sagara+express/@-6.1940029,106.8171271,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f574f19ab701:0xf9ed524b150c7511!8m2!3d-6.1940029!4d106.8193158"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mx-auto border-2 px-4 py-3 block my-4 border-slate-400 rounded-full font-semibold hover:bg-orange-300  duration-400 transition-all">
                    Lihat di Google Maps
                    <IoLogoGoogle className="inline mb-1 ml-1" />
                  </button>
                </a>
                <a
                  href="https://wa.me/6281291596631"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mx-auto border-2 px-4 py-3 block my-4 border-slate-400 rounded-full font-semibold hover:bg-green-400  duration-400 transition-all">
                    Hubungi Whatsapp
                    <IoLogoWhatsapp className="inline mb-1 ml-1" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-3">
        <div className="text-center">
          <h3 className="text-3xl font-extralight text-slate-600">
            MEDIA SOSIAL
          </h3>
        </div>
        <div className="block xl:flex xl:flex-wrap xl:justify-center text-3xl my-10 gap-5 text-center">
        <a
                  href="https://facebook.com/LintasSagaraOfficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
          <button className="cursor-pointer hover: hover:text-sky-500 hover:px-6  hover:border-b-4 transform-full duration-100 transition-all">
            <IoLogoFacebook className="inline text-6xl mb-1 my-2" /> facebook
          </button>
          </a>
          <a
                  href="https://www.instagram.com/lintassagara.express/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
          <button className="cursor-pointer hover: hover:text-sky-500 hover:px-6  hover:border-b-4 transform-full duration-100 transition-all">
            <IoLogoInstagram className="inline text-6xl mb-1 my-2" /> instagram
          </button>
          </a>
          <a
                  href="https://www.tiktok.com/@gracelowla"
                  target="_blank"
                  rel="noopener noreferrer"
                >
          <button className="cursor-pointer hover: hover:text-sky-500 hover:px-6  hover:border-b-4 transform-full duration-100 transition-all">
            <IoLogoTiktok className="inline text-6xl mb-1 my-2" /> tiktok
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
