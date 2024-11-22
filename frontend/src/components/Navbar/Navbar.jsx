import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);

  const user = null;

  return (
    <nav className="flex md:px-32 py-6 px-8 items-center justify-between text-xl">
      <Link to="/">
        <h1 className="text-3xl text-secondary font-semibold">
          Doc<span className=" text-primary">Appoint</span>
        </h1>
      </Link>

      <menu className="xl:flex gap-10 hidden">
        <Link
          to="/"
          className="hover:scale-110 transition-all duration-500 hover:text-primary"
        >
          <li>Home</li>
        </Link>
        <Link
          to="/doctor"
          className="hover:scale-110 transition-all duration-500 hover:text-primary"
        >
          <li>Doctor</li>
        </Link>
        <Link
          to="/survey"
          className="hover:scale-110 transition-all duration-500 hover:text-primary"
        >
          <li>Survey</li>
        </Link>
        <Link
          to="/about"
          className="hover:scale-110 transition-all duration-500 hover:text-primary"
        >
          <li>About Us</li>
        </Link>
        <Link
          to="/contact"
          className="hover:scale-110 transition-all duration-500 hover:text-primary"
        >
          <li>Contact Us</li>
        </Link>
        {!user ? (
          <Link
            to="/join"
            className="hover:scale-110 transition-all duration-500 hover:text-primary"
          >
            <li>Join Now</li>
          </Link>
        ) : (
          <Link
            to="/profile"
            className="hover:scale-110 transition-all duration-500 hover:text-primary"
          >
            <li>Profile</li>
          </Link>
        )}
      </menu>

      <i
        onClick={() => setMenuOpened(!menuOpened)}
        class="ri-menu-4-fill text-3xl xl:hidden"
      ></i>

      {menuOpened ? (
        <menu
          className={`xl:hidden absolute flex flex-col items-center justify-center gap-10 top-20 bg-[#fefffe] left-0 w-full transform transition-transform ${
            menuOpened ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transfrom 0.3s ease, opacity 0.3s ease" }}
        >
          <Link
            to="/"
            className="hover:scale-110 transition-all duration-500 hover:text-primary"
          >
            <li>Home</li>
          </Link>
          <Link
            to="/doctor"
            className="hover:scale-110 transition-all duration-500 hover:text-primary"
          >
            <li>Doctor</li>
          </Link>
          <Link
            to="/survey"
            className="hover:scale-110 transition-all duration-500 hover:text-primary"
          >
            <li>Survey</li>
          </Link>
          <Link
            to="/about"
            className="hover:scale-110 transition-all duration-500 hover:text-primary"
          >
            <li>About Us</li>
          </Link>
          <Link
            to="/contact"
            className="hover:scale-110 transition-all duration-500 hover:text-primary"
          >
            <li>Contact Us</li>
          </Link>
          {!user ? (
            <Link
              to="/join"
              className="hover:scale-110 transition-all duration-500 hover:text-primary"
            >
              <li>Join Now</li>
            </Link>
          ) : (
            <Link
              to="/profile"
              className="hover:scale-110 transition-all duration-500 hover:text-primary"
            >
              <li>Profile</li>
            </Link>
          )}
        </menu>
      ) : null}
    </nav>
  );
}

export default Navbar;
