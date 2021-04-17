import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { MainContainer } from "../Components/Containers/MainContainer";
import { SvgContainer } from "../Components/Containers/SvgContainer";
import svg from "../public/SVG/404.json";
import Head from "next/head";
export default function NotFound() {
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
        <title>Indapi | 404</title>
        <meta name="keywords" content="404" />
      </Head>
      <MainContainer full>
        <SvgContainer full>
          <div className="container" ref={container}></div>
        </SvgContainer>
      </MainContainer>
    </>
  );
}
