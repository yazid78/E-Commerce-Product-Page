import { useState } from "react";
import Cart from "./Cart";
import EmptyCart from "./EmptyCart";
import FeaturesProduct from "./FeaturesProduct";

const Header = () => {
  const [menuIsopen, setmenuIsopen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [AddCart, setAddCart] = useState(false);
  const [countPanier, setcountPanier] = useState(0);
  const [deletePanier, setdeletePanier] = useState(false);
  const [notifPanier, setnotifPanier] = useState(false);

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
            <li>
              <img src="./images/logo.svg" alt="logo" />
            </li>
          </ul>
          {menuIsopen && (
            <nav className="fixed transition-all duration-3000 ease-in-out top-0 left-0 w-56 h-screen z-40 bg-white mt-10 ">
              <ul className="p-5">
                <li className="mb-2 cursor-pointer">Collections</li>
                <li className="mb-2 cursor-pointer">Men</li>
                <li className="mb-2 cursor-pointer">Women</li>
                <li className="mb-2 cursor-pointer">About</li>
                <li className="mb-2 cursor-pointer">Contact</li>
              </ul>
            </nav>
          )}

          <nav className="hidden lg:flex">
            <ul className="flex items-center justify-start gap-4">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li onClick={() => setShowCart(!showCart)}>
              <button>
                {AddCart && notifPanier && countPanier > 0 && (
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
                ) : AddCart ? (
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
      <FeaturesProduct
        notifPanier={notifPanier}
        setnotifPanier={setnotifPanier}
        setAddCart={setAddCart}
        setcountPanier={setcountPanier}
        deletePanier={deletePanier}
        setdeletePanier={setdeletePanier}
      />
    </>
  );
};

export default Header;
