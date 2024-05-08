import { useEffect, useRef, useState } from "react";
import abi from "../../assets/Abi.json";
import contractAddress from "../../assets/contractAddress.json";

import { Web3 } from "web3";

const MyNft = () => {
  const [myTokenId, setMyTokenId] = useState([]);

  useEffect(() => {
    const fetchOwnedNFTs = async () => {
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(
        abi,
        contractAddress.contractAddress
      );
      const myAddress = localStorage.getItem("walletAddress");

      const currentTokenId = await contract.methods.tokenId().call();

      const ownedNftTokenIds = [];

      for (let i = 0; i < currentTokenId; i++) {
        let owner = await contract.methods.ownerOf(i).call();
        if (owner == myAddress) {
          ownedNftTokenIds.push(i);
        }
      }
      setMyTokenId(ownedNftTokenIds);
    };
    fetchOwnedNFTs();
  }, []);
  console.log(myTokenId);
  return (
    <div>
      <h2>My Owned NFTs</h2>
      <ul>
        {myTokenId.map((tokenId) => (
          <li key={tokenId}>Token ID: {tokenId}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyNft;
