import styled from "styled-components";
import searchIcon from "../../assets/images/icon-search.svg";

const SCSearchBar = styled.form`
  width: 740px;
  height: 64px;
  position: relative;

  input[type="text"] {
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    border-radius: 16px;
    padding: 19px 24px;
    border: none;
  }

  input[type="text"]:focus {
    border: 1px solid #a445ed;
    outline: none;
  }

  button {
    background-image: url(${searchIcon});
    background-size: 15px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    position: absolute;
    right: 0;
    height: 100%;
    aspect-ratio: 1 / 1;
  }

  &.light input[type="text"] {
    background: #f4f4f4;
  }

  &.dark input[type="text"] {
    background: #1f1f1f;
  }

  @media screen and (max-width: 900px) {
    width: 690px;
  }

  @media screen and (max-width: 690px) {
    width: 90%;
  }

  @media screen and (max-width: 500px) {
    width: 330px;
  }
`;

export default SCSearchBar;
