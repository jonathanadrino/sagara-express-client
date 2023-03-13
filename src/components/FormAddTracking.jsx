import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FormAddTracking = ({
  trackingVisibility,
  handleTrackingClose,
  axiosAddTracking,
  resi,
}) => {
  const [description, setDescription] = useState("");
  const [date,setDate] = useState("")
  const [emptyDescription, setEmptyDescription] = useState(false);
  const [emptyDate, setEmptyDate] = useState(false);

  function submitAddTracking() {
    if (!description) {
      setEmptyDescription(true);
    } else if (!date) {
      setEmptyDate(true)
    }
    
    else {
      setDescription('')
      setDate('')
      setEmptyDate(false)
      setEmptyDescription(false)
      axiosAddTracking({description,date});
    }
  }

  function close() {
    setDescription("");
    setEmptyDescription(false)
    setEmptyDate(false)
    handleTrackingClose();
  }

  if (!trackingVisibility) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-sky-100 px-14 py-5 rounded-xl border-4 border-slate-300">
        <div className="my-5 font-semibold">Tambah tracking order {resi}</div>
        <label className={`${description ? "" : "text-pink-500"} text-sm`}>
          Deskripsi tracking
        </label>
        <input
          className="p-2 rounded-lg block my-5 text-center w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label className={`${date ? "" : "text-pink-500"} text-sm`}>
          Tanggal
        </label>
        <input
          className="p-2 rounded-lg block my-5 text-center w-full"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div className="flex justify-center my-2">
          <button
            className="bg-green-400 px-10 py-2 rounded-full"
            onClick={() => submitAddTracking()}
          >
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
        <div className="flex justify-center text-pink-500">
          {emptyDescription ? "Deskripsi tidak boleh kosong" : null}
          {emptyDate ? "Tanggal tidak boleh kosong" : null}
        </div>
      </div>
    </div>
  );
};

export default FormAddTracking;
