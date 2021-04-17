import { Button } from "antd";
import styled from "styled-components";

export const SimpleStyledButton = styled(Button)`
  padding: 5px;
  text-align: center;
  width: auto;
  font-weight: bold;
  border-radius: 20px;
  &:hover {
    border: 1px solid #000;
  }
  @media (max-width: 450px) {
    font-size: 10px;
    padding: 3px;
  }
`;
