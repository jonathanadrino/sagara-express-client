import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Calculation from "./pages/Calculation";
import Contact from "./pages/Contact";
import Tracking from "./pages/Tracking";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AdminNavbar from "./components/AdminNavbar";
import AdminBanner from "./pages/AdminBanner";
import AdminOrder from "./pages/AdminOrder";
import OrderDetail from "./pages/OrderDetail";
import AdminPrice from "./pages/AdminPrice";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [authentication, setAuthentication] = useState(false);

  useEffect(() => {
    checkToken();
  }, [authentication]);

  function checkToken() {
    let token = localStorage.getItem("access_token");

    if (token) {
      console.log("ada");
      setAuthentication(true);
    }

    console.log(authentication);
  }

  function loggedIn() {
    console.log('kepanggil');
    setAuthentication(true)
  }

  function logOut() {
    setAuthentication(false)
    localStorage.removeItem('access_token')
  }

  return (
    <div>
      <Navbar />
      <AdminNavbar authentication={authentication} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/calculation" element={<Calculation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route
          path="/login"
          element={<Login loggedIn={loggedIn} />}
        />
        <Route path="/admin/order/" element={<AdminOrder logOut={logOut} />} />
        <Route path="/admin/order/:id" element={<OrderDetail />} />
        <Route path="/admin/harga" element={<AdminPrice />} />
        <Route path="/admin/banner" element={<AdminBanner />} />
      </Routes>
      <Footer logOut={logOut} authentication={authentication}/>
    </div>
  );
}

/* <style>
        {
          `
          * {
            border: 1px solid red
          }
          `
        }
      </style> */

export default App;
