import { useRef, useState } from "react";
import abi from "../../assets/Abi.json";
import contractAddress from "../../assets/contractAddress.json";

import { Web3 } from "web3";

const Mint = () => {
  const web3 = new Web3(window.ethereum);
  const ref = useRef(null);

  const contract = new web3.eth.Contract(abi, contractAddress.contractAddress);

  const mint = async () => {
    let uri = ref.current?.value;

    await contract.methods
      .mintNFT(uri)
      .send({ from: localStorage.getItem("walletAddress") });
  };

  return (
    <div className="my-5 flex gap-2">
      <input type="text" className="border-2 p-2 w-[300px]" ref={ref} />
      <button
        className="border-2 max-w-fit rounded-lg p-1 bg-gray-100"
        onClick={() => {
          mint();
        }}
      >
        Mint Nft
      </button>
    </div>
  );
};

export default Mint;
