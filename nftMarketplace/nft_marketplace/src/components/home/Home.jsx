import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col gap-5 items-center m-auto">
        <p className="font-bold text-[3rem]">Welcome to NFT Marketplace</p>
        <div className="flex gap-5">
          <button
            onClick={() => navigate("/marketplace")}
            className="p-2 border rounded-lg"
          >
            browse NFTs
          </button>
          <button
            onClick={() => navigate("/mint")}
            className="p-2 border rounded-lg"
          >
            Mint Nft
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
