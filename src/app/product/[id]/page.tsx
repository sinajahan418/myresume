"use client";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [loding, setLoding] = useState(false);

  const getSingleProduct = async () => {
    setLoding(true);
    const res = await fetch(
      "http://localhost:5000/api/v1/products/:productId",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: params.id }),
      }
    );
    const data = await res.json();
    setSingleProduct(data);
    console.log(data.data.product);
    setLoding(false);
  };
  useEffect(() => {
    getSingleProduct();
  }, []);

  return <div></div>;
};

export default page;
