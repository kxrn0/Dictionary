import styled from "styled-components";

const SCMain = styled.main`
  background: #f6a5f6;
  display: flex;
  flex-direction: column;
  gap: 45px;
  padding: 45px;
  width: 737px;

  & {
    .phonetics {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export default SCMain;
