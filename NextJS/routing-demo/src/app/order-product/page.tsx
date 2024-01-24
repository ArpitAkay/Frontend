"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OrderProduct = () => {
  const router = useRouter();

  const handleClick = () => {
    alert("Placing order");
    router.push("/");
    // router.replace("/");
    // router.back();
    // router.forward();
  };
  return (
    <div>
      <h1>Order product</h1>
      <button onClick={handleClick}>Place order</button>
    </div>
  );
};

export default OrderProduct;
