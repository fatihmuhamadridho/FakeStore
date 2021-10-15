import "../styles/globals.scss";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
