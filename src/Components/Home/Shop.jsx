import { Heart } from "@phosphor-icons/react";
import productImage from "../../assets/productImage.png";

const Shop = () => {
  const merchs = [
    {
      image: productImage,
      name: "A Cool Merch of E-club",
      price: "৳100",
    },

    {
      image: productImage,
      name: "A Cool Merch of E-club",
      price: "৳100",
    },

    {
      image: productImage,
      name: "A Cool Merch of E-club",
      price: "৳100",
    },

    {
      image: productImage,
      name: "A Cool Merch of E-club",
      price: "৳100",
    },

    {
      image: productImage,
      name: "A Cool Merch of E-club",
      price: "৳100",
    },

    {
      image: productImage,
      name: "A Cool Merch of E-club",
      price: "৳100",
    },

    {
      image: productImage,
      name: "A Cool Merch of E-club",
      price: "৳100",
    },

    {
      image: productImage,
      name: "A Cool Merch of E-club",
      price: "৳100",
    },

    {
      image: productImage,
      name: "A Cool Merch of E-club",
      price: "৳100",
    },

    {
      image: productImage,
      name: "A Cool Merch of E-club",
      price: "৳100",
    },
  ];

  return (
    <div className="py-12">
      <h1 className="text-[#056049] font-bold text-center text-2xl lg:text-5xl mb-4">
        E-Club’s E-Shop
      </h1>

      <p className="text-[#475467] text-center font-medium mb-16">
        Show your E-Club pride with exclusive merchandise designed for
        entrepreneurs like you.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-11/12 lg:w-9/12 mx-auto">
        {merchs.map((merch, index) => (
          <div key={index} className="rounded-2xl  border border-gray-300">
            <div>
              <img className="w-full rounded-t-2xl" src={merch.image} alt="" />
            </div>
            <div className="p-2">
              <p className="text-[#101828] font-semibold mb-2">{merch.name}</p>
              <p className="text-[#101828] font-extrabold text-lg mb-4">
                {merch.price}
              </p>
              <div className="flex items-center justify-between">
                <button className="text-white px-16 py-3 font-semibold bg-[#056049] rounded-xl">
                  Purchase
                </button>

                <div className="p-2 border border-[#056049] rounded-lg">
                  <Heart className="text-[#056049]" size={24} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
