import React from "react";
import { MainContainer } from "../Components/Containers/MainContainer";
import Head from "next/head";
import { SignupData } from "../Components/Card/Sign/data";
import { SCardCon } from "../Components/Containers/SignCardContainer";
import SignCard from "../Components/Card/Sign";

export default function Signup() {
  return (
    <>
      <Head>
        <title>Indapi | Signup</title>
        <meta name="keywords" content="Signup" />
      </Head>
      <MainContainer>
        <SCardCon>
          <SignCard {...SignupData} />
        </SCardCon>
      </MainContainer>
    </>
  );
}
