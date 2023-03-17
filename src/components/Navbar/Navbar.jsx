import SCNavbar from "./Navbar.styled";
import SettingsContext from "../../Settings.context";
import Select from "../Select/Select";
import Toggle from "../Toggle/Toggle";
import { useContext } from "react";
import logo from "../../assets/images/logo.svg";
import moon from "../../assets/images/icon-moon.svg";

export default function Navbar() {
  const preferences = useContext(SettingsContext);

  return (
    <SCNavbar className={`navbar ${preferences.font} ${preferences.theme}`}>
      <img src={logo} alt="company logo" />
      <div className="settings">
        <Select
          options={preferences.options}
          choice={preferences.settings.font}
          change={(option) =>
            preferences.update({ key: "font", value: option })
          }
        />
        <span className="break"></span>
        <div className="toggle-section">
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
      </div>
    </SCNavbar>
  );
}
