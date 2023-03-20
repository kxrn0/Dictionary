import styled from "styled-components";
import linkIcon from "../../assets/images/icon-new-window.svg";

const SCMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 45px;
  padding: 45px;
  width: 740px;

  .phonetics {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    .word {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .heading-m {
      color: var(--purple);
      font-family: sans-serifu;
      font-weight: 400;
    }

    button {
      background-color: transparent;
      border: none;
      border-radius: 100%;

      svg circle {
        opacity: 0.25;
        transition: opacity 0.33s;
      }

      svg path {
        transition: fill 0.33s;
      }

      :active svg circle {
        opacity: 1;
      }

      :active svg path {
        fill: white;
      }

      @media (hover: hover) {
        :hover svg circle {
          opacity: 1;
        }

        :hover svg path {
          fill: white;
        }
      }

      @media screen and (max-width: 500px) {
        svg {
          width: 50px;
          height: 50px;
        }
      }
    }
  }

  .meanings {
    display: flex;
    flex-direction: column;
    gap: 40px;

    h2 {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 20px;
      font-style: var(--style);
      font-weight: 700;

      ::after {
        content: "";
        background: var(--gray);
        height: 1px;
        flex-grow: 1;
      }
    }

    .meaning {
      display: flex;
      flex-direction: column;
      gap: 40px;

      .definitions {
        display: flex;
        flex-direction: column;
        gap: 25px;

        .heading-s {
          color: var(--light-gray);
          font-weight: 400;
        }
      }

      .descriptions {
        display: flex;
        flex-direction: column;
        gap: 13px;
        padding-left: 22px;

        .body-m {
          font-weight: 400;
        }

        li {
          display: flex;
          gap: 20px;

          ::before {
            content: "";
            background: var(--purple);
            display: block;
            min-width: 5px;
            height: 5px;
            border-radius: 100%;
            margin-top: 10px;
          }

          .content {
            display: flex;
            flex-direction: column;
            gap: 13px;

            .body-m.example {
              color: var(--light-gray);
            }
          }
        }
      }

      .indicator.heading-s {
        color: var(--light-gray);
        font-weight: 400;
      }

      .synonyms.heading-s,
      .antonyms.heading-s {
        font-weight: 700;
      }

      .synonyms.heading-s {
        color: var(--purple);
      }

      .antonyms.heading-s {
        color: var(--red);
      }

      @media (hover: hover) {
        .list:hover {
          text-decoration: underline;
        }
      }
    }

    @media screen and (max-width: 500px) {
      gap: 30px;

      .meaning {
        gap: 31px;

        .part.heading-s {
          font-style: var(--style);
        }
      }
    }
  }

  .source {
    border-top: 1px solid var(--gray);
    display: flex;
    gap: 20px;
    margin-top: 40px;
    padding-top: 20px;
    text-decoration: underline;

    a.body-s {
      color: var(--color);
      display: flex;
      align-items: flex-end;
      gap: 10px;

      ::after {
        content: "";
        background-image: url(${linkIcon});
        background-size: cover;
        display: block;
        width: 12px;
        height: 12px;
      }
    }

    span.body-s {
      color: var(--light-gray);
    }

    @media screen and (max-width: 500px) {
      flex-direction: column;
      gap: 7px;
      margin-top: 32px;
      padding: 24px;
    }
  }

  @media screen and (max-width: 900px) {
    width: 690px;
  }

  @media screen and (max-width: 690px) {
    width: 90%;
  }

  @media screen and (max-width: 500px) {
    width: 330px;
    padding: 30px 0;
    .result {
      margin-top: 40px;
    }
  }
`;

export default SCMain;
