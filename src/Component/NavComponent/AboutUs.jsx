import React from "react";
import pic1 from "../../Assert/pic (5).jpg";
import pic2 from "../../Assert/pic (4).jpg";
import pic3 from "../../Assert/pic (3).jpg";
import pic4 from "../../Assert/pic (5).jpg";
import AboutCard from "../CommonComponent/AboutCard";

export default function AboutUs() {
  return (
    <>
      <div className="AboutContent">
        <AboutCard pic1={pic1} />
        <AboutCard pic1={pic2} />
        <AboutCard pic1={pic3} />
        <AboutCard pic1={pic4} />
        
      </div>
    </>
  );
}
