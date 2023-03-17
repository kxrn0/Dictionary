import SettingsContext from "../../Settings.context";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import SearchBar from "../SearchBar/SearchBar";
import SCDictionary from "./Dictionary.style";
import { useContext, useState } from "react";

export default function Dictionary() {
  const preferences = useContext(SettingsContext);
  const [word, setWord] = useState("keyboard");

  return (
    <SCDictionary
      className={`dictionary ${preferences.settings.theme} ${preferences.settings.font}}`}
    >
      <Navbar />
      <SearchBar initialWord={word} update={setWord} />
      <Main word={word} />
    </SCDictionary>
  );
}
