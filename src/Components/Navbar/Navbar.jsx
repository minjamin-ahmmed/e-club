import { Link } from "react-router-dom";
import logo from "../../assets/E-Club Logo.svg";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border border-b-gray-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <Link to="/">
              <li>
                <p>Home</p>
              </li>
            </Link>
            <li>
              <details>
                <summary>Committee</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Membership</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Events</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Concerns</a>
            </li>
            <li>
              <a>Partnerships</a>
            </li>

            <li>
              <details>
                <summary>Media</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div>
            <img src={logo} alt="Navbar Logo" />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-gray-700 font-normal px-1">
          <Link to="/">
            {" "}
            <li>
              <p>Home</p>
            </li>
          </Link>
          <li>
            <details>
              <summary>Committee</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Membership</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Events</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Concerns</a>
          </li>
          <li>
            <a>Partnerships</a>
          </li>

          <li>
            <details>
              <summary>Media</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <Link to="/login">
          <button className="text-[14px] font-semibold text-gray-700 border border-gray-300 px-4 py-2 rounded-md shadow">
            Member Login
          </button>
        </Link>
        <Link to="joinAsMember">
        <button className="text-[14px] font-semibold text-white bg-[#056049] px-4 py-2 rounded-md">
          Join As Member
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
