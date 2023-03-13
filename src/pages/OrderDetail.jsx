import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormChangeStatus from "../components/FormChangeStatus";
import FormEditDetail from "../components/FormEditDetail";
import FormAddTracking from "../components/FormAddTracking";
import FormEditTracking from "../components/FormEditTracking";
import Loading from "../components/Loading";

const OrderDetail = ({ data }) => {
  const { id } = useParams();
  const [visibility, setVisibility] = useState(false);
  const [order, setOrder] = useState(null);
  const [finishVisibility, setFinishVisibility] = useState(false);
  const [trackingVisibility, setTrackingVisibility] = useState(false);
  const [editVisibility, setEditVisibility] = useState(false);
  const [log, setLog] = useState({});
  const [index, setIndex] = useState(0);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  function open() {
    setEditVisibility(true);
  }

  function fetchData() {
    axios({
      method: "GET",
      url: `https://api.lintassagaraserver.com/order/${id}`,
    })
      .then((response) => {
        console.log(response);
        setOrder(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function clickShow() {
    setVisibility(true);
  }

  function showFinishForm() {
    setFinishVisibility(true);
  }

  function handleClose() {
    setVisibility(false);
  }

  function handleFinishClose() {
    setFinishVisibility(false);
  }

  function showAddTracking() {
    setTrackingVisibility(true);
  }

  function handleTrackingClose() {
    setTrackingVisibility(false);
  }

  function showEditTracking(value) {
    setLog(order.Logs[value]);
    setIndex(value);
    setEditVisibility(true);
  }

  function handleEditClose() {
    setEditVisibility(false);
  }

  function axiosAddTracking(obj) {
    setShowLoading(true);
    axios({
      method: "POST",
      url: "https://api.lintassagaraserver.com/log",
      data: {
        description: obj.description,
        OrderId: id,
        date: obj.date,
      },
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        fetchData();
        handleTrackingClose();
        setShowLoading(false);
      })
      .catch((err) => {
        console.log(err);
        handleTrackingClose();
        setShowLoading(false);
      });
  }

  function axiosFinish(value) {
    setShowLoading(true);
    axios({
      method: "PATCH",
      url: `https://api.lintassagaraserver.com/order/${id}`,
      data: {
        recievedBy: value,
      },
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        handleFinishClose();
        fetchData();
        setShowLoading(false);
      })
      .catch((err) => {
        console.log(err);
        handleFinishClose();
        setShowLoading(false);
      });
  }

  function axiosEdit(obj) {
    setShowLoading(true);
    console.log(obj);
    axios({
      method: "PUT",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
      url: `https://api.lintassagaraserver.com/order/${id}`,
      data: {
        resi: obj.resi,
        sender: obj.sender,
        senderContact: obj.senderContact,
        recipient: obj.recipient,
        recipientAddress: obj.recipientAddress,
        recipientContact: obj.recipientContact,
        recipientCountry: obj.country,
        cityOrigin: obj.from,
      },
    })
      .then((response) => {
        console.log(response);
        fetchData();
        handleClose();
        setShowLoading(false);
      })
      .catch((err) => {
        console.log(err);
        handleClose();
        setShowLoading(false);
      });
  }

  function axiosEditTracking(obj) {
    setShowLoading(true);
    console.log(obj);
    const { id, description, date } = obj;
    axios({
      method: "PUT",
      url: `https://api.lintassagaraserver.com/log/${id}`,
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
      data: {
        description: obj.description,
        date: obj.date,
      },
    })
      .then((response) => {
        fetchData();
        handleEditClose();
        setShowLoading(false);
      })
      .catch((err) => {
        console.log(err);
        handleEditClose();
        setShowLoading(false);
      });
  }

  if (!order) {
    return null;
  }

  return (
    <div className="min-h-screen max-w-[100vw]">
      <Loading showLoading={showLoading} />
      <div className="mt-5">
        <div>
          <h1 className="text-center">Order Detail {order.resi}</h1>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <button
          className="bg-green-100 px-5 py-2 rounded-full"
          onClick={() => clickShow()}
        >
          Edit
        </button>
        <button
          className="bg-green-100 px-5 py-2 rounded-full"
          onClick={() => showFinishForm()}
        >
          Selesaikan order
        </button>
      </div>
      <div className="flex justify-center mt-10">
        <div className="border-2 p-5">
          <div>Resi : {order.resi}</div>
          <div>
            Diterima oleh :{" "}
            {order.recievedBy
              ? `${order.recievedBy}`
              : "Masih dalam pengiriman"}{" "}
          </div>
          <div>Dikirim Dari: {order.cityOrigin}</div>
          <div>Negara Tujuan : {order.recipientCountry}</div>
          <div>Alamat Pengiriman : {order.recipientAddress}</div>
          <div>Sender : {order.sender}</div>
          <div>Telepon Sender : {order.senderContact}</div>
          <div>Penerima : {order.recipient}</div>
          <div>Telepon Penerima : {order.recipientContact}</div>
          <div>Status : {order.status}</div>
          <div>Diinput oleh : {order.User.username}</div>
          <div>
            Perubahan terakhir oleh :{" "}
            {`${order.updatedBy ? order.updatedBy : "Belum ada perubahan"}`}
          </div>
        </div>
      </div>
      <div>
        <div className="mt-10">
          <h1 className="text-center">Tracking</h1>
        </div>
        <div className="flex justify-center mt-2">
          <button
            className="bg-green-100 px-5 py-2 rounded-full"
            onClick={() => showAddTracking()}
          >
            Tambah Tracking
          </button>
        </div>
        <div className="flex justify-center my-10">
          <table class="table-fixed border-collapse border max-w-[100vw]">
            <thead>
              <tr>
                <th className="border px-5">No</th>
                <th className="border px-5">Tanggal</th>
                <th className="border px-5">Deskripsi</th>
                <th className="border px-5">Opsi</th>
              </tr>
            </thead>
            <tbody>
              {order.Logs.map((e, i) => {
                return (
                  <tr>
                    <td
                      className={`px-5 border text-center ${
                        i % 2 == 0 ? "bg-slate-200" : null
                      }`}
                    >
                      {i + 1}
                    </td>
                    <td
                      className={`px-5 border text-center ${
                        i % 2 == 0 ? "bg-slate-200" : null
                      }`}
                    >
                      {e.date}
                    </td>
                    <td
                      className={`px-5 border ${
                        i % 2 == 0 ? "bg-slate-200" : null
                      }`}
                    >
                      {e.description}
                    </td>
                    <td
                      className={`px-5 py-2 border text-center ${
                        i % 2 == 0 ? "bg-slate-200" : null
                      }`}
                    >
                      <button
                        className="bg-sky-200 px-5 rounded-full"
                        onClick={() => showEditTracking(i)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <FormEditDetail
        visibility={visibility}
        order={order}
        handleClose={handleClose}
        axiosEdit={axiosEdit}
      />
      <FormChangeStatus
        finishVisibility={finishVisibility}
        handleFinishClose={handleFinishClose}
        resi={order.resi}
        axiosFinish={axiosFinish}
      />
      <FormAddTracking
        trackingVisibility={trackingVisibility}
        handleTrackingClose={handleTrackingClose}
        resi={order.resi}
        axiosAddTracking={axiosAddTracking}
      />
      <FormEditTracking
        resi={order.resi}
        log={log}
        editVisibility={editVisibility}
        handleEditClose={handleEditClose}
        axiosEditTracking={axiosEditTracking}
        index={index}
      />
    </div>
  );
};

export default OrderDetail;
