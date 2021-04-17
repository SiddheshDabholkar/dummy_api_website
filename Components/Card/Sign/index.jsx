import React, { useEffect, useRef } from "react";
import { StyledCard } from "..";
import { SectionTitle } from "../../Titles/SectionTitle";
import { SvgContainer } from "../../Containers/SvgContainer";
import lottie from "lottie-web";
import { SimpleStyledButton } from "../../Button/sign";
import styled from "styled-components";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import Link from "next/link";
import { AlreadyContainer } from "../../Containers/AlreadyContainer";

const VerticalLine = styled.hr`
  border-left: 1px solid #d6b8b86e;
  height: 80px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 45%;
`;

const RemSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const Right = styled.div`
  display: felx;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 45%;
`;
const Left = styled.div`
  display: felx;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 45%;
`;

export default function SignCard({
  title,
  buttongoogle,
  btnGithub,
  svg,
  svgGoogle,
  svgGithub,
  already,
  link,
}) {
  const container1 = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container1.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: svg,
    });
  }, []);
  useEffect(() => {
    lottie.loadAnimation({
      container: container2.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: svgGoogle,
    });
  }, []);
  useEffect(() => {
    lottie.loadAnimation({
      container: container3.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: svgGithub,
    });
  }, []);

  return (
    <>
      <StyledCard>
        <SectionTitle>{title}</SectionTitle>
        <SvgContainer full>
          <div className="container" ref={container1}></div>
        </SvgContainer>
        <RemSection>
          <Left>
            <SvgContainer style={{ height: "100px", width: "98%" }}>
              <div className="container2" ref={container2}></div>
            </SvgContainer>
            <ButtonContainer>
              <SimpleStyledButton>
                <GoogleOutlined />
                {buttongoogle}
              </SimpleStyledButton>
            </ButtonContainer>
          </Left>
          <VerticalLine />
          <Right>
            <SvgContainer style={{ height: "100px", width: "98%" }}>
              <div className="container3" ref={container3}></div>
            </SvgContainer>
            <ButtonContainer>
              <SimpleStyledButton>
                <GithubOutlined />
                {btnGithub}
              </SimpleStyledButton>
            </ButtonContainer>
          </Right>
        </RemSection>
        <AlreadyContainer>
          <Link href={link}>
            <a>{already}</a>
          </Link>
        </AlreadyContainer>
      </StyledCard>
    </>
  );
}
