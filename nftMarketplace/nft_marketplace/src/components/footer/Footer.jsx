const Footer = () => {
  return (
    <div className="px-10 bg-gray-200 z-10 hidden md:block">
      <div>
        <p className="font-bold text-3xl py-4"> NFT Marketplace</p>
      </div>
      <div className="flex justify-between">
        <div>
          <p>mint, buy, sell NFT</p>
        </div>
        <div className="flex flex-col justify-end">
          Email:
          <p>support@marketplace.com</p>
          <br />
          Follow us:
        </div>
      </div>
      <div className="text-center text-sm mt-5 text-white font-bold">
        Copyright© 2024 NFT marketplace. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
