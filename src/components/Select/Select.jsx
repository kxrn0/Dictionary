import { useState, useEffect, useContext } from "react";
import SettingsContext from "../../Settings.context";
import SCSelect from "./Select.styled";

export default function Select({ options, choice, change, duration = 0.33 }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(false);
  const [timeId, setTimeId] = useState(null);
  const { settings } = useContext(SettingsContext);

  function handle_change(event) {
    const checked = event.target.checked;

    clearTimeout(timeId);

    setOpen(checked);
    if (checked) setContent(true);
    else setTimeId(setTimeout(() => setContent(false), duration * 1000));
  }

  useEffect(() => {
    function listen(event) {
      if (!event.target.closest(".select")) {
        setOpen(false);
        setTimeId(setTimeout(() => setContent(false), duration * 1000));
      }
    }

    window.addEventListener("click", listen);

    return () => window.removeEventListener("click", listen);
  }, []);

  return (
    <SCSelect className={`select ${settings.theme}`}>
      <label className="selection" htmlFor="selection">
        <span className="body-m">{choice}</span>
        <input
          type="checkbox"
          checked={open}
          onChange={handle_change}
          id="selection"
        />
      </label>
      {content ? (
        <ul
          className={`choices ${open ? "shown" : "hidden"}`}
          style={{ "--duration": `${duration}s` }}
        >
          {options.map((option) => (
            <li key={option}>
              <label htmlFor={option}>
                <input
                  type="radio"
                  name="select-option"
                  id={option}
                  checked={option === choice}
                  onChange={() => change(option)}
                />
                <span className={`body-m ${option.split(" ").join("-")}`}>
                  {option}
                </span>
              </label>
            </li>
          ))}
        </ul>
      ) : null}
    </SCSelect>
  );
}
