const Antonyms = ({ ant, setWord }) => {
  return (
    <p
      className="inline-flex mr-3 text-primary-100 hover:cursor-pointer"
      onClick={() => setWord(ant)}
    >
      {ant}
    </p>
  );
};
export default Antonyms;
