import { useEffect, useState } from "react";

import Header from "../components/Header";

import ErrorPage from "../components/ErrorPage";
import OutputContainer from "../components/OutputContainer";
import SearchBar from "../components/SearchBar";
import StartingPage from "../components/StartingPage";
import outputData from "../service/GetData";

const Home = ({ dark, setDark, setFont }) => {
  const [search, setSearch] = useState("");
  const [word, setWord] = useState(null);
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  useEffect(() => {
    const fetchData = async (word) => {
      try {
        const response = await fetch(`${API_URL}${word}`);
        if (!response.ok)
          throw Error("Sorry pal, we couldn't find definitions for the word you were looking for.");

        const val = await response.json();
        const output = outputData(val);
        setData(output);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
        setData([err.message]);
      }
    };
    if (word !== null) fetchData(word);
  }, [word]);

  //Dark Mode
  const handleDark = (val) => {
    setDark(val);
    localStorage.setItem("dark", val);
  };

  //Handling Search
  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) return;
    setWord(search);
    setSearch("");
  };
  return (
    <>
      <Header dark={dark} handleDark={handleDark} setFont={setFont} />
      <SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch} dark={dark} />
      {data.length === 0 && <StartingPage dark={dark} />}
      {fetchError && data.length !== 0 && <ErrorPage dark={dark} />}
      {!fetchError && data.length !== 0 && (
        <OutputContainer data={data} setWord={setWord} dark={dark} />
      )}
    </>
  );
};
export default Home;
