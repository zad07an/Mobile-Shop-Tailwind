import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import NavbarIcons from "./NavbarIcons";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { navbarLinks } = useSelector((state) => state.navbar);

  return (
    <header className="w-full h-16 sticky top-0 shadow-md bg-white flex justify-center items-center z-[999]">
      <nav className=" w-11/12 grid grid-cols-3 place-items-center">
        <div className="w-full flex justify-start">
          <Link to="/" className="text-3xl font-bold text-purple-700">
            iStore
          </Link>
        </div>
        <ul className="flex gap-6">
          {navbarLinks?.map((link) => {
            return (
              <li key={link?.id}>
                <NavLink to={link?.path} className="text-gray-600 font-medium">
                  {link?.link}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="w-full flex justify-end gap-6">
          <NavbarIcons />
        </div>
      </nav>
    </header>
  );
}
