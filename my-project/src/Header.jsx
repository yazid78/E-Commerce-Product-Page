const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between p-8 border-b max-w-7xl mx-auto border-slate-400">
        <div className="flex items-center justify-start gap-4">
          <img src="./images/logo.svg" alt="logo" />
          <nav className="hidden">
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
            <li>
              <button>
                <img src="./images/icon-cart.svg" alt="icon-cart" className="w-8 text-2xl text-slate-600" />
              </button>
            </li>
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
