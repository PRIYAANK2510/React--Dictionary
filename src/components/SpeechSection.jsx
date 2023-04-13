import Antonyms from "./Antonyms";
import Definitions from "./Definitions";
import Synonyms from "./Synonyms";

const SpeechSection = ({ obj, setWord, dark }) => {
  return (
    <div className="mt-12">
      <div className="flex items-center">
        <h2 className="pr-4 text-xl italic font-bold min-w-14 capitalize">{obj.partOfSpeech}</h2>
        <div className={`${dark ? "bg-gray-400" : "bg-black "} flex-grow h-[0.1px]`}></div>
      </div>

      {obj.definitions.length !== 0 && <p className="font-semibold capitalize mt-4">Meaning:</p>}
      <ul className="pl-4">
        {obj.definitions.map((def, index) => (
          <Definitions key={`def${index}`} def={def} dark={dark} />
        ))}
      </ul>
      {obj.synonyms.length !== 0 && <h2 className="mt-4 font-semibold">Synonyms :</h2>}
      {obj.synonyms.length !== 0 &&
        obj.synonyms.map((syn, index) => (
          <Synonyms key={`Syno${index}`} syn={syn} setWord={setWord} />
        ))}
      {obj.antonyms.length !== 0 && <h2 className="mt-4 font-semibold">Antonyms :</h2>}
      {obj.antonyms.length !== 0 &&
        obj.antonyms.map((ant, index) => (
          <Antonyms key={`Anto${index}`} ant={ant} setWord={setWord} />
        ))}
    </div>
  );
};
export default SpeechSection;
