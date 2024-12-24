import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Cart = ({ countPanier, setcountPanier, setdeletePanier, setAddCart }) => {
  if (countPanier < 0) {
    countPanier = 0;
  }
  let navigate = useNavigate();
  const text = "Autumn Limited Edition Sneakers";
  return (
    <article
      className="bg-white delete rounded-2xl shadow-2xl p-8 absolute w-80 right-8 left-8 top-32 lg:wh-96 lg:left-auto
       lg:top-20"
      style={{ zIndex: 1000 }}
    >
      <h2 className="border-b border-slate-400 font-bold pb-2 mb-8">Cart</h2>
      <div className="flex items-center justify-between mb-4">
        <img src="./images/image-product-1-thumbnail.jpg" alt="thumnail img" className="w-14 rounded-lg" />

        <ul>
          <li className="text-slate-600 text-sm">
            {text.substring(0, 20)}
            {`...`}
          </li>

          <li className="text-slate-600 text-sm">
            $125.00 x {countPanier}
            <span className="font-bold text-slate-900"> ${125.0 * countPanier + ".00"}</span>
          </li>
        </ul>
        <button
          onClick={() => {
            setdeletePanier(true);
            setAddCart(false);
            setcountPanier(0);
          }}
        >
          <img src="./images/icon-delete.svg" alt="icon delete" />
        </button>
      </div>
      <button
        className="bg-orange-500 px-4 text-white
      font-bold rounded-lg shadow mt-5 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200"
        onClick={() => navigate("/checkout")}
      >
        Checkout
      </button>
    </article>
  );
};

export default Cart;
