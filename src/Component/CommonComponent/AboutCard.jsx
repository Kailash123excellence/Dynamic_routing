import React from "react";

export default function AboutCard(props) {
  return (
    <div className="">
      <div className="d-flex background mt-2 p-3">
        <img
          src={props.pic1}
          width="250px"
          height="250px"
          className="p2"
          alt="..."
        />
        <div className="">
          <p className="card-text font text-light p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a
            necessitatibus vero, explicabo autem facilis atque odio at possimus
            eos, magni earum, porro quam? Mollitia aliquam illo debitis rem
            nobis, autem voluptatum! Nobis ducimus assumenda ad nam rerum
            inventore vitae exercitationem delectus similique harum, ratione
            ipsum pariatur vero nulla! Dignissimos.
          </p>
        </div>
      </div>
    </div>
  );
}
