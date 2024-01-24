import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    productId: string;
  };
};

//dynamic metadata
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Apple Iphone ${params.productId}`);
    }, 100);
  });

  console.log(title);

  const metadata = {
    // title: `Product ${params.productId}`,
    title: `Product ${title}`,
  };
  return metadata;
};

const page = ({ params }: Props) => {
  return <div>Details about product : {params.productId}</div>;
};

export default page;
