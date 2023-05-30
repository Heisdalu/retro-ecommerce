const FavoriteList = () => {
  return (
    <div className="overflow-auto pl-1 pb-0.5">
      <ul className="w-slide flex space-x-[0.8rem]">
        <li className="py-[6px] px-[12px] border-1 rounded-rx3">Cafe</li>
        <li
          className="py-[6px] px-[11px] border-1 rounded-rx3
      "
        >
          Coffee $ Juice Bar
        </li>
        <li className="py-[6px] px-[11px] border-1 rounded-rx3">
          Fruits & Vegetables
        </li>
        <li className="py-[6px] px-[11px] border-1 rounded-rx3">
          Meats & Seaford
        </li>
        <li className="py-[6px] px-[11px] border-1 rounded-rx3">Snacks</li>
        <li className="py-[6px] px-[11px] border-1 rounded-rx3">Beverages</li>
        <li className="py-[6px] px-[11px] border-1 rounded-rx3">Alcohol</li>
        <li className="py-[6px] px-[11px] border-1 rounded-rx3">Frozen</li>
      </ul>
    </div>
  );
};
export default FavoriteList;
