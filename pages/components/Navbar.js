import Image from "next/dist/client/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Image src="/image/logo.png" width="170px" height="70px" />
      <div className="nav-mid">
        <form>
          <input
            name=""
            type="text"
            placeholder="Search Product Here..."
            onChange=""
            value=""
            className="input-search"
          />
        </form>

        <ul className="category">
          <li className="nav-item">
            <a href="#">Men's</a>
          </li>
          <li className="nav-item">
            <a href="#">Women's</a>
          </li>
          <li className="nav-item">
            <a href="#">Elctronic's</a>
          </li>
          <li className="nav-item">
            <a href="#">Jewelery</a>
          </li>
        </ul>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#">
            <FontAwesomeIcon icon={faCartPlus} size="2x" />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" style={{ fontSize: "24px" }}>
            Log in
          </a>
        </li>
        <li className="nav-item">
          <a href="#" style={{ fontSize: "24px" }}>
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
