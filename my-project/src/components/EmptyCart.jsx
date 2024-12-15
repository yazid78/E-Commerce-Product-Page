const EmptyCart = () => {
  return (
    <article
      className="bg-white rounded-2xl shadow-2xl p-8 absolute w-80 right-8 left-8 top-32 lg:wh-96 lg:left-auto
         lg:top-20"
      style={{ zIndex: 1000 }}
    >
      <h2 className=" text-slate-400 font-bold flex justify-center p-10">Your cart is empty</h2>
    </article>
  );
};

export default EmptyCart;
