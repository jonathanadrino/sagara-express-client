import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FormEditTracking = ({
  editVisibility,
  resi,
  handleEditClose,
  log,
  axiosEditTracking,
  index,
}) => {
  const [data, setData] = useState(log);
  const [descriptionValue, setDescriptionValue] = useState(log.description);
  const [dateValue, setDateValue] = useState(log.date);
  const [emptyDescription, setEmptyDescription] = useState(false);
  const [emptyDate, setEmptyDate] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(index);

  useEffect(() => {
    setDescriptionValue(log.description);
    setDateValue(log.date);
    setUpdateIndex(index);
  }, [log.id]);

  function close() {
    setEmptyDescription(false);
    setEmptyDate(false);
    handleEditClose();
  }

  function submitUpdate() {
    if (!descriptionValue) {
      setEmptyDescription(true);
    } else if (!dateValue) {
      setEmptyDate(true);
    } else {
      setEmptyDescription(false);
      setEmptyDate(false);
      axiosEditTracking({
        id: log.id,
        description: descriptionValue,
        date: dateValue
      });
    }
  }

  if (!editVisibility) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-sky-100 px-14 py-5 rounded-xl border-4 border-slate-300">
        <div className="my-5 font-semibold">
          Edit tracking nomor {index + 1} order{" "}
          <span className="px-2 bg-pink-500 text-white"> {resi} </span>
        </div>
        <label className={`${descriptionValue ? "" : "text-pink-500"} text-sm`}>
          Deskripsi tracking
        </label>
        <input
          className="p-2 rounded-lg block my-5 text-center w-full"
          value={descriptionValue}
          onChange={(e) => setDescriptionValue(e.target.value)}
        />
        <label className={`${descriptionValue ? "" : "text-pink-500"} text-sm`}>
          Tanggal
        </label>
        <input
          className="p-2 rounded-lg block my-5 text-center w-full"
          value={dateValue}
          onChange={(e) => setDateValue(e.target.value)}
        />
        <div className="flex justify-center my-2">
          <button
            className="bg-green-400 px-10 py-2 rounded-full"
            onClick={() => submitUpdate()}
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
        <div className="flex justify-center text-pink-500 my-2">
          {emptyDescription ? "Deskripsi tidak boleh kosong" : null}
          {emptyDate ? "Tanggal tidak boleh kosong" : null}
        </div>
      </div>
    </div>
  );
};

export default FormEditTracking;
