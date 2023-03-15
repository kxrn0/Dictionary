import { useState, useEffect } from "react";
import SCSelect from "./Select.styled";

export default function Select({ options, choice, change, duration = 0.33 }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(false);
  const [timeId, setTimeId] = useState(null);

  function handle_change(event) {
    const checked = event.target.checked;

    clearTimeout(timeId);

    setOpen(checked);
    if (checked) setContent(true);
    else setTimeId(setTimeout(() => setContent(false), duration * 1000));
  }

  useEffect(() => {
    function listen(event) {
      console.log("I was clicked");

      if (!event.target.closest(".select")) {
        setOpen(false);
        setTimeId(setTimeout(() => setContent(false), duration * 1000));
      }
    }

    window.addEventListener("click", listen);

    return () => window.removeEventListener("click", listen);
  }, []);

  return (
    <SCSelect className="select">
      <label htmlFor="selection">
        <span>{choice}</span>
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
            <li key={option} onClick={() => change(option)}>
              <label htmlFor={option}>
                <input type="radio" name="select-option" id={option} />
                <span>{option}</span>
              </label>
            </li>
          ))}
        </ul>
      ) : null}
    </SCSelect>
  );
}
