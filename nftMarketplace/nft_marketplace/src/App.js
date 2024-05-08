import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Mint from "./components/mint/Mint";
import MyNft from "./components/my-nft/MyNft";
import MarketPlace from "./components/marketplace/Marketplace";
import Auth from "./components/auth/Auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/my-nft" element={<MyNft />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
