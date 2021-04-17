import React from "react";
import Head from "next/head";
import SignCard from "../Components/Card/Sign";
import { MainContainer } from "../Components/Containers/MainContainer";
import { SigninData } from "../Components/Card/Sign/data";
import { SCardCon } from "../Components/Containers/SignCardContainer";

export default function Signin() {
  return (
    <>
      <Head>
        <title>Indapi | Signin</title>
        <meta name="keywords" content="Signin" />
      </Head>
      <MainContainer>
        <SCardCon>
          <SignCard {...SigninData} />
        </SCardCon>
      </MainContainer>
    </>
  );
}
