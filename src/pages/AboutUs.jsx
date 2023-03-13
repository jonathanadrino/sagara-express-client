import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import axios from "axios";
const AboutUs = () => {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios({
      method: "GET",
      url: "http://api.lintassagaraserver.com/aboutimage",
    })
      .then((response) => {
        setData(response.data);
        setTimeout(() => {
          setShowLoading(false);
        }, 1000);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        setShowLoading(false);
      });
  }, []);

  if (showLoading) {
    return <Loading showLoading={showLoading} />;
  }

  return (
    <div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="min-h-screen"
    >
      <div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-3"
      >
        <div className="mx-4 my-20">
          <h1 className="text-3xl font-bold text-slate-800">Tentang Kami</h1>
        </div>
        <div className="xl:container xl:mx-auto">
          <h1 className="text-center text-3xl font-thin md:text-6xl md:text-left mx-4">
            PT. Lintas Sagara Express
          </h1>
        </div>
        <div className="xl:container xl:mx-auto">
          <p className="mx-4 my-10 text-xl font-semibold">
            Menyediakan kebutuhan Jasa logistik domestik dan international dari
            berbagai kota besar di Indonesia.
          </p>
          <p className="mx-4 my-5 text-lg">
            Dengan bertumbuhnya kebutuhan jasa logistik di Indonesia, PT. Lintas
            Sagara Express dibangun pada tahun 2013 untuk membantu kebutuhan
            pasar tersebut. PT. Lintas Sagara Express siap untuk menyediakan
            jasa logistik yang efisien dengan bantuan sistem yang
            terkomputerisasi dan dapat dipercaya oleh pelanggan.
          </p>
          <p className="mx-4 my-5 text-lg">
            Dengan Bertanggung jawab kepada produk pelanggan serta menyediakan
            jasa yang tepat sesuai kebutuhan secara profesional, kami semakin
            dekat untuk mencapai visi kami.
          </p>
        </div>
      </div>
      <div className="flex md:container md:mx-auto justify-center flex-wrap mb-5">
        <div className="mx-4">
          <img src={data[0].url} alt="" className="h-60 w-60 my-5" />
          <p className="font-semibold">Domestic Land, Sea & Air Freight</p>
        </div>
        <div className="mx-4">
          <img src={data[1].url} alt="" className="h-60 w-60 my-5" />
          <p className="font-semibold">International Sea & Air Freight</p>
        </div>
        <div className="mx-4">
          <img src={data[2].url} alt="" className="h-60 w-60 my-5" />
          <p className="font-semibold">Container Rent</p>
        </div>
        <div className="mx-4">
          <img src={data[3].url} alt="" className="h-60 w-60 my-5" />
          <p className="font-semibold">Undername Services</p>
        </div>
        <div className="mx-4">
          <img src={data[4].url} alt="" className="h-60 w-60 my-5" />
          <p className="font-semibold">FCL & LCL Services</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
