import Toggle from "../Toggle/Toggle";
import Select from "../Select/Select";
import SettingsContext from "../../Settings.context";
import { useContext, useState } from "react";
import logo from "../../assets/images/logo.svg";
import moon from "../../assets/images/icon-moon.svg";

export default function Dictionary() {
  const preferences = useContext(SettingsContext);
  const [word, setWord] = useState("keyboard");

  return (
    <div
      className={`dictionary ${preferences.settings.theme} ${preferences.settings.font}}`}
    >
      <nav>
        <img src={logo} alt="company logo" />
        <div className="settings">
          <Select
            options={preferences.options}
            choice={preferences.settings.font}
            change={(option) =>
              preferences.update({ key: "font", value: option })
            }
          />
          <Toggle
            checked={preferences.settings.theme === "dark"}
            change={(isLight) =>
              preferences.update({
                key: "theme",
                value: !isLight ? "light" : "dark",
              })
            }
          />
          <img src={moon} alt="theme icon" />
        </div>
      </nav>
      <section className="search-bar">
        <input
          type="text"
          value={word}
          onChange={(event) => setWord(event.target.value)} 
        />
        <button>search</button>
      </section>
    </div>
  );
}
