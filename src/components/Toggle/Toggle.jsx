import SCToggle from "./Toggle.styled";

export default function Toggle({ checked, change }) {
  return (
    <SCToggle
      type="checkbox"
      checked={checked}
      onChange={(event) => change(event.target.checked)}
    />
  );
}
