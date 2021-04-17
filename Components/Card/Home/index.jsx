import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import lottie from "lottie-web";
import { SvgContainer } from "../../Containers/SvgContainer";
import { SectionTitle } from "../../Titles/SectionTitle";
import { Paragraph } from "../../Titles/Paragraph";
import { StyledCard } from "../index";

const Twosub = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const One = styled.div`
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const Two = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

export default function CardSection({ title, svg, paragraph }) {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: svg,
    });
  }, [svg]);

  return (
    <>
      <StyledCard>
        <One>
          <SvgContainer>
            <div className="container" ref={container}></div>
          </SvgContainer>
        </One>
        <Two>
          <Twosub>
            <SectionTitle small>{title}</SectionTitle>
            <Paragraph small>{paragraph}</Paragraph>
          </Twosub>
        </Two>
      </StyledCard>
    </>
  );
}
