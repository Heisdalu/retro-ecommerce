import pic2 from "../../assets/third-min.jpg";
import pic1 from "../../assets/six-min.jpg";
import pic5 from "../../assets/ten-min.jpg";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="border-1 mt-[2rem] grid grid-cols-2 [grid-gap:1rem] p-0.5">
      <Card image={pic1} />
      <Card />
      <Card image={pic2}/>
      <Card image={pic5}/>
      <Card image={pic5}/>
      <Card image={pic5}/>
      <Card image={pic5}/>
      <Card image={pic5}/>
    </div>
  );
};
export default CardList;
