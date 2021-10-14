import Image from "next/dist/client/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <section className="nav">
      <nav className="navbar">
        <a href="/">
          <Image src="/image/logo.png" width="170px" height="70px" />
        </a>
        <div className="nav-mid">
          <form>
            <input
              type="text"
              placeholder="Search Product Here..."
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
            <a href="./Carts">
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
    </section>
  );
};

export default Navbar;
