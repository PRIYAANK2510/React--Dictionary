import Lottie from "lottie-react";
import EmojiYes from "../animations/emoji-yes.json";
const StartingPage = ({ dark }) => {
  const lottieStyles = {
    height: 135,
    width: 135,
  };
  return (
    <div className="p-4 xl:pr-96 xl:pl-96 xl:pt-6">
      <div
        className={`
      ${dark ? "bg-white text-white" : "bg-black text-black"}
      bg-opacity-10
      border-dashed 
      border-gray-500 
      border-2 
      flex 
      flex-col
      justify-between 
      items-center
      rounded-xl
      py-16
      px-6
      xl:px-28
      xl:py-16
      gap-6`}
      >
        <Lottie animationData={EmojiYes} loop={true} style={lottieStyles} />
        <h2 className="font-bold text-lg">Free Online Dictionary</h2>
        <p className="text-center">
          Hello there ! You can start using this free online dictionary by typing anything in the
          above searchbox.
        </p>
      </div>
    </div>
  );
};
export default StartingPage;
