import errorImg from "../../assets//icons/errorAnimal.svg";

const ErrorPage = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col justify-center p-1">
      <div>
        <img src={errorImg} className="max-w-[500px] mx-auto" alt="" />
      </div>
      <p className="text-center mb-2 font-Inter font-400">{text}</p>

      <button
        onClick={() => window.location.reload()}
        className="border-1 mx-auto rounded-[6px] p-1 bg-[#263238] text-white"
      >
        Go back Home
      </button>
    </div>
  );
};
export default ErrorPage;
