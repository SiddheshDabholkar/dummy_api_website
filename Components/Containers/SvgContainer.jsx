import styled from "styled-components";

export const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: ${({ full }) => (full ? "100%" : "50%")};
  @media (max-width: 625px) {
    width: 99%;
  }
`;
