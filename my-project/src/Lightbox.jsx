const Lightbox = ({ products, slideIndex, nextSlide, previousSlide, setSlideIndex, setShowLightbox }) => {
  return (
    <div className="hidden lg:flex fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 max-w-4xl w-full mx-auto">
        <button onClick={() => setShowLightbox(false)} className="absolute z-50 top-0 right-0 m-4">
          <img src="./images/icon-close.svg" className="w-8" alt="Close" />
        </button>

        <div className="relative flex justify-center">
          <img src={products[slideIndex].mainImage} alt="Main view" className="w-3/4 rounded-2xl" />

          <button
            onClick={previousSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-5 shadow"
          >
            <img src="./images/icon-previous.svg" alt="Previous" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-5 shadow"
          >
            <img src="./images/icon-next.svg" alt="Next" />
          </button>
        </div>

        <ul className="flex justify-center gap-3 mt-5">
          {products.map((item, index) => (
            <li
              key={item.id}
              onClick={() => setSlideIndex(index)}
              className={`cursor-pointer border-2 rounded-2xl overflow-hidden ${
                index === slideIndex ? "border-orange-400" : "border-transparent"
              }`}
            >
              <img src={item.thumbnail} alt="Thumbnail" className="w-20" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Lightbox;
