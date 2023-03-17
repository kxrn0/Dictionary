import styled from "styled-components";
import arrowIcon from "../../assets/images/icon-arrow-down.svg";

const SCSelect = styled.div`
  position: relative;

  & .selection {
    display: flex;
    align-items: center;
    gap: 18px;
    text-transform: capitalize;
  }

  & .selection input[type="checkbox"] {
    appearance: none;
    background-image: url(${arrowIcon});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 12px;
    height: 6px;
  }

  &.light .choices {
    background: white;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  }

  &.dark .choices {
    background: #1f1f1f;
    box-shadow: 0px 5px 30px #a445ed;
  }

  & .choices {
    --duration: 0.33s;
    position: absolute;
    right: 0;
    top: 100%;
    transform: translateY(-100%);
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 2rem;
    width: 185px;
    border-radius: 16px;
    z-index: 1;
  }

  & .choices li {
    position: relative;
  }

  & .choices span {
    position: relative;
    text-transform: capitalize;
  }

  & .choices input[type="radio"] {
    appearance: none;
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  & .choices .sans-serif {
    font-family: sans-serifu;
  }

  & .choices .serif {
    font-family: serifu;
  }

  & .choices .mono {
    font-family: mono;
  }

  & .choices.shown {
    animation: move-in var(--duration) linear 1 forwards;
  }

  & .choices.hidden {
    pointer-events: none;
    animation: move-out var(--duration) linear 1 forwards;
  }

  @keyframes move-in {
    from {
      opacity: 0.25;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes move-out {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0.25;
      transform: translateY(-100%);
    }
  }
`;

export default SCSelect;
