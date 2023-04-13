const Definitions = ({ def, dark }) => {
  return (
    <>
      <li className="display-list text-primary-100 mt-4">
        <span className={`${dark ? "text-white" : "text-black"}`}>{def.definition}</span>
      </li>
      <p className={`${dark ? "text-gray-500" : "text-gray-400"} pl-5`}>{def.example}</p>
    </>
  );
};
export default Definitions;
