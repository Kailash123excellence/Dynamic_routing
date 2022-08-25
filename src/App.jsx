import React from "react";
import "./css/myStyle.css";
import Navbar from "./Component/Navbar";
import AboutUs from "./Component/NavComponent/AboutUs";
import ContactUs from "./Component/NavComponent/ContactUs";
import Message from "./Component/NavComponent/Message";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MessageBox from "./Component/CommonComponent/MessageBox";
export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/message" element={<Message />} />
          <Route path="/message/:id" element={<MessageBox />} />
        </Routes>
      </Router>
    </>
  );
}
