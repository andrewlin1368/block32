import React from "react";
import { useParams } from "react-router-dom";
import {
  useDeleteVideoGameMutation,
  useGetVideoGameQuery,
} from "../app/videogamesApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUpdateVideoGameMutation } from "../app/videogamesApi";

export default function SingleGame() {
  const [price, setPrice] = useState(0);
  const [updateVideo] = useUpdateVideoGameMutation();
  const { id } = useParams();
  const { data, isLoading } = useGetVideoGameQuery(id);
  const [remove] = useDeleteVideoGameMutation();
  const navigate = useNavigate();
  const changePrice = (e) => {
    e.preventDefault();
    updateVideo({
      body: {
        name: data.name,
        description: data.description,
        price: price,
        inStock: data.inStock,
        isPopular: data.isPopular,
        imgUrl: data.imgUrl,
      },
      id: id,
    });
  };
  const changeP = (e) => {
    setPrice(Number(e.target.value));
  };
  return (
    <div>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {data.name} <br /> {data.description} <br />{" "}
          <img src={data.imgUrl} alt={data.name} /> <br />${data.price} <br />
          In Stock:
          {(data.inStock && <> YES</>) || <>NO</>} <br />
          <button onClick={() => navigate("/")}>Return</button>
          <form onSubmit={changePrice}>
            <input
              type="number"
              id="price"
              placeholder={data.price}
              onChange={changeP}
            />
            <button>Change Price</button>
          </form>
          <button
            onClick={() => {
              remove(id);
              navigate("/");
            }}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}
