import React, { useState } from "react";
import { useNewVideoGameMutation } from "../app/videogamesApi";
import { Navigate, useNavigate } from "react-router-dom";

export default function Form() {
  const [newData] = useNewVideoGameMutation();
  const navigate = useNavigate();
  const [form, formValue] = useState({
    name: "",
    description: "",
    price: 0,
    inStock: true,
    isPopular: true,
    imgUrl: "demo",
  });
  const changeData = (e) => {
    formValue({ ...form, [e.target.id]: e.target.value });
  };
  const newGame = (e) => {
    e.preventDefault();
    newData({ ...form, price: Number(form.price) });
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={newGame}>
        <input type="text" id="name" placeholder="name" onChange={changeData} />
        <input
          type="text"
          id="description"
          placeholder="description"
          onChange={changeData}
        />
        <input
          type="number"
          id="price"
          placeholder="price"
          onChange={changeData}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
