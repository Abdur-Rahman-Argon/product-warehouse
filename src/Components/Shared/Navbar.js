import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  };

  const navbarOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/inventories">Inventories</Link>
      </li>
      <li>
        <a>ManageItems</a>
      </li>
      <li>
        <a>MyItems</a>
      </li>
      <li>
        <a>AddNewItem</a>
      </li>

      {user ? (
        <li>
          <button onClick={logOut}>LogOut</button>
        </li>
      ) : (
        <li>
          <Link to="/login">Login/Signup</Link>
        </li>
      )}
    </>
  );
  return (
    <div class="navbar  md:px-20  bg-slate-700 text-white ">
      <div class="flex-1 navbar-start">
        <Link to="/" class="">
          <h1 className="normal-case title-style text-2xl">P-Store House</h1>
        </Link>
      </div>

      <div class="md:flex navbar-end hidden">
        <ul class="menu menu-horizontal font-semibold gap-1 p-0">
          {navbarOption}
        </ul>
      </div>

      <div class="navbar-end md:hidden">
        <div className="dropdown dropdown-end ">
          <label tabindex="9" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabindex="9"
            class="dropdown-content menu p-4 shadow bg-base-100 rounded-box w-52"
          >
            {navbarOption}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
