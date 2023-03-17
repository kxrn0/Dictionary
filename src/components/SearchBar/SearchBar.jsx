import { useState, useContext } from "react";
import SCSearchBar from "./SearchBar.styled";
import SettingsContext from "../../Settings.context";

export default function SearchBar({ initialWord, update }) {
  const [word, setWord] = useState(initialWord);
  const { settings } = useContext(SettingsContext);

  function handle_submission(event) {
    event.preventDefault();

    update(event.target["word-input"].value);
  }

  return (
    <SCSearchBar
      className={`${settings.font} ${settings.theme}`}
      onSubmit={handle_submission}
    >
      <input
        type="text"
        value={word}
        name="word-input"
        onChange={(event) => setWord(event.target.value)}
        className="heading-s"
      />
      <button></button>
    </SCSearchBar>
  );
}
