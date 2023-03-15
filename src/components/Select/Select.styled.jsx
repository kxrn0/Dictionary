import styled from "styled-components";

const SCSelect = styled.div`
  background: lightcoral;
  position: relative;

  & .choices {
    --duration: 0.33s;
    background: yellow;
    position: absolute;
    right: 0;
    top: 100%;
    transform: translateY(-100%);
    padding: 2rem;
    width: 200px;
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
