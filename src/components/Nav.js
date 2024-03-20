import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import  UserContext  from '../context/UserContext.js';
import { useContext } from "react";
import { useSelector } from "react-redux";

const Nav = () => {
  const status = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector(store => store.cart.items);

  return (
    <nav className="w-9/12">
      <ul className="flex align-center justify-between w-8/12 ml-auto">
        <li className="text-stone-900 font-semibold hover:text-orange-400 mr-7">Online Status: {status ? "🟢" : "🔴"}</li>
        <li>
          <Link className="text-stone-900 font-semibold hover:text-orange-400 mr-7" to="/">Home</Link>
        </li>
        <li>
          <Link className="text-stone-900 font-semibold hover:text-orange-400 mr-7" to="/about">About</Link>
        </li>
        <li>
          <Link className="text-stone-900 font-semibold hover:text-orange-400 mr-7" to="/contact">Help</Link>
        </li>
        <li>
          <Link className="text-stone-900 font-semibold hover:text-orange-400 mr-7" to="/grocery">Grocery</Link>
        </li>
        <li>
          <Link className="text-stone-900 font-semibold hover:text-orange-400 mr-7 relative" to="/cart">
            🛒{
              cartItems.length > 0 && 
              <span className="text-red-600 font-extrabold bottom-2">{(cartItems.length)}</span>
            }
          </Link>
        </li>
        <li>
          <Link className="text-stone-900 font-semibold hover:text-orange-400 mr-7" to="xyz">Sign In</Link>
        </li>
        <li><h1>{loggedInUser}</h1></li>
      </ul>
    </nav>
  );
};

export default Nav;
