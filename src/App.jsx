import Dictionary from "./components/Dictionary/Dictionary";
import SettingsContext from "./Settings.context";
import "./style.css";
import { useState, useRef } from "react";

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

  return (
    <div className="App">
      <SettingsContext.Provider
        value={{ settings, update, options: ["sans serif", "serif", "mono"] }}
      >
        <Dictionary />
        <p>{settings.theme}</p>
      </SettingsContext.Provider>
    </div>
  );
}
