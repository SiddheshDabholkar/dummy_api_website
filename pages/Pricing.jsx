import React, { useEffect, useRef } from "react";
import { MainContainer } from "../Components/Containers/MainContainer";
import { SectionTitle } from "../Components/Titles/SectionTitle";
import { CardContainer } from "../Components/Containers/CardsContainer";
import {
  PricingFree,
  PricingPro,
  PricingUltra,
  PricingMega,
} from "../Components/Card/Pricing/data";
import PricingCard from "../Components/Card/Pricing";
import Head from "next/head";
import styled from "styled-components";

const Cardss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  flex-wrap: wrap;
  width: 23%;
  @media (max-width: 625px) {
    width: 80%;
    padding: 5px;
    padding-top: 10px;
  }
`;

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Indapi | Pricing</title>
        <meta name="keywords" content="Pricing" />
      </Head>
      <MainContainer>
        <SectionTitle>Pricing</SectionTitle>
        <CardContainer>
          <Cardss>
            <PricingCard {...PricingFree} />
          </Cardss>
          <Cardss>
            <PricingCard {...PricingPro} />
          </Cardss>
          <Cardss>
            <PricingCard {...PricingUltra} />
          </Cardss>
          <Cardss>
            <PricingCard {...PricingMega} />
          </Cardss>
        </CardContainer>
      </MainContainer>
    </>
  );
}
