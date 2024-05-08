import { useNavigate } from "react-router-dom";
import NavItems from "./NavItems";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <div className="border-b border-grey-200">
          <div className="max-w-[1500px] m-auto">
            <div className="flex h-16 items-center justify-between px-5 2xl:px-0">
              <div className="ml-4 flex lg:ml-0 ">
                <button
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <p className="font-bold">NFT Marketplace</p>
                </button>
              </div>

              <div className="z-50 md:ml-8 md:self-strech">
                <div>
                  <NavItems />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
