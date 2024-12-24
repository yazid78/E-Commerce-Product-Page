import { useState } from "react";
import FeaturesProduct from "./FeaturesProduct";
import Header from "./Header";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // eslint-disable-next-line no-undef
  const [notifPanier, setnotifPanier] = useState(false);
  // eslint-disable-next-line no-undef
  const [addCart, setAddCart] = useState([]);
  // eslint-disable-next-line no-undef
  const [countPanier, setcountPanier] = useState(0);
  // eslint-disable-next-line no-undef
  const [deletePanier, setdeletePanier] = useState(false);

  return (
    <Router>
      <div>
        <Header
          notifPanier={notifPanier}
          setnotifPanier={setnotifPanier}
          addCart={addCart}
          setAddCart={setAddCart}
          countPanier={countPanier}
          setcountPanier={setcountPanier}
          deletePanier={deletePanier}
          setdeletePanier={setdeletePanier}
        />
        <Routes>
          <Route
            path="/"
            element={
              <FeaturesProduct
                notifPanier={notifPanier}
                setnotifPanier={setnotifPanier}
                setAddCart={setAddCart}
                setcountPanier={setcountPanier}
                deletePanier={deletePanier}
                setdeletePanier={setdeletePanier}
              />
            }
          />
          <Route path="/checkout" element={<Checkout countPanier={countPanier} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
