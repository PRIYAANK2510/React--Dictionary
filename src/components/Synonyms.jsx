const Synonyms = ({ syn, setWord }) => {
  return (
    <p
      className="inline-flex mr-3 text-primary-100 hover:cursor-pointer"
      onClick={() => setWord(syn)}
    >
      {syn}
    </p>
  );
};
export default Synonyms;
