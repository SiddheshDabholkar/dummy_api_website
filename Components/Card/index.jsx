import { Card } from "antd";
import styled from "styled-components";

// use https://glassmorphism.com/ to obtain this shit

export const StyledCard = styled(Card)`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background-image: linear-gradient(
    89.2deg,
    rgba(121, 158, 235, 1) 22.3%,
    rgba(109, 190, 236, 1) 84.1%
  );

  width: 99%;
  height: auto;
`;
