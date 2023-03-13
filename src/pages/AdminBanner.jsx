import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import FormAddHomeimage from "../components/FormAddHomeImage";
import FormEditHomeimage from "../components/FormEditHomeimage";
import FormAddAboutimage from "../components/FormAddAboutimage";
import FormEditAboutImage from "../components/FormEditAboutImage";

const AdminBanner = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [value1, setValue1] = useState({});
  const [value2, setValue2] = useState({});
  const [editVisibility, setEditVisibility] = useState(false);
  const [editAboutVisibility, setEditAboutVisibility] = useState(false);
  const [addVisibility, setAddVisibility] = useState(false);
  const [addAboutVisibility, setAddAboutVisibility] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios({
      method: "GET",
      url: "http://api.lintassagaraserver.com/homeimage",
    })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios({
      method: "GET",
      url: "http://api.lintassagaraserver.com/aboutimage",
    })
      .then((response) => {
        console.log(response.data);
        setData2(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function showHomeEdit(id) {
    setEditVisibility(true);
    setValue1(data[id]);
    console.log("test");
  }
  function showAdd() {
    setAddVisibility(true);
  }

  function showAddAbout() {
    setAddAboutVisibility(true);
  }

  function showEditAbout(id) {
    setEditAboutVisibility(true)
    setValue2(data2[id]);
    console.log("test");
  }

  function submitEdit(obj) {
    const { url, id } = obj;
    axios({
      method: "PATCH",
      url: `http://api.lintassagaraserver.com/homeimage/${id}`,
      data: {
        url,
      },
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        fetchData();
        handleClose();
      })
      .catch((err) => {
        fetchData();
        handleClose();
      });
  }

  function submitAboutEdit(obj) {
    const { url, id } = obj;
    axios({
      method: "PATCH",
      url: `http://api.lintassagaraserver.com/aboutimage/${id}`,
      data: {
        url,
      },
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        fetchData();
        handleAboutEditClose();
      })
      .catch((err) => {
        fetchData();
        handleAboutEditClose();
      });
  }

  function submitAdd(url) {
    axios({
      method: "POST",
      url: `http://api.lintassagaraserver.com/homeimage/`,
      data: {
        url,
      },
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        fetchData();
        handleAddClose();
      })
      .catch((err) => {
        fetchData();
        handleAddClose();
      });
  }

  function submitAddAbout(url) {
    axios({
      method: "POST",
      url: `http://api.lintassagaraserver.com/aboutimage/`,
      data: {
        url,
      },
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        fetchData();
        handleAddAboutClose();
      })
      .catch((err) => {
        fetchData();
        handleAddAboutClose();
      });
  }

  function handleClose() {
    setEditVisibility(false);
  }

  function handleAboutEditClose() {
    setEditAboutVisibility(false);
  }

  function handleAddAboutClose() {
    setAddAboutVisibility(false);
  }

  function handleAddClose() {
    setAddVisibility(false);
  }

  return (
    <div className="min-h-screen">
      <div>
        <div className="text-center text-2xl mt-10 font-bold">
          Gambar Slide Beranda
        </div>
        <div className="flex justify-center mt-2">
          <button
            className="border-2 px-3 rounded-full"
            onClick={() => showAdd()}
          >
            Tambah Gambar Slide
          </button>
        </div>
      </div>
      <div className="lg:flex justify-center lg:gap-3 lg:mt-5">
        {data.map((e, i) => {
          return (
            <div className="lg:w-60 w-[90vw] mx-auto lg:mx-0">
              <img
                src={e.url}
                alt=""
                className="object-cover lg:w-60 lg:h-60 w-[80vw] h-[80vw]"
              />
              <button
                className="mx-auto block px-3 border-2 py-1 mt-1 rounded-full"
                onClick={() => showHomeEdit(i)}
              >
                Ganti
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <div className="text-center text-2xl mt-10 font-bold">
          Gambar Slide Tentang Kami
        </div>
      </div>
      <div className="lg:flex justify-center lg:gap-3 lg:mt-5 lg:flex-wrap mb-5">
        {data2.length
          ? data2.map((e, i) => {
              return (
                <div className="lg:w-60 w-[90vw] mx-auto lg:mx-0">
                  <img
                    src={e.url}
                    alt=""
                    className="object-cover lg:w-60 lg:h-60 w-[80vw] h-[80vw]"
                  />
                  <p className="text-center my-5">{i + 1}</p>
                  <button
                    className="mx-auto block px-3 border-2 py-1 mt-1 rounded-full"
                    onClick={() => showEditAbout(i)}
                  >
                    Ganti
                  </button>
                </div>
              );
            })
          : "Belum ada gambar"}
      </div>
      <FormEditHomeimage
        editVisibility={editVisibility}
        value1={value1}
        handleClose={handleClose}
        submitEdit={submitEdit}
      />
      <FormAddHomeimage
        addVisibility={addVisibility}
        handleAddClose={handleAddClose}
        submitAdd={submitAdd}
      />
      <FormAddAboutimage
      addAboutVisibility={addAboutVisibility}
      handleAddAboutClose={handleAddAboutClose}
      submitAddAbout={submitAddAbout}
      />
      <FormEditAboutImage
      handleAboutEditClose={handleAboutEditClose}
      submitAboutEdit={submitAboutEdit}
      editAboutVisibility={editAboutVisibility}
      value2={value2}
      />

    </div>
  );
};

export default AdminBanner;
