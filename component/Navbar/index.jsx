import React, { useState } from "react";
import { Layout, Menu, Drawer } from "antd";
import styled from "styled-components";
const { Header } = Layout;
import Link from "next/link";
import { StyledButton } from "../../Components/Button";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { DrawerButton } from "../../Components/Button/NavbarButton";

const StyledHeader = styled(Header)`
  background-color: #1038ed;
  color: #000;
  width: 100%;
  padding: 0 6px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 a {
    font-family: "Changa", sans-serif;
  }

  a {
    color: white;
    text-decoration: none;
    padding: 10px;
    font-weight: bold;
  }

  a active {
    color: black;
  }
`;
const MiddleContainer = styled.div`
  align-items: center;
  float: left;
  display: flex;
  flex-direction: row;
`;
const RightContainer = styled.div`
  align-items: center;
  float: right;
  @media (max-width: 452px) {
    display: none;
  }
`;

const StyledMenu = styled(Menu)`
  width: 200px;
  padding: 30px;
  height: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledMenuItem = styled(Menu.Item)`
  &:hover {
    border-bottom: 1px solid #0052d4;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export default function SNavbar() {
  const [state, setState] = useState(false);
  const { placement, visible } = state;

  const showDrawer = () => {
    setState(true);
  };

  const onClose = () => {
    setState(false);
  };

  return (
    <>
      <StyledHeader>
        <MiddleContainer>
          <DrawerButton icon={<MenuUnfoldOutlined />} onClick={showDrawer} />
          <Link href="/">
            <h1>
              <a>lorem</a>
            </h1>
          </Link>
        </MiddleContainer>
        <RightContainer>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/Pricing">
            <a>Pricing</a>
          </Link>
          <Link href="/OurApis">
            <a>OurApis</a>
          </Link>
          <Link href="/Signin">
            <StyledButton>
              <a>Signin</a>
            </StyledButton>
          </Link>

          <Link href="/Signup">
            <StyledButton>
              <a>Signup</a>
            </StyledButton>
          </Link>

          {/* <Link href="/">
            <StyledButton>
              <a>Signout</a>
            </StyledButton>
          </Link> */}
        </RightContainer>
      </StyledHeader>

      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={state}
        key={placement}
      >
        <StyledMenu mode="inline">
          <StyledMenuItem>
            <Link href="/">
              <a
                onClick={() => {
                  setState(false);
                }}
              >
                Home
              </a>
            </Link>
          </StyledMenuItem>
          <StyledMenuItem>
            <Link href="/Pricing">
              <a
                onClick={() => {
                  setState(false);
                }}
              >
                Pricing
              </a>
            </Link>
          </StyledMenuItem>
          <StyledMenuItem>
            <Link href="/OurApis">
              <a
                onClick={() => {
                  setState(false);
                }}
              >
                OurApis
              </a>
            </Link>
          </StyledMenuItem>
          <StyledMenuItem>
            <Link href="/Signin">
              <StyledButton>
                <a
                  onClick={() => {
                    setState(false);
                  }}
                >
                  Signin
                </a>
              </StyledButton>
            </Link>
          </StyledMenuItem>
          <StyledMenuItem>
            <Link href="/Signup">
              <StyledButton>
                <a
                  onClick={() => {
                    setState(false);
                  }}
                >
                  Signup
                </a>
              </StyledButton>
            </Link>
          </StyledMenuItem>
          {/* <StyledMenuItem>
            <Link href="/">
              <StyledButton>
                <a
                  onClick={() => {
                    setState(false);
                  }}
                >
                  Signout
                </a>
              </StyledButton>
            </Link>
          </StyledMenuItem> */}
        </StyledMenu>
      </Drawer>
    </>
  );
}
