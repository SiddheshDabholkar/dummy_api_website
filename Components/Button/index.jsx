import styled from "styled-components";
import { Button } from "antd";

export const StyledButton = styled(Button)`
  background-image: linear-gradient(
    to right,
    #fc00ff 0%,
    #00dbde 51%,
    #fc00ff 100%
  );
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  &:hover {
    text-decoration: none;
    background-position: right center;
  }
`;
