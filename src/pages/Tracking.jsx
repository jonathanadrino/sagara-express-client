import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Loading from "../components/Loading";

const Tracking = () => {
  const [awb, setAwb] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function track() {
    console.log("masuk track");
    setError(null);
    setEmpty(false);
    setData(null);

    if (awb) {
      console.log("masuk axios");
      console.log(awb, "masuk awb");
      setShowLoading(true);
      axios({
        method: "GET",
        url: `https://api.lintassagaraserver.com/track/${awb}`,
      })
        .then((response) => {
          console.log(response);
          if (response.data.Logs.length === 0) {
            setEmpty(true);
          }
          setTimeout(() => {
            setData(response.data);

            setShowLoading(false);
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          setTimeout(() => {
            if (err.response.data.message === "Order not found") {
              setError("Order tidak ditemukan");
              setShowLoading(false);
            }
          }, 2000);
        });
    } else {
      setError("Resi kosong");
    }
  }

  function clear() {
    setAwb("");
    setData(null);
    setError(null);
    setEmpty(false);
  }
  return (
    <div className="min-h-screen">
      <Loading showLoading={showLoading} />

      <div className="mx-4 my-20">
        <h1 className="text-3xl font-bold text-slate-800">Track Paket Kamu</h1>
      </div>

      <div className="">
        <div className="text-center text-xs md:text-sm text-slate-400">
          *input bersifat case sensitive "A" tidak sama dengan "a"
        </div>
        <div className="w-full flex justify-center items-center mt-5">
          <input
            type="text"
            className="rounded-full focus-within:rounded-none border-2 border-slate-700 text-center p-3 focus-within:outline-none focus-within:border-0 focus-within:border-b-2 focus-within:border-green-600 transition-all duration-75 ease-in-out"
            placeholder="Masukkan resi"
            onChange={(e) => setAwb(e.target.value)}
            value={awb}
          />
          {awb.length ? (
            <div
              className="mx-2 bg-slate-300 p-1 rounded-full cursor-pointer"
              onClick={() => clear()}
            >
              X
            </div>
          ) : null}
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="mx-auto rounded-full bg-slate-500 py-2 px-5 text-white"
            onClick={() => track()}
          >
            Submit
          </button>
        </div>
        {data ? (
          <div>
            <div className="mx-4 my-4">
              <p>Resi : {data.resi}</p>
              <p>Pengirim : {data.sender}</p>
              <p>Penerima : {data.recipient}</p>
              <p>Dikirim dari : {data.cityOrigin}</p>
              <p>Negara Tujuan : {data.recipientCountry}</p>
              <p>
                Diterima oleh :{" "}
                {data.status === "Finished" ? (
                  <span className="text-green-400">{data.recievedBy}</span>
                ) : (
                  <span className="text-yellow-400"> Sedang dikirim</span>
                )}
              </p>
            </div>
            <div className="my-4">
              {data.Logs.map((e) => {
                return (
                  <div className="my-2" key={e.id}>
                    <div className="mx-4 bg-slate">Tanggal: {e.date}</div>
                    <div className="border-l-8 border-2 flex justify-center mx-4 p-2 mt-1 border-sky-200">
                      {e.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        {error ? (
          <div className="text-center my-5 text-pink-500">{error}</div>
        ) : null}
        {empty ? (
          <div className="text-center my-5 text-pink-500">
            Belum ada data tracking
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Tracking;
