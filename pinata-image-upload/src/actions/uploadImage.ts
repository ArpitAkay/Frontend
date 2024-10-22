"use server";

import pinataSDK from "@pinata/sdk";
import axios from "axios";

// const pinata = new pinataSDK('9b72e5472dede26293a8', 'e095372bd387f68e553dab4fd5aade15c2f32be9a54ec46eeeb9da6620f69e99');

const testAuthentication = async () => {
  const resp = await axios.get(
    "https://api.pinata.cloud/data/testAuthentication",
    {
      headers: {
        pinata_api_key: "990e44bf0e8baf63b575",
        pinata_secret_api_key:
          "d21c6db919757c204189dd56842c8dc126d0e14c8d549f76dbecf23984d4c52f",
      },
    }
  );

  console.log("Test Authentication Response: ", resp.data);
};

testAuthentication();

const uploadImage = async (formData: FormData) => {
  const pinataMetadata = {
    name: "Pinnie.json",
    keyvalues: {
      customKey: "customValue",
    },
  };

  const pinataOptions = {
    cidVersion: 1,
  };

  formData.set("pinataMetadata", JSON.stringify(pinataMetadata));
  formData.set("pinataOptions", JSON.stringify(pinataOptions));

  const resFile = await axios({
    method: "POST",
    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
    data: formData,
    headers: {
      pinata_api_key: "990e44bf0e8baf63b575",
      pinata_secret_api_key:
        "d21c6db919757c204189dd56842c8dc126d0e14c8d549f76dbecf23984d4c52f",
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(resFile.data);
};

export default uploadImage;
