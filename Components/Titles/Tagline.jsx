import styled from "styled-components";

export const Tagline = styled.p`
  font-size: ${({ small }) => (small ? "18px" : "22px")};
  color: ${({ dark }) => (dark ? "#000" : "#fff")};
  font-family: fantasy;
  align-items: center;
  text-align: center;
  @media (max-width: 600px) {
    font-size: ${({ small }) => (small ? "10px" : "20px")};
  }
`;
