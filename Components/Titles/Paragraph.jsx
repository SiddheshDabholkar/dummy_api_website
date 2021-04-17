import styled from "styled-components";

export const Paragraph = styled.p`
  text-align: center;
  justify-content: center;
  font-size: ${({ small }) => (small ? "13px" : "20px")};
  color: ${({ light }) => (light ? "#fff" : "#000")};
  font-family: serif;
  display: flex;
  @media (max-width: 625px) {
    font-size: ${({ small }) => (small ? "12px" : "18px")};
  }
  @media (max-width: 500px) {
    font-size: ${({ small }) => (small ? "11px" : "16px")};
  }
  @media (max-width: 426px) {
    font-size: ${({ small }) => (small ? "10px" : "14px")};
  }
  @media (max-width: 326px) {
    font-size: ${({ small }) => (small ? "9px" : "12px")};
  }
`;
