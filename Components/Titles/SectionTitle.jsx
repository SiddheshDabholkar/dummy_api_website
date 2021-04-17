import styled from "styled-components";

export const SectionTitle = styled.h1`
  align-items: center;
  color: ${({ dark }) => (dark ? "#000" : "#fff")};
  font-size: ${({ small }) => (small ? "20px" : "39px")};
  font-weight: bolder;
  font-family: initial;
  text-align: center;
  @media (max-width: 625px) {
    font-size: ${({ small }) => (small ? "18px" : "35px")};
  }
  @media (max-width: 500px) {
    font-size: ${({ small }) => (small ? "16px" : "31px")};
  }
  @media (max-width: 426px) {
    font-size: ${({ small }) => (small ? "14px" : "28px")};
  }
  @media (max-width: 326px) {
    font-size: ${({ small }) => (small ? "12px" : "25px")};
  }
`;
