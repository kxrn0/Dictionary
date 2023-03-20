import styled from "styled-components";

const SCNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 51px;

  .settings {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 26px;
  }

  .toggle-section {
    display: flex;
    gap: 20px;
  }

  .toggle-section svg {
    width: 20px;
    height: 20px;
  }

  .break {
    background: #e9e9e9;
    width: 1px;
    height: 32px;
  }

  &.light {
    .toggle-section svg path {
      stroke: #838383;
    }
  }

  &.dark {
    .toggle-section svg path {
      stroke: #a445ed;
    }
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 24px;

    .settings {
      gap: 16px;
    }

    .toggle-section {
      gap: 12px;
    }
  }
`;

export default SCNavbar;
