import { BiMoon } from "react-icons/bi";
import Switch from "react-switch";
const Header = ({ dark, handleDark, setFont }) => {
  const handleFont = (e) => {
    setFont(e.target.value);
  };
  return (
    <nav
      className={`flex justify-between p-4 xl:pr-96 xl:pl-96 xl:pt-6 ${
        dark ? "bg-black" : "bg-light-100"
      }`}
    >
      <img src="logo.svg" alt="logo" />
      <div className="flex items-center gap-4">
        <label htmlFor="select-font" className="hidden">
          Select-Font
        </label>
        <select
          id="select-font"
          className={`w-24 focus:outline-none hover:cursor-pointer ${
            dark ? "bg-black text-white" : "bg-white text-black"
          } `}
          onChange={handleFont}
        >
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans-Serif</option>
          <option value="monospace">Mono</option>
        </select>
        <Switch
          onChange={handleDark}
          checked={dark}
          offColor="#757575"
          onColor="#A445ED"
          uncheckedIcon={false}
          checkedIcon={false}
          height={24}
          width={34}
          borderRadius={12}
          className="ml-1"
        />
        <BiMoon className={`${dark ? "text-primary-100" : "text-light-400"} w-6 h-6 `} />
      </div>
    </nav>
  );
};
export default Header;
