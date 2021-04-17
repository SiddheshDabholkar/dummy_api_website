import React, { useEffect, useRef } from "react";
import { StyledCard } from "..";
import { StyledButton } from "../../Button";
import { SvgContainer } from "../../Containers/SvgContainer";
import { Paragraph } from "../../Titles/Paragraph";
import { SectionTitle } from "../../Titles/SectionTitle";
import lottie from "lottie-web";
import { ButtonContainer } from "../../Containers/ButtonContainer";

export default function PricingCard({ title, svg, requests, buttontxt }) {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: svg,
    });
  }, []);

  return (
    <>
      <StyledCard>
        <SectionTitle>{title}</SectionTitle>
        <SvgContainer full style={{ height: "70px" }}>
          <div className="container" ref={container}></div>
        </SvgContainer>
        <Paragraph>{requests}</Paragraph>
        <ButtonContainer>
          <StyledButton>{buttontxt}</StyledButton>
        </ButtonContainer>
      </StyledCard>
    </>
  );
}
