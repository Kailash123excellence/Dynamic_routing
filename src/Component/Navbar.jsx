import React from "react";
import "../css/myStyle.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="container">
        <nav className="navbarBox fixed-top">
          <ul className="order">
            <li className="aboutList orderList ">
              <Link to="/" className="linkList">
                About Us
              </Link>
            </li>
            <li className="contactList orderList">
              <Link to="/contactUs" className="linkList">
                Contact Us
              </Link>
            </li>
            <li className="messageList orderList">
              <Link to="/message" className="linkList">
                Message
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
