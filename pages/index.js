import React, { useRef, useEffect } from "react";
import { MainContainer } from "../Components/Containers/MainContainer";
import { SvgContainer } from "../Components/Containers/SvgContainer";
import { SectionTitle } from "../Components/Titles/SectionTitle";
import { Tagline } from "../Components/Titles/Tagline";
import { Paragraph } from "../Components/Titles/Paragraph";
import { StyledButton } from "../Components/Button";
import { CardContainer } from "../Components/Containers/CardsContainer";
import {
  HomeCardData1,
  HomeCardData2,
  HomeCardData3,
} from "../Components/Card/Home/data";
import styled from "styled-components";
import lottie from "lottie-web";
import svg from "../public/SVG/2.json";
import CardSection from "../Components/Card/Home";
import Pulse from "react-reveal/Pulse";
import Head from "next/head";
import Link from "next/link";

const RemSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  justify-content: center;
  padding: 25px;
  @media (max-width: 625px) {
    width: 99%;
  }
`;

const One = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2px;
  @media (max-width: 625px) {
    flex-direction: column;
  }
`;
const Two = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2px;
  @media (max-width: 625px) {
    flex-direction: column;
  }
`;
const Cardss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  flex-wrap: wrap;
  width: 33%;
  @media (max-width: 625px) {
    width: 99%;
    padding: 5px;
    padding-top: 10px;
  }
`;

export default function Home() {
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
      <Head>
        <title>lorem | Home</title>
        <meta name="keywords" content="Home" />
      </Head>
      <MainContainer>
        <One>
          <SvgContainer>
            <div className="container" ref={container}></div>
          </SvgContainer>
          <RemSection>
            <SectionTitle dark>lorem</SectionTitle>
            <Tagline>lorem ipsum lorem lorem</Tagline>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
              erat sapien. Nam id tortor mi. In at dapibus dui. Integer pretium,
              tortor nec finibus faucibus, leo libero dapibus risus, non mollis
              eros felis et urna. Nullam venenatis fringilla dolor. In
              tincidunt, nisi in tincidunt aliquet, leo eros cursus mi, eu
              consectetur leo libero ac justo. Nunc blandit mollis maximus.
              Fusce in dolor in nisi rhoncus posuere ut at velit. Nullam sed
              elit mauris. Sed sed nulla urna.
            </Paragraph>
          </RemSection>
        </One>
        <One>
          <StyledButton>
            <Link href="/Signin">Get Started</Link>
          </StyledButton>
        </One>
        <Two>
          <SectionTitle dark>lorem</SectionTitle>
          <Tagline>lorem ipsum lorem lorem</Tagline>
          <CardContainer>
            <Cardss>
              <Pulse>
                <CardSection {...HomeCardData1} />
              </Pulse>
            </Cardss>
            <Cardss>
              <Pulse>
                <CardSection {...HomeCardData2} />
              </Pulse>
            </Cardss>
            <Cardss>
              <Pulse>
                <CardSection {...HomeCardData3} />
              </Pulse>
            </Cardss>
          </CardContainer>
        </Two>
      </MainContainer>
    </>
  );
}
