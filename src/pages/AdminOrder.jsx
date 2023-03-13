import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormAddOrder from "../components/FormAddOrder";

const AdminOrder = ({ logOut }) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("all");
  const [header, setHeader] = useState("Semua");
  const [visibility, setVisibility] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchOrder();
  }, []);

  function fetchOrder() {
    console.log('masuk fetch');
    axios({
      method: "GET",
      url: "https://api.lintassagaraserver.com/order",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((err) => {
        if (err.response.data.message === "Invalid token") {
          logOut();
          navigate("/login");
        }
        console.log(err);
      });
  }

  function changeStatus(value) {
    setStatus(value);

    if (value === "all") {
      setHeader("Semua");
    } else if (value === "Ongoing") {
      setHeader("Sedang Dikirim");
    } else if (value === "Finished") {
      setHeader("Selesai");
    }
  }

  function clickDetail(value) {
    navigate("/admin/order/" + value.id);
  }

  function clickNew() {
    setVisibility(true);
  }

  function handleClose() {
    setVisibility(false);
  }

  function axiosAdd(obj) {
    console.log(obj);
    handleClose();
    axios({
      method: "POST",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
      url: "https://api.lintassagaraserver.com/order",
      data: {
        vendor: obj.vendor,
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
        fetchOrder();
      })
      .catch((err) => {
        console.log(err);
        console.log(err);
      });
  }

  return (
    <div className="min-h-screen">
      <div className="bg-sky-300 py-2">
        <button
          className="bg-slate-200 mx-2 rounded-full px-4"
          onClick={() => changeStatus("all")}
        >
          Semua
        </button>
        <button
          className="bg-slate-200 mx-2 rounded-full px-4"
          onClick={() => changeStatus("Ongoing")}
        >
          Sedang Dikirim
        </button>
        <button
          className="bg-slate-200 mx-2 rounded-full px-4"
          onClick={() => changeStatus("Finished")}
        >
          Selesai
        </button>
        <button
          className="bg-slate-200 mx-2 rounded-full px-4"
          onClick={() => clickNew()}
        >
          Order Baru
        </button>
      </div>
      <div className="my-5">
        <h1 className="text-center">{header}</h1>
      </div>

      {data.length ? (
        <>
          {" "}
          <div className="flex justify-center my-5">
            <table className="table-fixed border">
              <thead>
                <tr>
                  <th className="border px-5">No</th>
                  <th className="border px-5">Resi</th>
                  <th className="border px-5">Pengirim</th>
                  <th className="border px-5">Penerima</th>
                  <th className="border px-5">Tujuan</th>
                  <th className="border px-5">Status</th>
                  <th className="border px-5">Opsi</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {data.map((e, i) => {
                  if (e.status === status || status === "all") {
                    return (
                      <tr>
                        <td
                          className={`px-5 border ${
                            i % 2 == 0 ? "bg-slate-200" : null
                          }`}
                        >
                          {i + 1}
                        </td>
                        <td
                          className={`px-5 border ${
                            i % 2 == 0 ? "bg-slate-200" : null
                          }`}
                        >
                          {e.resi}
                        </td>
                        <td
                          className={`px-5 border ${
                            i % 2 == 0 ? "bg-slate-200" : null
                          }`}
                        >
                          {e.sender}
                        </td>
                        <td
                          className={`px-5 border ${
                            i % 2 == 0 ? "bg-slate-200" : null
                          }`}
                        >
                          {e.recipient}
                        </td>
                        <td
                          className={`px-5 border ${
                            i % 2 == 0 ? "bg-slate-200" : null
                          }`}
                        >
                          {e.recipientCountry}
                        </td>
                        <td
                          className={`px-5 border ${
                            i % 2 == 0 ? "bg-slate-200" : null
                          }`}
                        >
                          {e.status}
                        </td>
                        <td
                          className={`px-5 py-2 border ${
                            i % 2 == 0 ? "bg-slate-200" : null
                          }`}
                        >
                          <button
                            className="bg-sky-200 px-5 rounded-full"
                            onClick={() => clickDetail(e)}
                          >
                            Detail
                          </button>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>{" "}
        </>
      ) : (
        <div className="flex justify-center content-center my-10">
          Belum ada order
        </div>
      )}
      <FormAddOrder
        visibility={visibility}
        handleClose={handleClose}
        data={data}
        axiosAdd={axiosAdd}
      />
    </div>
  );
};

export default AdminOrder;
