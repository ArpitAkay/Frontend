import React from "react";
import { Metadata } from "next";
import Link from "next/link";

//static metadata
export const metadata: Metadata = {
  title: {
    absolute: "blog",
  },
};

const page = () => {
  return (
    <div>
      My blog
      <Link href={"/blog/first"}>first</Link>
    </div>
  );
};

export default page;
