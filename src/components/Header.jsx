import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import EmptyCart from "./EmptyCart";

// eslint-disable-next-line react/prop-types
const Header = ({ notifPanier, addCart, countPanier, setAddCart, setcountPanier, deletePanier, setdeletePanier }) => {
  const [menuIsopen, setmenuIsopen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <header className="flex relative items-center justify-between p-8 border-b max-w-7xl mx-auto border-slate-400">
        <div className="flex items-center justify-start gap-4">
          <ul className="flex items-center justify-start gap-4">
            <li onClick={() => setmenuIsopen(true)} className="lg:hidden">
              <img src="./images/icon-menu.svg" alt="menu" className="cursor-pointer" />
            </li>
            {menuIsopen && (
              <li onClick={() => setmenuIsopen(false)} className=" absolute top-4 left-4 z-50 cursor-pointer">
                <img src="./images/icon-close.svg" alt="close" />
              </li>
            )}
            <Link to={"/"}>
              <li>
                <img src="/images/logo.svg" alt="logo" />
              </li>
            </Link>
          </ul>
          {menuIsopen && (
            <nav className="fixed transition-all duration-3000 ease-in-out top-0 left-0 w-56 h-screen z-40 bg-white mt-10 ">
              <ul className="p-5">
                <li className="mb-2 font-bold cursor-pointer">Collections</li>
                <li className="mb-2 font-bold cursor-pointer">Men</li>
                <li className="mb-2 font-bold cursor-pointer">Women</li>
                <li className="mb-2 font-bold cursor-pointer">About</li>
                <li className="mb-2 font-bold cursor-pointer">Contact</li>
              </ul>
            </nav>
          )}

          <nav className="hidden lg:flex">
            <ul className="flex items-center justify-start gap-4">
              <li className="text-slate-500 cursor-pointer hover:border-b-4 border-orange-500">Collections</li>
              <li className="text-slate-500 cursor-pointer hover:border-b-4 border-orange-500">Men</li>
              <li className="text-slate-500 cursor-pointer hover:border-b-4 border-orange-500">Women</li>
              <li className="text-slate-500 cursor-pointer hover:border-b-4 border-orange-500">About</li>
              <li className="text-slate-500 cursor-pointer hover:border-b-4 border-orange-500">Contact</li>
            </ul>
          </nav>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li onClick={() => setShowCart(!showCart)}>
              <button>
                {addCart && notifPanier && countPanier > 0 && (
                  <span className="absolute right-26 top-7 rounded-full py-0.5 px-1.5 text-xs text-white bg-orange-500">
                    {countPanier}
                  </span>
                )}
                <img src="./images/icon-cart.svg" alt="icon-cart" className="w-8 text-2xl text-slate-600" />
              </button>
            </li>

            {showCart && (
              <li>
                {deletePanier ? (
                  <EmptyCart />
                ) : addCart ? (
                  <Cart
                    setcountPanier={setcountPanier}
                    countPanier={countPanier}
                    setdeletePanier={setdeletePanier}
                    setAddCart={setAddCart}
                  />
                ) : (
                  <EmptyCart />
                )}
              </li>
            )}

            <li>
              <img src="./images/image-avatar.png" alt="avatar" className="w-12" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
