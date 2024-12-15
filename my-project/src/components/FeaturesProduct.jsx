import { useState, useEffect } from "react";
import { data } from "../data.js";
import Lightbox from "./Lightbox.jsx";

// eslint-disable-next-line react/prop-types
const FeaturesProduct = ({ setAddCart, setcountPanier, deletePanier, setdeletePanier }) => {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);
  const [slideIndex, setSliderIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  useEffect(() => {
    if (deletePanier) {
      setAmount(0);
    }
  }, [deletePanier]);

  const nextSlide = () => {
    const newIndex = ((slideIndex + 1) % products.length) % products.length;
    setSliderIndex(newIndex);
    setValue(newIndex);
  };

  const previousSlide = () => {
    const newIndex = (slideIndex - 1 + products.length) % products.length;
    setSliderIndex(newIndex);
    setValue(newIndex);
  };
  const btnshowLightbox = () => {
    setShowLightbox(true);
  };
  return (
    <>
      {showLightbox && (
        <Lightbox
          products={products}
          value={value}
          slideIndex={slideIndex}
          nextSlide={nextSlide}
          previousSlide={previousSlide}
          setShowLightbox={setShowLightbox}
        />
      )}

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:mt-10 lg:place-items-center">
        <article>
          <div onClick={btnshowLightbox} className="relative">
            <img src={products[value].mainImage} alt="main image" className="w-full lg:rounded-2xl" />
          </div>

          <ul className="lg:hidden">
            <li>
              <button
                onClick={previousSlide}
                className="bg-white rounded-full p-5 shadow absolute left-4 top-1/2 -translate-y-1/2"
              >
                <img src="./images/icon-previous.svg" alt="arrow previous" />
              </button>
            </li>
            <li>
              <button
                onClick={nextSlide}
                className="bg-white rounded-full p-5 shadow absolute right-4 top-1/2 -translate-y-1/2"
              >
                <img src="./images/icon-next.svg" alt="arrow next" />
              </button>
            </li>
          </ul>

          <ul className="hidden lg:flex items-center md:gap-6 gap-3  flex-wrap mt-5 justify-center">
            {products.map((items, index) => (
              <li
                key={items.id}
                onClick={() => setValue(index)}
                className={`${
                  index === value && "border-2 border-orange-400 opacity-80"
                }border-2 rounded-2xl overflow-hidden cursor-pointer`}
              >
                <img src={items.thumbnail} alt="img thumnails" className="w-full  lg:w-24 xl:w-28" />
              </li>
            ))}
          </ul>
        </article>

        <article className="px-8 pb-10">
          <h2 className="bg-slate-100 py-1 px2 text-orange-400 mb-10 uppercase tracking-wide text-sm font-bold inline-block rounded shadow">
            Sneakers company
          </h2>
          <h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">Fall limited Edition Sneakers</h1>
          <p className="text-slate-600 mb-10 leading-relaxed">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
            they’ll withstand everything the weather can offer.
          </p>
          <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
            <ul className="flex items-center gap-5">
              <li className="text-slate-900 font-bold text-2xl">$125.00</li>
              <li className="bg-orange-200 py-1 px2 text-orange-400 tracking-wide text-sm font-bold inline-block rounded shadow">
                50%
              </li>
            </ul>
            <p className="text-slate-600 text-sm">
              <s>$250.00</s>
            </p>
          </div>
          <div className="mt-10 lg:flex items-center justify-between gap-2">
            <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow lg:flex-1">
              <li className="cursor-pointer">
                <img
                  src="./images/icon-minus.svg"
                  alt="-"
                  onClick={() => {
                    setAmount((prev) => prev - 1);
                    setcountPanier((prev) => prev - 1);
                  }}
                />
              </li>
              <li>
                <span>{amount >= 0 ? amount : 0}</span>
              </li>
              <li className="cursor-pointer">
                <img
                  src="./images/icon-plus.svg"
                  alt="+"
                  onClick={() => {
                    setAmount((prev) => prev + 1);
                    setcountPanier((prev) => prev + 1);
                  }}
                />
              </li>
            </ul>
            <div className="text-center lg:flex-1">
              <button
                className="flex items-center gap-4 bg-orange-500 py-2 px-4 justify-center lg:mt-0text-white
               rounded-lg shadow font-bold mt-5 w-full hover:bg-orange-600 transition-all duration-200"
                onClick={() => {
                  amount > 0 ? setAddCart(true) : setAddCart(false);
                  setdeletePanier(false);
                }}
              >
                <img src="./images/icon-cart.svg" alt="icon-cart" className="w-8" />
                Add to cart
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default FeaturesProduct;
