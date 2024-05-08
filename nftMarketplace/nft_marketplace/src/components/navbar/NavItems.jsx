import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Web3 } from "web3";

const NavItems = () => {
  const navigate = useNavigate();
  const [connectWallet, setConnectWallet] = useState("");

  const navLinks = [
    { name: "Market Place", link: "/marketplace" },
    { name: "Mint", link: "/mint" },

    { name: "My Nft", link: "/my-nft" },
    { name: "Login", link: "/auth" },
  ];

  const handleWalletConnect = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const accounts = await web3.eth.getAccounts();

      setConnectWallet(accounts[0]);
      localStorage.setItem("walletAddress", accounts[0]);
    } else {
      alert("please install metamask wallet");
    }
  };

  return (
    <div>
      <div className="flex items-center  gap-5 md:gap-0">
        {navLinks.map((item) => (
          <span
            key={item.name}
            className={`lg:ml-6 ml-3 text-2xl md:text-sm xl:text-lg cursor-pointer font-bold md:font-normal hover:text-[var(--theme-color-green)]  text-white md:text-black `}
            onClick={() => {
              navigate(item.link);
            }}
          >
            {item.name}
          </span>
        ))}
        <span
          className="border rounded-lg p-2 ml-4 hover:bg-gray-100 cursor-pointer"
          onClick={handleWalletConnect}
        >
          {connectWallet == ""
            ? "Connect Wallet"
            : connectWallet.slice(0, 10) + "..."}
        </span>
      </div>
    </div>
  );
};

export default NavItems;
