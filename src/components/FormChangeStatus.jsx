import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FormChangeStatus = ({
  finishVisibility,
  handleFinishClose,
  axiosFinish,
  resi,
}) => {
  const [name, setName] = useState("");
  const [empty,setEmpty] = useState(false)

  function submitFinish() {
    console.log('clicked');
    if(!name) {
      setEmpty(true)
    } else {
      setEmpty(false)
      axiosFinish(name)
    }
  }

  function close() {
    setEmpty(false)
    handleFinishClose()
  }

  if (!finishVisibility) {
    return null;
  }

  

  return (
    <div className="fixed inset-0 bg-slate-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-sky-100 px-14 py-5 rounded-xl border-4 border-slate-300">
        <div className="my-5 font-semibold">
          Tandai Order <span className="text-pink-500">{resi}</span> telah
          terkirim
        </div>
        <label className={`${name? '' : 'text-pink-500'} text-sm`}>Nama Penerima Paket</label>
        <input
          className="p-2 rounded-lg block my-5 text-center w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex justify-center my-2">
          <button className="bg-green-400 px-10 py-2 rounded-full" onClick={() => submitFinish()}>
            Update
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-red-400 px-10 py-2 rounded-full"
            onClick={() => close()}
          >
            Close
          </button>
        </div>
        {empty? <div className="flex justify-center">
          Nama penerima paket tidak boleh kosong
        </div> : null}
      </div>
    </div>
  );
};

export default FormChangeStatus;
