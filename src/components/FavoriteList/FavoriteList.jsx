const FavoriteList = () => {
  return (
    <div className="overflow-auto pl-1 pb-0.5 md:overflow-hidden sticky">
      <ul className="w-slide flex space-x-[0.8rem] text-black md:w-[700px] md:flex-wrap md:mx-auto justify-center md:items-center">
        <li className="py-[6px] px-[12px] border-1 rounded-rx3 text-0.75 md:mt-1 md:text-1">
          Cafe
        </li>
        <li
          className="py-[6px] px-[11px] border-1 rounded-rx3 text-0.75
      md:mt-1 md:text-1"
        >
          Coffee $ Juice Bar
        </li>
        <li className="py-[6px] px-[11px] border-1 rounded-rx3 text-0.75 md:mt-1 md:text-1">
          Fruits & Vegetables
        </li>
        <li className="py-[6px] px-[11px] border-1 rounded-rx3 text-0.75 md:mt-1 md:text-1">
          Meats & Seaford
        </li>
        <li className="py-[6px] px-[11px] border-1 rounded-rx3 text-0.75 md:mt-1 md:text-1">
          Snacks
        </li>
        <li className="py-[6px] px-[11px] border-1 rounded-rx3 text-0.75 md:mt-1 md:text-1">
          Beverages
        </li>
        <li className="py-[6px] px-[11px] border-1 rounded-rx3 text-0.75 md:mt-1 md:text-1">
          Alcohol
        </li>
        <li className="py-[6px] px-[11px] border-1 rounded-rx3 text-0.75 md:mt-1 md:text-1">
          Frozen
        </li>
      </ul>
    </div>
  );
};
export default FavoriteList;
