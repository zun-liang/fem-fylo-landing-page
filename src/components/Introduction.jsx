import styled from "styled-components";

import BgCurvyDesktop from "../assets/images/bg-curvy-desktop.svg";
import BgCurvyMobile from "../assets/images/bg-curvy-mobile.svg";
import IntroBg from "../assets/images/illustration-intro.png";
import { Button, Container, Text } from "../assets/styles/stylecomponents";

const IntroContainer = styled(Container)`
  background: url("${BgCurvyMobile}"),
    linear-gradient(
      to bottom,
      var(--dark-blue1) 0%,
      var(--dark-blue1) 52%,
      var(--dark-blue2) 52%,
      var(--dark-blue2) 100%
    );
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0 40%;

  @media (min-width: 396px) {
    background: url("${BgCurvyMobile}"),
      linear-gradient(
        to bottom,
        var(--dark-blue1) 0%,
        var(--dark-blue1) 55%,
        var(--dark-blue2) 55%,
        var(--dark-blue2) 100%
      );
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 40%;
  }

  @media (min-width: 485px) {
    background: url("${BgCurvyMobile}"),
      linear-gradient(
        to bottom,
        var(--dark-blue1) 0%,
        var(--dark-blue1) 57%,
        var(--dark-blue2) 57%,
        var(--dark-blue2) 100%
      );
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 40%;
  }

  @media (min-width: 600px) {
    background: url("${BgCurvyMobile}"),
      linear-gradient(
        to bottom,
        var(--dark-blue1) 0%,
        var(--dark-blue1) 62%,
        var(--dark-blue2) 62%,
        var(--dark-blue2) 100%
      );
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 40%;
  }

  @media (min-width: 785px) {
    background: url("${BgCurvyMobile}"),
      linear-gradient(
        to bottom,
        var(--dark-blue1) 0%,
        var(--dark-blue1) 65%,
        var(--dark-blue2) 65%,
        var(--dark-blue2) 100%
      );
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 40%;
  }

  @media (min-width: 900px) {
    background: url("${BgCurvyDesktop}"),
      linear-gradient(
        to bottom,
        var(--dark-blue1) 0%,
        var(--dark-blue1) 90%,
        var(--dark-blue2) 90%,
        var(--dark-blue2) 100%
      );
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 90%;
  }

  @media (min-width: 1200px) {
    background: url("${BgCurvyDesktop}"),
      linear-gradient(
        to bottom,
        var(--dark-blue1) 0%,
        var(--dark-blue1) 94%,
        var(--dark-blue2) 94%,
        var(--dark-blue2) 100%
      );
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 90%;
  }
`;
const Title = styled.h1`
  font-size: 1.6rem;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  text-align: center;
  line-height: 1.55;
  max-width: 500px;
  @media (min-width: 900px) {
    font-size: 2.5rem;
    max-width: 700px;
  }
`;
const MainPicture = styled.img`
  width: 93%;
  @media (min-width: 600px) {
    width: 50%;
  }
`;
const Introduction = () => (
  <IntroContainer>
    <MainPicture src={IntroBg} alt="illustation intro" />
    <Title>All your files in one secure location, accessible anywhere.</Title>
    <Text>
      Fylo stores all your most important files in one secure location. Access
      them wherever you need, share and collaborate with friends family, and
      co-workers.
    </Text>
    <Button as="a" href="#sign-in">
      Get Started
    </Button>
  </IntroContainer>
);

export default Introduction;
