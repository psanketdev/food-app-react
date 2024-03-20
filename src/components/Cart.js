import { useDispatch, useSelector } from "react-redux";
import CartItemsList from "./CartItemsList";
import { clearItems } from "../slice/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatchCart = useDispatch();

  const cleareCart = () => {
    dispatchCart(clearItems());
  };

  return (
    <section className="mt-10 w-6/12 mx-auto">
      <div className="container">
        <div className="flex items-center justify-between border-dashed border-b-2 pb-4 mb-5">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          {cartItems?.length > 0 && <button
            onClick={cleareCart}
            className="text-sm-[12px] bg-white-400 p-3 text-red-700 font-medium border-red-700 border rounded uppercase">
            Clear 🛒
          </button>}
        </div>
        {cartItems.length ? (
          <ul>
            {cartItems.map((item) => {
              return <CartItemsList key={item.card.info.id} item={item} />;
            })}
          </ul>
        ) : (
          <>
            <h2 className="text-lg text-black font-thin mb-2">
              Opps, Look like your cart is empty!
            </h2>
            <p className="text-[14px] text-gray-700 font-thin mb-5">You can go to home page to view more restaurants</p>
            <Link to="/" className=" bg-orange-500 text-white p-3 uppercase text-sm font-medium">
                see restaurants near you
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
