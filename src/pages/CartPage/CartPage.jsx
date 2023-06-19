/* eslint-disable react/prop-types */
import CartCard from "../../components/Cart/CartCard";
import EmptyCart from "../../components/Cart/EmptyCart";
import CartSummary from "../../components/Cart/CartSummary";
import CartList from "../../components/Cart/CartList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userCartDetail } from "../../helpers/CartLogic/CartHelper";
import { updateVisitorCart } from "../../redux/reducers/visitorSlice/VisitorDetailSlice";
import { updateActiveUserCart } from "../../redux/reducers/activeUserSlice/UserProductSlice";
import { GUESTS, USERS } from "../../constants/Types";
import CartModal from "../../components/Cart/CartModal";
import { useState } from "react";
import useIdentifier from "../../hooks/Identifier/useIdentifier";
import Loading from "../../components/Loading/Loading";

const CartPage = ({ isAuthenticated }) => {
  const { loading: guestLoading, data: guestData } = useSelector(
    (state) => state.visitor
  );
  const { loading: activeUserLoading, data: activeUserData } = useSelector(
    (state) => state.activeUser
  );
  const activeUserId = useSelector((state) => state.auth.userAuthDetail.uid);
  const guestId = useIdentifier();

  const loading = isAuthenticated ? activeUserLoading : guestLoading;
  const dataCart = isAuthenticated ? activeUserData.cart : guestData.cart;
  const userId = isAuthenticated ? activeUserId : guestId;
  const userDetail = isAuthenticated
    ? userCartDetail(USERS, updateActiveUserCart)
    : userCartDetail(GUESTS, updateVisitorCart);

  console.log(userDetail);

  const [toggle, setToggle] = useState(false);
  const [userItem, setUserItem] = useState({});

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  const getUserItem = (item) => {
    setUserItem(item);
  };

  // console.log(userItem);

  const data = dataCart.map((el) => (
    <CartCard
      key={el.id}
      item={el}
      userCart={dataCart}
      userDetail={userDetail}
      userId={userId}
      toggleFunc={toggleHandler}
      getUserFunc={getUserItem}
    />
  ));

  const totalPrice = dataCart.reduce(
    (acc, cur) => acc + cur.price * cur.count,
    0
  );

  // useEffect(() => {
  //   if (userId) {
  //     dispatch(fetchGuestProduct(userId));
  //   }
  // }, [dispatch, userId]);

  if (loading)
    return (
      <Loading color="#000" style="h-[100px] md:h-[200px] mt-[5rem] mx-auto" />
    );

  if (dataCart.length === 0) return <EmptyCart />;

  return (
    <div>
      <div className="bg-cartBg font-Inter relative">
        <div className="z-[3] py-1 flex items-center space-x-1.5 px-1 bg-cartBg md:py-2 md:max-w-[900px] md:mx-auto sticky top-[90px]">
          <h1 className="">Cart ({dataCart.length})</h1>
          <Link to="/" className="py-0.5 px-1 border-1 rounded-[10px] bg-white">
            Continue Shopping
          </Link>
        </div>

        <div className="py-1 md:grid md:[grid-template-columns:1.5fr_1fr;] md:[grid-gap:1rem] md:max-w-[900px] md:mx-auto md:px-1">
          <CartSummary totalPrice={totalPrice} />

          <CartList>{data}</CartList>
        </div>
      </div>
      {toggle && (
        <CartModal
          toggleFunc={toggleHandler}
          userItem={userItem}
          cartData={dataCart}
          userId={userId}
          userDetail={userDetail}
          type={GUESTS}
          callback={updateVisitorCart}
        />
      )}
    </div>
  );
};
export default CartPage;
