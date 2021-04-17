import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { BackTop } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
  MediumOutlined,
  InstagramOutlined,
  GithubOutlined,
  HeartFilled,
  UpCircleOutlined,
} from "@ant-design/icons";
import { SectionTitle } from "../../Components/Titles/SectionTitle";
import { Tagline } from "../../Components/Titles/Tagline";
import { Paragraph } from "../../Components/Titles/Paragraph";

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-items: center;
  padding: 20px;
  background-color: #1038ed;
  color: #000;
  height: auto;
`;

const LogoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RemContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SocialLinks = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Aligner = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export default function SFooter() {
  return (
    <>
      <StyledFooter>
        <RemContainer>
          <Aligner>
            <SocialLinks>
              <FacebookOutlined />
              <TwitterOutlined />
              <YoutubeOutlined />
              <LinkedinOutlined />
              <MediumOutlined />
              <InstagramOutlined />
              <GithubOutlined />
            </SocialLinks>
          </Aligner>
        </RemContainer>
        <LogoContainer>
          <SectionTitle dark>lorem</SectionTitle>
          <Tagline small>lorem ipsum lorem lorem</Tagline>
          <Paragraph small light>
            Copyright © {new Date().getFullYear()} lorem .Made with{" "}
            <HeartFilled /> remotely from India,Goa
          </Paragraph>
          <BackTop>
            <UpCircleOutlined style={{ fontSize: "30px" }} />
          </BackTop>
        </LogoContainer>
      </StyledFooter>
    </>
  );
}
