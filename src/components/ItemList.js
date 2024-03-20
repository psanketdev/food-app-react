import { useDispatch } from "react-redux";
import urls from "../utils/utils";
import { addItem } from "../slice/cartSlice";

const ItemList = ({ items }) => {

  const dispatchCart = useDispatch();

  const addItemInSlice = (item) => {
    // Dispatch an addItem action
    dispatchCart(addItem(item))
  }

  return (
    <>
      {items.map((item) => {
        return (
          <li key={item.card.info.id} className="flex items-center justify-between border-b-2 mb-4 pb-4 last:border-b-0 to">
            <div className="w-9/12 pr-15">
              <h3 className="font-medium  mb-1">{item.card.info.name}</h3>
              <span className="mb-4 block font-small text-sm">₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
              <p className="text-gray-700 text-sm">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 relative">
              <figure className="w-[150] ml-auto">
                <img src={urls.IMG_URL + item.card.info.imageId} alt={item.card.info.name} />
              </figure>
              <button onClick={() => addItemInSlice(item)} className="absolute font-semibold bottom-0 right-0 bg-orange-600 px-4 py-3 text-sm/[10px] text-white uppercase w-[150] drop-shadow-2xl opacity-8">Add</button>
            </div>
          </li>
        );
      })}
    </>
  );
};
export default ItemList;
