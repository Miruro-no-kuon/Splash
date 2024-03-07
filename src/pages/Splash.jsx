import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaReddit,
  FaDiscord,
  FaTwitter,
  FaGithub,
  FaBroadcastTower,
  FaShareAlt,
} from "react-icons/fa";
import BannerImageURL from "/src/assets/banner.webp";
import LogoURL from "/src/assets/miruro-text-transparent-white.webp";

const colors = {
  textColor: "var(--global-text)",
  buttonBackground: "var(--global-button-bg)",
  buttonText: "var(--global-button-text)",
  buttonHoverBackground: "var(--global-button-hover-bg)",
  adBackground: "var(--global-ad-bg)",
  customColor: "var(--your-custom-color)",
  paddingSize: "1.5rem",
};

const fadeInAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const popInAnimation = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.075);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const SplashContainer = styled.div`
  margin-top: -2rem;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  margin: 4rem auto 0 auto;
  border-radius: var(--global-border-radius);
  overflow: hidden;
  box-shadow: 0 0 1rem var(--global-card-shadow);
  animation: ${fadeInAnimation} 0.5s ease-in-out;
  @media (min-width: 62.5rem) {
    flex-direction: row;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--global-filter);
    z-index: 0;
  }
`;

const BannerImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${BannerImageURL});
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: -1;
`;

const Content = styled.div`
  flex: 1;
  padding: 1.5rem;
  color: #e8e8e8;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 5rem 0;
  font-weight: bold;
`;

const SplashLogo = styled.img`
  max-width: 13rem;
`;

const ContentWrapper = styled.div``;

const Button = styled(Link)`
  padding: 1rem 2rem;
  background-color: ${colors.buttonBackground};
  color: ${colors.buttonText};
  text-decoration: none;
  border-radius: 2rem;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 0.3125rem;
  transition: background-color 0.2s ease, transform 0.2s ease;
  @media (max-width: 1000px) {
    font-size: 1rem;
    padding: 1rem 1.5rem;
  }
  &:hover {
    transform: scale(1.075);
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;

const Keyword = styled.span`
  font-weight: bold;
  color: ${colors.customColor};
  position: relative;
  margin-right: 0.2rem;

  ::before {
    content: "\u25A0";
    font-size: 0.8rem;
    position: absolute;
    top: 0;
    left: -0.5rem;
    color: ${colors.customColor};
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: ${colors.textColor};
`;

const MainContent = styled.div`
  max-width: 50rem;
  margin: 0 auto;

  color: ${colors.textColor};
  font-size: 1rem;
  line-height: 1.6;
`;

const ShareSection = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
  background-color: ${colors.adBackground};
  border-radius: var(--global-border-radius);
  color: ${colors.textColor};
  text-align: center;
`;

const ShareText = styled.span`
  text-align: left;
  font-size: 1rem;
  color: var(--global-text);

  svg {
    margin-right: 0.5rem;
  }
`;

const ShareButtons = styled.div`
  background: var(--global-primary-bg);
  border-radius: var(--global-border-radius);
  padding: 0.5rem;
  padding-top: 0.8rem;
  & > * {
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

const ShareButton = styled.a`
  margin: 0 8px;
  display: inline-block;
  color: inherit;
  text-decoration: none;

  svg {
    font-size: 1.2rem;
    transition: transform 0.2s ease;
  }

  &:hover {
    transform: scale(1.35);
  }
`;

const StyledLink = styled.a`
  color: #744aff;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const sections = [
  {
    title: "Official domains",
    content: (
      <>
        <Paragraph>
          If you experience downtime on one of our domains, please know that you
          are currently on our{" "}
          <StyledLink href="https://www.miruro.com">
            <strong>main</strong>
          </StyledLink>{" "}
          website. You'll find links to other operational domains right here,
          ensuring a seamless and uninterrupted streaming experience.
        </Paragraph>
        <ul>
          <li>
            <FaBroadcastTower />{" "}
            <StyledLink href="https://www.miruro.tv"> Miruro.tv</StyledLink>
          </li>
          <li>
            <FaBroadcastTower />{" "}
            <StyledLink href="https://www.miruro.online">
              {" "}
              Miruro.online
            </StyledLink>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "What's Miruro?",
    content: (
      <Paragraph>
        Miruro is an anime streaming site where you can watch anime online in HD
        quality with English subtitles or dubbing. You can also download any
        anime you want without registration.
      </Paragraph>
    ),
  },
  {
    title: "Is Miruro safe?",
    content: (
      <Paragraph>
        Yes. We started this site to improve UX and are committed to keeping our
        users safe. We encourage all our users to notify us if anything looks
        suspicious. Please understand that we do have to run advertisements to
        maintain the site.
      </Paragraph>
    ),
  },
  {
    title: "Why Miruro?",
    content: (
      <>
        <Paragraph>
          <strong>
            <FaCheckCircle /> Content Library:
          </strong>{" "}
          We have a vast collection of both old and new anime, making us one of
          the largest anime libraries on the web.
        </Paragraph>
        <Paragraph>
          <strong>
            <FaCheckCircle /> Streaming Experience:
          </strong>{" "}
          Enjoy <Keyword>fast and reliable</Keyword> streaming with our{" "}
          <Keyword>top-of-the-line servers</Keyword>.
        </Paragraph>
        <Paragraph>
          <strong>
            <FaCheckCircle /> Quality/Resolution:
          </strong>{" "}
          Our videos are available in <Keyword>high resolution</Keyword>, and we
          offer quality settings to suit your internet speed.
        </Paragraph>
        <Paragraph>
          <strong>
            <FaCheckCircle /> Frequent Updates:
          </strong>{" "}
          Our content is updated hourly to provide you with the{" "}
          <Keyword>latest releases</Keyword>.
        </Paragraph>
        <Paragraph>
          <strong>
            <FaCheckCircle /> User-Friendly Interface:
          </strong>{" "}
          We focus on <Keyword>simplicity and ease of use</Keyword>.
        </Paragraph>
        <Paragraph>
          <strong>
            <FaCheckCircle /> Device Compatibility:
          </strong>{" "}
          Miruro works seamlessly on both{" "}
          <Keyword>desktop and mobile devices</Keyword>.
        </Paragraph>
        <Paragraph>
          <strong>
            <FaCheckCircle /> Community:
          </strong>{" "}
          Join our active <Keyword>community of anime lovers</Keyword>.
        </Paragraph>
      </>
    ),
  },
  {
    title: "Contact Us",
    content: (
      <>
        <Paragraph>
          If you have any questions, suggestions, or encounter any issues while
          using Miruro, please don't hesitate to contact us. We value your
          feedback and are here to assist you. You can reach out to us through
          multiple channels:
        </Paragraph>
        <ul>
          <li>
            <FaEnvelope /> Email us at{" "}
            <StyledLink
              href="mailto:miruro@proton.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              miruro@proton.me
            </StyledLink>
          </li>
          <li>
            <FaDiscord /> Join our{" "}
            <StyledLink
              href="https://discord.gg/4kfypZ96K4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </StyledLink>{" "}
            server for live discussions and support.
          </li>
          <li>
            <FaReddit /> Visit our{" "}
            <StyledLink
              href="https://www.reddit.com/r/miruro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subreddit
            </StyledLink>{" "}
            for community support and information.
          </li>
        </ul>
      </>
    ),
  },
];

function Splash() {
  return (
    <SplashContainer>
      <Card>
        <BannerImage />
        <Content>
          <Title>
            <SplashLogo src={LogoURL} alt="Splash Logo" />
          </Title>
          <ContentWrapper>
            <Button to="https://www.miruro.tv">
              Go to homepage <FaArrowRight />
            </Button>
            <Subtitle>
              <Keyword>Miruro no Kuon</Keyword>: Where Every Moment is an{" "}
              <Keyword>Eternal Adventure</Keyword>
            </Subtitle>
          </ContentWrapper>
        </Content>
      </Card>
      <MainContent>
        <ShareSection>
          <ShareText>
            <FaShareAlt />
            If you enjoy what you're seeing, we'd be thrilled if you could share
            it with your friends and family. Your support is not just
            appreciated; it's essential in helping us grow and continue bringing
            you the best content. By sharing, you become a vital part of our
            community's journey. And don't forget to follow us on our socials!
            It's the best way to stay connected and up-to-date with all the
            latest news, updates, and exclusive content.
          </ShareText>
          <ShareButtons>
            <ShareButton
              href="https://twitter.com/miruro_official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </ShareButton>
            <ShareButton
              href="https://discord.gg/4kfypZ96K4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </ShareButton>
            <ShareButton
              href="https://github.com/Miruro-no-kuon/Miruro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </ShareButton>
            <ShareButton
              href="https://www.reddit.com/r/miruro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReddit />
            </ShareButton>
          </ShareButtons>
        </ShareSection>
        {sections.map((section, index) => (
          <div key={index}>
            {section.title && (
              <>
                <h2>{section.title}</h2>
              </>
            )}
            {section.content}
          </div>
        ))}
      </MainContent>
    </SplashContainer>
  );
}

export default Splash;
