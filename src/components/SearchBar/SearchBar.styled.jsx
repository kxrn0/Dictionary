import styled from "styled-components";
import searchIcon from "../../assets/images/icon-search.svg";

const SCSearchBar = styled.form`
  width: 736px;
  height: 64px;
  position: relative;

  & input[type="text"] {
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    border-radius: 16px;
    padding: 19px 24px;
    border: none;
  }

  & input[type="text"]:focus {
    border: 1px solid #a445ed;
    outline: none;
  }

  &.light input[type="text"] {
    background: #f4f4f4;
  }

  &.dark input[type="text"] {
    background: #1f1f1f;
  }

  & button {
    /* background-image: url("../../assets/images/icon-search.svg"); */
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
`;

export default SCSearchBar;
