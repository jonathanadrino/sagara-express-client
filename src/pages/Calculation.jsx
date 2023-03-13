import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Calculation = () => {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState(null);
  const [weight, setWeight] = useState(null);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios({
      url: "http://api.lintassagaraserver.com/country",
      method: "GET",
    })
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function changeCountry(e) {
    setCountry(e.target.value);
    setWeight(null)
  }
  function changeWeight(e) {
    let value = e.target.value;
    setWeight(value);
    if (country) {
      if (value == 1) {
        setPrice(data[country].price1);
      } else if (value == 2) {
        setPrice(data[country].price2);
      } else if (value == 3) {
        setPrice(data[country].price3);
      } else if (value == 4) {
        setPrice(data[country].price4);
      } else if (value == 5) {
        setPrice(data[country].price5);
      }
    }
  }

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <div className="min-h-screen">
      <div className="mx-4 my-20">
        <h1 className="text-3xl font-bold text-slate-800">
          Hitung Biaya Pengiriman
        </h1>
        <p className="text-pink-600">
          Untuk pengiriman diatas 5KG harap menghubungi kami
        </p>
      </div>
      <div className="my-4">
        <div className="flex justify-center">
          <p>Negara Tujuan</p>
        </div>
        <div className="flex justify-center">
          <select
            className="text-center border-2 p-3 rounded-full"
            onChange={(e) => changeCountry(e)}
          >
            <option selected value={""}>
              Pilih Negara Tujuan
            </option>
            {data.map((e, i) => {
              return (
                <option key={e.id} value={i}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="my-4">
        <div className="flex justify-center">
          <p>Berat {"(kg)"}</p>
        </div>
        <div className="flex justify-center">
          <input
            type="number"
            className="border-2 w-20 h-14 text-center rounded-full"
            min={1}
            max={5}
            onChange={(e) => changeWeight(e)}
          />
        </div>
      </div>

      {!country ? (
        <p className="text-center text-pink-600">
          Silahkan masukkan negara tujuan
        </p>
      ) : (
        ""
      )}

      {!weight ? (
        <p className="text-center text-pink-600">
          Silahkan masukkan berat barang
        </p>
      ) : (
        ""
      )}

      {weight < 6 &&
      weight > 0 &&
      country !== null &&
      country !== NaN &&
      country !== undefined &&
      country !== null ? (
        <p className="text-center text-2xl font-semibold">
          Biaya pengiriman barang kamu {formatter.format(price)}
        </p>
      ) : (
        ""
      )}

      {weight > 5 && country ? (
        <p className="text-center text-2xl font-semibold">
          Pengiriman diatas 5KG dapat menghubungi kami
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Calculation;
