import Dictionary from "./components/Dictionary/Dictionary";
import SettingsContext from "./Settings.context";
import { useState, useEffect } from "react";
import "./style.css";
import "./utilities.css";

export default function App() {
  const [settings, setSettings] = useState(() => {
    let value;

    value = localStorage.getItem("_settings_");

    if (!value) value = { theme: "light", font: "serif" };
    else value = JSON.parse(value);

    return value;
  });

  function update(modified) {
    setSettings((prevSettings) => {
      const updated = { ...prevSettings, [modified.key]: modified.value };

      localStorage.setItem("_settings_", JSON.stringify(updated));

      return updated;
    });
  }

  useEffect(() => {
    document.querySelector("html").style.background =
      settings.theme === "light" ? "white" : "#050505";
  }, [settings]);

  return (
    <div
      className={`App ${settings.theme} ${settings.font.split(" ").join("-")}`}
    >
      <SettingsContext.Provider
        value={{ settings, update, options: ["sans serif", "serif", "mono"] }}
      >
        <Dictionary />
      </SettingsContext.Provider>
    </div>
  );
}
