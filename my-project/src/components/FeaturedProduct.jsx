const FeaturedProduct = () => {
  return (
    <div className="flex mx-auto px-4 sm:px-8 lg:px-16 flex-wrap  lg:flex-nowrap">
      <div className="flex justify-center flex-wrap">
        <div className="w-full">
          <img
            className="w-full max-w-full sm:w-3/4 md:w-1/2 lg:w-2/3 h-auto m-auto"
            src="./images/image-product-1.jpg"
            alt="sneakers"
          />
        </div>

        <div className="flex gap-2 md:gap-3 lg:gap-8">
          <img
            src="./images/image-product-1-thumbnail.jpg"
            alt="Shoe Thumbnail"
            className="sm:h-16 sm:w-16 md:w-16 md:h-24 lg:w-28 lg:h-20 xl:w-32 xl:h-32 hidden lg:block bg-orange-100 rounded-lg shadow-lg object-cover"
          />
          <img
            src="./images/image-product-2-thumbnail.jpg"
            alt="Shoe Thumbnail"
            className="sm:h-16 md:w-16 md:h-24 lg:w-28 lg:h-20 xl:w-32 xl:h-32 hidden lg:block bg-orange-100 rounded-lg shadow-lg object-cover"
          />
          <img
            src="./images/image-product-3-thumbnail.jpg"
            alt="Shoe Thumbnail"
            className="sm:h-16 md:w-16 md:h-24 lg:w-28 lg:h-20 xl:w-32 xl:h-32 hidden lg:block bg-orange-100 rounded-lg shadow-lg object-cover"
          />
          <img
            src="./images/image-product-4-thumbnail.jpg"
            alt="Shoe Thumbnail"
            className="sm:h-16 md:w-16 md:h-24 lg:w-28 lg:h-20 xl:w-32 xl:h-32 hidden lg:block bg-orange-100 rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
      <div>
        <h2>SNEAKER COMPANY</h2>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole.
          they`ll withstand everything the weather can offer.
        </p>
        <div>
          <p> $125.00</p>
          <span>50%</span>
        </div>
        <p>%250.00</p>
        <div>
          <div>
            <button>-</button>
            <p>0</p>
            <button>+</button>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
