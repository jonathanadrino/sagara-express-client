import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Login = ({ loggedIn }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  function clickLogin() {
    setError("");
    setShowLoading(true);
    axios({
      method: "POST",
      url: "http://api.lintassagaraserver.com/login",
      data: {
        username,
        password,
      },
    })
      .then((response) => {
        setShowLoading(false);
        console.log(response);
        localStorage.setItem("access_token", response.data.access_token);
        loggedIn();
        navigate("/admin/order");
      })
      .catch((err) => {
        setShowLoading(false);
        if (
          err.response.data.message === "Wrong username/password" ||
          err.response.data.message === "Empty username/password"
        ) {
          setError("Username/password salah");
        } else {
          setError("Server error");
        }
      });
  }
  return (
    <div className="min-h-screen">
      <Loading showLoading={showLoading} />
      <div className="mx-4 my-20">
        <h1 className="text-3xl font-bold text-slate-800">Login Admin</h1>
      </div>

      <div>
        <p className="text-center">Username</p>
        <input
          type="text"
          className="w-1/6  block mx-auto text-center my-5 py-2 border-2 rounded-full border-slate-400"
          onChange={(e) => setUsername(e.target.value)}
        />
        <p className="text-center">Password</p>
        <input
          type={`${showPassword ? "text" : "password"}`}
          className="w-1/6  block mx-auto text-center my-5 py-2 border-2 rounded-full border-slate-400"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="block mx-auto w-48 my-5 border-2  rounded-full border-slate-400 bg-sky-300 hover:bg-sky-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "sembunyikan password" : "tampilkan password"}
        </button>
        <button
          className="block mx-auto w-1/12 border-2 py-2 rounded-full border-slate-400 bg-green-300 hover:bg-green-500"
          onClick={() => clickLogin()}
        >
          Submit
        </button>
        <p className="text-center my-5 text-pink-500">{error}</p>
      </div>
    </div>
  );
};

export default Login;
