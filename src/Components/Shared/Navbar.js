import React from "react";

const Navbar = () => {
  const navberOption = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Items</a>
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
      <li>
        <a>Login/Signup</a>
      </li>
    </>
  );
  return (
    <div class="navbar bg-base-100 md:px-20">
      <div class="flex-1 navbar-start">
        <a href="/" class="btn btn-ghost normal-case text-xl">
          daisyUI
        </a>
      </div>

      <div class="md:flex navbar-end hidden">
        <ul class="menu menu-horizontal gap-1 p-0">{navberOption}</ul>
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
            {navberOption}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
