import ItemList from './ItemList';

const RestaurantsCatogery = ({data, showItem, onClick}) => {
  return (
    <li className=' px-5 shadow-3xl border border-gray-600 rounded-lg mb-5 cursor-pointer'>
        {/* Accordian Header */}
        <div className="flex justify-between items-start py-8" onClick={onClick}>
          <h2 className="font-bold text-lg text-black">{data?.title} ({data?.itemCards?.length})</h2>
          <span>{ showItem ? "➖" : "➕" }</span>
        </div>
        {/* Accordian Body */}
      <ul>
          {
            showItem && <ItemList items={data?.itemCards} /> 
          }
      </ul>
    </li>
  );
}

export default RestaurantsCatogery;