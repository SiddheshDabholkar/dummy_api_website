import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 0px;
  /* height: auto; */
  height: ${({ full }) => (full ? "400px" : "auto")};
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #1038ed;
  background-image: linear-gradient(135deg, #1038ed 0%, #80d0c7 78%);
`;
