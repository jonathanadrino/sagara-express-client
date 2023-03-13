import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import FormEditHarga from "../components/FormEditHarga";
import FormAddHarga from "../components/FormAddHarga";

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

const AdminPrice = () => {
  const [country, setCountry] = useState({});
  const [editVisibility, setEditVisibility] = useState(false);
  const [addVisibility, setAddVisibility] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountry();
  }, []);

  function fetchCountry() {
    axios({
      url: "http://api.lintassagaraserver.com/country",
      method: "GET",
    })
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function showEditModal(value) {
    setCountry(value);
    setEditVisibility(true);
  }

  function handleEditClose() {
    setCountry({});
    setEditVisibility(false);
  }

  function showAddModal() {
    console.log(true);
    setAddVisibility(true);
  }

  function handleAddClose() {
    setAddVisibility(false);
  }

  function updatePrice(obj) {
    const { name, price1, price2, price3, price4, price5,id } = obj;
    axios({
      method: "PUT",
      url: `http://api.lintassagaraserver.com/country/${id}`,
      data: {
        name,
        price1,
        price2,
        price3,
        price4,
        price5,
      },
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then(() => {
        fetchCountry();
        handleEditClose();
      })
      .catch((err) => {
        handleEditClose();
        console.log(err);
      });
    console.log(obj);
  }

  function submitPrice(obj) {
    const { name, price1, price2, price3, price4, price5 } = obj;
    console.log(obj);
    axios({
      url: "http://api.lintassagaraserver.com/country",
      method: "POST",
      data: {
        name,
        price1,
        price2,
        price3,
        price4,
        price5,
      },
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        console.log(response.data);
        fetchCountry();
        handleAddClose();
      })
      .catch((err) => {
        console.log(err);
        fetchCountry();
        handleAddClose();
      });
  }

  function deleteCountry(id) {
    axios({
      method: "DELETE",
      url: `http://api.lintassagaraserver.com/country/${id}`,
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        console.log(response);
        fetchCountry();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="min-h-screen">
      <div className="my-5">
        <h1 className="text-center">Harga Per Negara</h1>
      </div>
      <div className="flex justify-center my-5">
        <button
          className="border-2 px-3 py-2 rounded-full bg-green-300 hover:bg-green-500"
          onClick={() => showAddModal()}
        >
          Tambah Negara
        </button>
      </div>
      <div className="mx-auto">
        {}
        <table className="border mx-auto">
          <thead>
            <tr>
              <th className="border px-5">No</th>
              <th className="border px-5">Negara</th>
              <th className="border px-5">1 Kg</th>
              <th className="border px-5">2 Kg</th>
              <th className="border px-5">3 Kg</th>
              <th className="border px-5">4 Kg</th>
              <th className="border px-5">5 Kg</th>
              <th className="border px-5">Opsi</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {countries.map((e, i) => {
              return (
                <tr key={e.id}>
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
                    {e.name}
                  </td>
                  <td
                    className={`px-5 border ${
                      i % 2 == 0 ? "bg-slate-200" : null
                    }`}
                  >
                    {formatter.format(e.price1)}
                  </td>
                  <td
                    className={`px-5 border ${
                      i % 2 == 0 ? "bg-slate-200" : null
                    }`}
                  >
                    {formatter.format(e.price2)}
                  </td>
                  <td
                    className={`px-5 border ${
                      i % 2 == 0 ? "bg-slate-200" : null
                    }`}
                  >
                    {formatter.format(e.price3)}
                  </td>
                  <td
                    className={`px-5 border ${
                      i % 2 == 0 ? "bg-slate-200" : null
                    }`}
                  >
                    {formatter.format(e.price4)}
                  </td>
                  <td
                    className={`px-5 border ${
                      i % 2 == 0 ? "bg-slate-200" : null
                    }`}
                  >
                    {formatter.format(e.price5)}
                  </td>
                  <td
                    className={` flex gap-3 px-5 py-2 border ${
                      i % 2 == 0 ? "bg-slate-200" : null
                    }`}
                  >
                    <button
                      className="bg-sky-200 px-5 rounded-full"
                      onClick={() => showEditModal(e)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-200 px-5 rounded-full"
                      onClick={() => deleteCountry(e.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        {editVisibility ? (
          <FormEditHarga
            obj={country}
            editVisibility={editVisibility}
            handleEditClose={handleEditClose}
            updatePrice={updatePrice}
          />
        ) : null}
        {addVisibility ? (
          <FormAddHarga
            obj={country}
            addVisibility={addVisibility}
            handleAddClose={handleAddClose}
            submitPrice={submitPrice}
          />
        ) : null}
      </div>
    </div>
  );
};

export default AdminPrice;
