import styled from "styled-components";

const SCToggle = styled.input`
  --width: 40px;
  --height: 20px;
  --ball-radius: 14px;
  --padding: 3px;

  appearance: none;
  background: #757575;
  display: block;
  width: var(--width);
  height: var(--height);
  border-radius: calc(2 * var(--height));
  position: relative;
  transition: background-color 0.33s;

  &::after {
    background: white;
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

  &:active {
    background: #a445ed;
  }

  @media (hover: hover) {
    &:hover {
      background: #a445ed;
    }
  }
`;

export default SCToggle;
