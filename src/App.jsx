import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
  const [dark, setDark] = useState(
    localStorage.getItem("dark") ? JSON.parse(localStorage.getItem("dark")) : false
  );
  const [font, setFont] = useState("serif");

  return (
    <div
      id="App"
      className={`
                  ${dark ? "bg-black" : "bg-white"} 
                  min-h-screen 
                  ${
                    font === "serif"
                      ? "font-serif"
                      : font === "sans-serif"
                      ? "font-sans"
                      : "font-mono"
                  }
                  text-base
                  `}
    >
      <Home dark={dark} setDark={setDark} setFont={setFont} />;
    </div>
  );
}

export default App;
