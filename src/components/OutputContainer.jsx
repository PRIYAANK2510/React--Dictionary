import { FaPlay } from "react-icons/fa";
import useSound from "use-sound";
import SpeechSection from "./SpeechSection";

const OutputContainer = ({ data, setWord, dark }) => {
  const [play] = useSound(data.audio);
  return (
    <main
      className={`p-4 xl:pr-96 xl:pl-96 xl:pt-6 mb-4 relative ${
        dark ? "text-white" : "text-black"
      }`}
    >
      <h1 className="text-4xl uppercase font-bold">{data.word}</h1>
      {data.phonetic && <p className="text-xl italic">{data.phonetic}</p>}
      <button
        onClick={play}
        className="absolute top-4 right-4 xl:right-96 h-17 w-17 rounded-full bg-primary-100 grid place-content-center"
      >
        <FaPlay className="w-6 h-6 text-black" />
      </button>
      {data.meaningsArr.map((obj, index) => (
        <SpeechSection
          key={`${obj.partOfSpeech}${index}`}
          obj={obj}
          setWord={setWord}
          dark={dark}
        />
      ))}
    </main>
  );
};
export default OutputContainer;
