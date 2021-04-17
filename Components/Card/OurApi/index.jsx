import React, { useState } from "react";
import { StyledCard } from "..";
import { SvgContainer } from "../../Containers/SvgContainer";
import { SectionTitle } from "../../Titles/SectionTitle";
import styled from "styled-components";
import { SModal } from "../../Modal";
import { ButtonContainer } from "../../Containers/ButtonContainer";
import { StyledButton } from "../../Button";
import useClippy from "use-clippy";
import { SimpleStyledButton } from "../../Button/sign";

const All = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 24%;
  @media (max-width: 760px) {
    width: 32%;
  }
  @media (max-width: 600px) {
    width: 45%;
  }
  @media (max-width: 340px) {
    width: 95%;
  }
`;

export default function OurApiCardSection({ title, svg, info, link }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [clipboard, setClipboard] = useClippy();
  const [state, setState] = useState({ copied: false });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <All>
        <StyledCard>
          <SectionTitle small>{title}</SectionTitle>
          <SvgContainer></SvgContainer>
          <ButtonContainer>
            <StyledButton onClick={showModal}>See more</StyledButton>
          </ButtonContainer>
          <SModal
            title={title}
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={[
              <SimpleStyledButton key="back" onClick={handleCancel}>
                cancel
              </SimpleStyledButton>,
              <SimpleStyledButton
                key="copy"
                onClick={() => {
                  setClipboard(`${link}`);
                  setState({ copied: true });
                }}
              >
                {state.copied ? "copied" : "copy api url"}
              </SimpleStyledButton>,
            ]}
          >
            <p>{link}</p>
          </SModal>
        </StyledCard>
      </All>
    </>
  );
}
