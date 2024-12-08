import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="mx-auto px-4 sm:px-8 lg:px-16">
      {/* Conteneur principal */}
      <div className="my-8 flex justify-between items-center w-full relative">
        {/* Overlay gris */}
        {isDropdownOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={handleClose}></div>}

        {/* Dropdown menu */}
        <ul
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } fixed bg-white left-0 top-0 h-screen w-3/4 sm:w-1/2 lg:w-1/3 z-20 py-6`}
        >
          <img
            id="close"
            className="m-4 cursor-pointer"
            src="./images/icon-close.svg"
            alt="close dropdown"
            onClick={handleClose}
          />
          <li className="m-4 pt-10">
            <a href="#" className="hover:text-gray-500">
              Collection
            </a>
          </li>
          <li className="m-4">
            <a href="#" className="hover:text-gray-500 lg:text-lg">
              Women
            </a>
          </li>
          <li className="m-4">
            <a href="#" className="hover:text-gray-500 lg:text-lg">
              About
            </a>
          </li>
          <li className="m-4">
            <a href="#" className="hover:text-gray-500 lg:text-lg">
              Contact
            </a>
          </li>
        </ul>

        {/* Left section */}
        <div className="flex items-center gap-8">
          {/* Menu button */}
          <button id="btnMenu" className="flex items-center md:hidden" onClick={handleMenuToggle}>
            <img className="h-6 w-6" src="./images/icon-menu.svg" alt="menu" />
          </button>

          {/* Logo */}
          <div>
            <img className="h-5 max-h-10" src="./images/logo.svg" alt="Sneakers" />
          </div>

          {/* Desktop links */}
          <div className="hidden gap-4 md:flex lg:gap-8">
            <a href="#" className="hover:text-gray-500 lg:text-lg">
              Men
            </a>
            <a href="#" className="hover:text-gray-500 lg:text-lg">
              Women
            </a>
            <a href="#" className="hover:text-gray-500 lg:text-lg">
              About
            </a>
            <a href="#" className="hover:text-gray-500 lg:text-lg">
              Contact
            </a>
          </div>
        </div>

        {/* Right section */}
        <div className="flex gap-5 items-center">
          <img className="h-8 w-8" src="./images/icon-cart.svg" alt="panier" />
          <img className="h-10 rounded-full" src="./images/image-avatar.png" alt="avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
