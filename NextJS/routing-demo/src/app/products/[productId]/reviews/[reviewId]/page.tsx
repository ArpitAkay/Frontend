"use client";

import { notFound } from "next/navigation";
import React from "react";

const getRandomNo = (count: number): number => {
  return Math.floor(Math.random() * count);
};

const page = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const no = getRandomNo(2);
  if (no == 1) {
    throw new Error("Runtime");
  } else if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      Review : {params.reviewId} for product id : {params.productId}
    </div>
  );
};

export default page;
