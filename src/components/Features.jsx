/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

import IconAnywhere from "../assets/images/icon-access-anywhere.svg";
import IconAnyFile from "../assets/images/icon-any-file.svg";
import IconCollaboration from "../assets/images/icon-collaboration.svg";
import IconSecurity from "../assets/images/icon-security.svg";
import { Container, SubTitle, Text } from "../assets/styles/stylecomponents";

const FeaturesContainer = styled(Container)`
  gap: 1rem;
  padding: 2rem 2rem 9rem;
  background-color: var(--dark-blue2);
  @media (min-width: 600px) {
    width: 90%;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 8rem;
    row-gap: 4rem;
    padding: 2rem 2rem 5rem;
  }
`;
const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  padding-top: 3rem;
  @media (min-width: 600px) {
    max-width: 400px;
    padding-top: 0;
  }
`;
const FeatureIcon = styled.img`
  height: 19%;
  min-height: 3rem;
  max-height: 4rem;
  margin: 1.5rem auto;
`;

const Features = () => (
  <FeaturesContainer>
    <FeatureContainer id="features">
      <FeatureIcon src={IconAnywhere} alt="icon access anywhere" />
      <SubTitle>Access your files, anywhere</SubTitle>
      <Text>
        The ability to use a smartphone, tablet, or computer to access your
        account means your files follow you everywhere.
      </Text>
    </FeatureContainer>
    <FeatureContainer>
      <FeatureIcon src={IconSecurity} alt="icon security" />
      <SubTitle>Security you can trust</SubTitle>
      <Text>
        2-factor authentication and user-controlled encryption are just a couple
        of the security features we allow to help secure your files.
      </Text>
    </FeatureContainer>
    <FeatureContainer>
      <FeatureIcon src={IconCollaboration} alt="icon collaboration" />
      <SubTitle>Real-time collaboration</SubTitle>
      <Text>
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
      </Text>
    </FeatureContainer>
    <FeatureContainer>
      <FeatureIcon src={IconAnyFile} alt="icon any file" />
      <SubTitle>Store any type of file</SubTitle>
      <Text>
        Whether you're sharing holidays photos or work documents, Fylo has you
        covered allowing for all file types to be securely stored and shared.
      </Text>
    </FeatureContainer>
  </FeaturesContainer>
);

export default Features;
