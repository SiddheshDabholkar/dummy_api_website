import styled from "styled-components";
import { Modal } from "antd";

export const SModal = styled(Modal)`
  .ant-modal-content {
    justify-content: center;
    text-align: center;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    background-image: linear-gradient(
      89.2deg,
      rgba(121, 158, 235, 1) 22.3%,
      rgba(109, 190, 236, 1) 84.1%
    );
  }

  .ant-modal-footer {
    padding: 10px 16px;
    text-align: right;
    background: transparent;
    border-radius: 0 0 2px 2px;
    border-top: 0px;
  }
`;
