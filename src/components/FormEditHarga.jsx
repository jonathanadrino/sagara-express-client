import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FormEditHarga = ({ obj, editVisibility, handleEditClose,updatePrice }) => {
  const [name, setName] = useState(obj.name);
  const [price1, setPrice1] = useState(obj.price1);
  const [price2, setPrice2] = useState(obj.price2);
  const [price3, setPrice3] = useState(obj.price3);
  const [price4, setPrice4] = useState(obj.price4);
  const [price5, setPrice5] = useState(obj.price5);
  const [id,setId] = useState(obj.id)
  const [error, setError] = useState(false);

  useEffect(() => {
    setName(obj.name)
    setPrice1(obj.price1)
    setPrice2(obj.price2)
    setPrice3(obj.price3)
    setPrice4(obj.price4)
    setPrice5(obj.price5)
    setId(obj.id)
  },[obj.id])

  if (!editVisibility) {
    return null;
  }

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  function clickUpdate() {
    if (!name || !price1 || !price2 || !price3 || !price4 || !price5) {
      setError(true);
    } else {
      updatePrice({
        id,
        name,
        price1,
        price2,
        price3,
        price4,
        price5,
      })
      handleEditClose()
      setPrice1(0);
      setPrice2(0);
      setPrice3(0);
      setPrice4(0);
      setPrice5(0);
    }
   
  }

  return (
    <div className="fixed inset-0 bg-slate-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-sky-100 p-14 rounded-xl border-4 border-slate-300">
        <div className="text-center">Tambah Negara</div>
        <div className="flex items-center gap-5">
          <label>Nama Negara</label>
          <input
            className="p-2 rounded-lg block my-2 text-center"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-5">
          <label>Price 1 Kg</label>
          <input
            className="p-2 rounded-lg block my-2 text-center"
            value={price1}
            onChange={(e) => setPrice1(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-5">
          <label>Price 2 Kg</label>
          <input
            className="p-2 rounded-lg block my-2 text-center"
            value={price2}
            onChange={(e) => setPrice2(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-5">
          <label>Price 3 Kg</label>
          <input
            className="p-2 rounded-lg block my-2 text-center"
            value={price3}
            onChange={(e) => setPrice3(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-5">
          <label>Price 4 Kg</label>
          <input
            className="p-2 rounded-lg block my-2 text-center"
            value={price4}
            onChange={(e) => setPrice4(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-5">
          <label>Price 5 Kg</label>
          <input
            className="p-2 rounded-lg block my-2 text-center"
            value={price5}
            onChange={(e) => setPrice5(e.target.value)}
          />
        </div>
        <p className="p-2 text-center">Format harga:</p>
        <p className="text-center">{formatter.format(price1)}</p>
        <div className="flex justify-center my-2">
          <button
            className="bg-green-400 px-10 py-2 rounded-full"
            onClick={() => clickUpdate()}
          >
            Update
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-red-400 px-10 py-2 rounded-full"
            onClick={() => handleEditClose()}
          >
            Close
          </button>
        </div>
        {error ? "Nama/Harga tidak boleh kosong" : null}
      </div>
    </div>
  );
};

export default FormEditHarga;
