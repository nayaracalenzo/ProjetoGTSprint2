import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#d0d0d2] p-10 flex justify-between items-center">
      <h1 className="font-bold text-5xl text-pink-600">Header</h1>
      <nav>
        <ul className="flex gap-2">
          <li>
            <Link to={"/carrinho"}>
              <FaCartShopping />
            </Link>
          </li>
          <li>
            <FaBars />
          </li>
          <li>
            <Link to={"/cadastro"}>Cadastro</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
