import React from "react";
import { MainContainer } from "../Components/Containers/MainContainer";
import { SectionTitle } from "../Components/Titles/SectionTitle";
import Head from "next/head";
import styled from "styled-components";
import OurApiCardSection from "../Components/Card/OurApi";
import {
  OurApiData1,
  OurApiData2,
  OurApiData3,
  OurApiData4,
  OurApiData5,
  OurApiData6,
  OurApiData7,
  OurApiData8,
} from "../Components/Card/OurApi/data";

const SearchedResult = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  padding-bottom: 20px;
`;

export default function OurApis() {
  return (
    <>
      <Head>
        <title>Indapi | OurApis</title>
        <meta name="keywords" content="OurApis" />
      </Head>
      <MainContainer>
        <SectionTitle>Our Api</SectionTitle>
        <SearchedResult>
          <OurApiCardSection {...OurApiData1} />
          <OurApiCardSection {...OurApiData2} />
          <OurApiCardSection {...OurApiData3} />
          <OurApiCardSection {...OurApiData4} />
          <OurApiCardSection {...OurApiData5} />
          <OurApiCardSection {...OurApiData6} />
          <OurApiCardSection {...OurApiData7} />
          <OurApiCardSection {...OurApiData8} />
        </SearchedResult>
      </MainContainer>
    </>
  );
}
