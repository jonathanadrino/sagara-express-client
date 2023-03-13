import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FormEditDetail = ({ visibility, handleClose, order, axiosEdit }) => {
  const [resi, setResi] = useState(order.resi);
  const [country, setCountry] = useState(order.recipientCountry);
  const [sender, setSender] = useState(order.sender);
  const [senderContact, setSenderContact] = useState(order.senderContact);
  const [recipient, setRecipient] = useState(order.recipient);
  const [recipientContact, setRecipientContact] = useState(
    order.recipientContact
  );
  const [recipientAddress, setRecipientAddress] = useState(
    order.recipientAddress
  );
  const [from, setFrom] = useState(order.cityOrigin);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    console.log(order);
    setResi(order.resi);
    setCountry(order.recipientCountry);
    setSender(order.sender);
    setSenderContact(order.senderContact);
    setRecipient(order.recipient);
    setRecipientContact(order.recipientContact);
    setRecipientAddress(order.recipientAddress);
    setFrom(order.cityOrigin);
  }, [order.id]);

  if (!visibility) {
    return null;
  }

  function changeResi(value) {
    setResi(value);
  }
  function changeCountry(value) {
    setCountry(value);
  }
  function changeSender(value) {
    setSender(value);
  }
  function changeSenderContact(value) {
    setSenderContact(value);
  }
  function changeRecipient(value) {
    setRecipient(value);
  }
  function changeRecipientContact(value) {
    setRecipientContact(value);
  }
  function changeRecipientAddress(value) {
    setRecipientAddress(value);
  }
  function changeFrom(value) {
    console.log(value);
    setFrom(value);
  }

  function close() {
    handleClose();
  }

  function submitEdit(e) {
    e.preventDefault();
    setEmpty("");

    if (!resi) {
      setEmpty("Resi");
    } else if (!country) {
      setEmpty("Negara Tujuan");
    } else if (!sender) {
      setEmpty("Nama Pengirim");
    } else if (!senderContact) {
      setEmpty("Telepon Pengirim");
    } else if (!recipient) {
      setEmpty("Nama Penerima");
    } else if (!recipientContact) {
      setEmpty("Telepon Penerima");
    } else if (!recipientAddress) {
      setEmpty("Alamat Penerima");
    } else if (!from) {
      setEmpty("Dikirim Dari");
    } else {
      axiosEdit({
        resi,
        sender,
        senderContact,
        recipient,
        recipientContact,
        country,
        recipientAddress,
        from,
      });
    }
  }

  return (
    <div className="fixed inset-0 bg-slate-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-40">
      <form className="p-10 rounded-xl border-4 border-slate-300 bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">
            Edit Order{" "}
            <span className="bg-pink-500 text-white px-2">{order.resi}</span>{" "}
          </h1>
        </div>
        <div className="flex gap-5">
          <div className="">
            <label
              className="text-gray-700 text-sm font-bold text-center"
              for="resi"
            >
              Resi
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="resi"
              type="text"
              placeholder="Masukkan resi"
              onChange={(e) => changeResi(e.target.value)}
              value={resi}
            />
          </div>
          <div className="">
            <label
              className="text-gray-700 text-sm font-bold text-center"
              for="tujuan"
            >
              Negara Tujuan
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tujuan"
              type="text"
              placeholder="Masukkan negara tujuan"
              onChange={(e) => changeCountry(e.target.value)}
              value={country}
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="">
            <label
              className="text-gray-700 text-sm font-bold text-center"
              for="sender"
            >
              Nama Pengirim
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sender"
              type="text"
              placeholder="Masukkan nama pengirim"
              onChange={(e) => changeSender(e.target.value)}
              value={sender}
            />
          </div>
          <div className="">
            <label
              className="text-gray-700 text-sm font-bold text-center"
              for="senderContact"
            >
              Telepon Pengirim
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="senderContact"
              type="text"
              placeholder="Masukkan telepon pengirim"
              onChange={(e) => changeSenderContact(e.target.value)}
              value={senderContact}
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="">
            <label
              className="text-gray-700 text-sm font-bold text-center"
              for="recipient"
            >
              Nama Penerima
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="recipient"
              type="text"
              placeholder="Masukkan nama penerima"
              onChange={(e) => changeRecipient(e.target.value)}
              value={recipient}
            />
          </div>
          <div className="">
            <label
              className="text-gray-700 text-sm font-bold text-center"
              for="recipientContact"
            >
              Telepon Penerima
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="recipientContact"
              type="text"
              placeholder="Masukkan telepon penerima"
              onChange={(e) => changeRecipientContact(e.target.value)}
              value={recipientContact}
            />
          </div>
        </div>
        <div className="">
          <label
            className="text-gray-700 text-sm font-bold text-center"
            for="address"
          >
            Alamat Penerima
          </label>
          <textarea
            id="address"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Masukkan alamat penerima..."
            onChange={(e) => changeRecipientAddress(e.target.value)}
            value={recipientAddress}
          />
        </div>
        <div className="my-3">
          <p
            className="text-gray-700 text-sm font-bold text-center"
            for="password"
          >
            Dikirim dari
          </p>
          <select
            name=""
            id="from"
            className="block mx-auto px-3 py-2"
            onChange={(e) => changeFrom(e.target.value)}
          >
            <option disabled>Pilih kotal asal</option>
            <option
              value="Bandung"
              selected={order.cityOrigin === "Bandung" ? true : false}
            >
              Bandung
            </option>
            <option
              value="Jakarta"
              selected={order.cityOrigin === "Jakarta" ? true : false}
            >
              Jakarta
            </option>
          </select>
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => close()}
          >
            Close
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
            onClick={(e) => submitEdit(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

// Resi : SGR1234 .
// Dikirim Dari : jakarta
// Negara Tujuan : south korea .
// Alamat Pengiriman : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, eius?
// Sender : Lorem .
// Telepon Sender : 0812000000 .
// Penerima : Lorem .
// Telepon Penerima : 084512341234 .
// Status : ongoing

export default FormEditDetail;
