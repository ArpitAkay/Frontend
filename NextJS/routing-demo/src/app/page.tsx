import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      Welcome home!
      <Link href="/blog">Blog</Link> {/* client side navigation */}
      <Link href="/products">Products</Link>
    </div>
  );
};

export default page;
