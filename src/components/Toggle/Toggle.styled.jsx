import styled from "styled-components";

const SCToggle = styled.input`
  --width: 100px;
  --height: 50px;
  --ball-radius: 30px;
  --padding: 10px;

  appearance: none;
  background: yellow;
  display: block;
  width: var(--width);
  height: var(--height);
  border-radius: calc(2 * var(--height));
  position: relative;

  &::after {
    background: purple;
    content: "";
    display: block;
    width: var(--ball-radius);
    height: var(--ball-radius);
    border-radius: 100%;
    position: absolute;
    top: calc(var(--height) / 2 - var(--ball-radius) / 2);
    transform: translateX(var(--padding));
    transition: transform 0.33s;
  }

  &:checked::after {
    transform: translateX(
      calc(var(--width) - var(--ball-radius) - var(--padding))
    );
  }
`;

export default SCToggle;
