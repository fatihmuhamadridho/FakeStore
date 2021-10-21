import Image from "next/dist/client/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import styles from "../../styles/CartPage.module.scss";

const Nav = () => {
  const router = useRouter();

  const allCartsData = useSelector((state) => state.Carts);
  const { cart } = allCartsData;

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  const handleToHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleToCart = (e) => {
    e.preventDefault();
    router.push("../../Carts");
  };

  const handleToMen = (e) => {
    e.preventDefault();
    router.push("../Category/Men's");
  };

  const handleToWomen = (e) => {
    e.preventDefault();
    router.push("../Category/Women's");
  };

  const handleTojewelery = (e) => {
    e.preventDefault();
    router.push("../Category/Jewelery");
  };

  const handleToElectronics = (e) => {
    e.preventDefault();
    router.push("../Category/Electronics");
  };

  return (
    <div>
      <nav className="nav-bar">
        <ul className="ul-nav">
          <a onClick={handleToHome}>
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

            <div className="category">
              <li>
                <a onClick={handleToMen} style={{ marginLeft: "0px" }}>
                  Men's
                </a>
              </li>
              <li>
                <a onClick={handleToWomen}>Women's</a>
              </li>
              <li>
                <a onClick={handleToElectronics}>Electronic's</a>
              </li>
              <li>
                <a onClick={handleTojewelery}>Jewelery</a>
              </li>
            </div>
          </div>

          <div className="nav-right">
            <li>
              <a>
                <FontAwesomeIcon icon={faCartPlus} size="2x" />
                <span class="badge badge-warning" id="lblCartCount">
                  {getItemsCount()}
                </span>
              </a>
              <div className="mega-menu">
                {cart.length === 0 ? (
                  <center>
                    <h1 style={{ marginTop: "100px" }}>Your Cart is Empty!</h1>
                  </center>
                ) : (
                  <>
                    <div className="header-navcart">
                      <h1>Cart</h1>
                      <h1>
                        <a onClick={handleToCart} style={{ color: "#FF5A5A" }}>
                          See All
                        </a>
                      </h1>
                    </div>
                    <hr style={{ border: "solid 2px" }} />
                    {cart.map((item) => (
                      <div className="mega-menu-content">
                        <div className={styles.image}>
                          <Image src={item.image} height="90" width="65" />
                        </div>

                        <div style={{ width: "300px" }}>
                          <p style={{ textAlign: "justify" }}>
                            {item.title} <br />
                            {item.quantity} pcs
                          </p>
                        </div>

                        <p>$ {item.price}</p>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </li>

            <li>
              <a href="#" style={{ fontSize: "24px" }}>
                Log in
              </a>
            </li>
            <li>
              <a href="#" style={{ fontSize: "24px" }}>
                Sign up
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
