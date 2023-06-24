import { Link } from "react-router-dom";

const FavoriteList = () => {
  return (
    <div className="overflow-auto pl-1 pb-0.5 md:overflow-hidden sticky">
      <ul className="w-slide flex space-x-[0.8rem] text-black md:w-[700px] md:flex-wrap md:mx-auto justify-center md:items-center">
        <Link
          to="/search/cafe"
          className="py-[6px] px-[12px] border-1 centerPos rounded-rx3 text-0.75 md:mt-1 md:text-1"
        >
          Cafe
        </Link>
        <Link
          to="/search/coffee"
          className="centerPos py-[6px] px-[11px] border-1 rounded-rx3 text-0.75
      md:mt-1 md:text-1"
        >
          Coffee $ Juice Bar
        </Link>
        <Link
          to="/search/vegetables"
          className="centerPos py-[6px] px-[11px] border-1 rounded-rx3 text-0.75 md:mt-1 md:text-1"
        >
          Fruits & Vegetables
        </Link>
        <Link
          to="meats"
          className="centerPos  py-[6px] px-[11px] border-1 rounded-rx3 text-0.75 md:mt-1 md:text-1"
        >
          Meats & Seaford
        </Link>
        <Link
          to="snacks"
          className="centerPos py-[6px] px-[11px] border-1 rounded-rx3 text-0.75 md:mt-1 md:text-1"
        >
          Snacks
        </Link>
        <Link
          to="beverages"
          className="centerPos py-[6px] px-[11px] border-1 rounded-rx3 text-0.75 md:mt-1 md:text-1"
        >
          Beverages
        </Link>
        <Link
          to="/search/vegetables"
          className="centerPos  py-[6px] px-[11px] border-1 rounded-rx3 text-0.75 md:mt-1 md:text-1"
        >
          Alcohol
        </Link>
        <Link
          to="/search/frozen"
          className="centerPos py-[6px] px-[11px] border-1 rounded-rx3 text-0.75 md:mt-1 md:text-1"
        >
          Frozen
        </Link>
      </ul>
    </div>
  );
};
export default FavoriteList;
