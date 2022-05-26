import React from "react";
import Statedefault from "../Statedefault";
import Heading from "../Heading";
import RoadmapBlockSm from "../RoadmapBlockSm";
import Biono from "../Biono";
import Biono2 from "../Biono2";
import Biono3 from "../Biono3";
import Biono4 from "../Biono4";
import Biono5 from "../Biono5";
import Biono6 from "../Biono6";
import Biono7 from "../Biono7";
import Biono8 from "../Biono8";
import Stateclosed from "../Stateclosed";
import Logo from "../Logo";
import GNavIcons from "../GNavIcons";
import styled from "styled-components";
import { Border1pxStroke, BodybodyRegular } from "../../styledMixins";
import "./Mobile.css";

function Mobile(props) {
  const {
    mobile,
    cloudBg,
    nftDreamsGif2,
    tapIntoTheMagicOfTheEveryday,
    drEamsIsAGorilla,
    spanText1,
    spanText2,
    spanText3,
    footer,
    overlapGroup1,
    heading1Props,
    heading2Props,
    roadmapBlockSm1Props,
    roadmapBlockSm2Props,
    roadmapBlockSm3Props,
    roadmapBlockSm4Props,
    roadmapBlockSm5Props,
    heading3Props,
    bionoProps,
    biono21Props,
    biono22Props,
    biono23Props,
    biono3Props,
    biono24Props,
    heading4Props,
    biono4Props,
    biono5Props,
    biono6Props,
    biono71Props,
    biono72Props,
    biono73Props,
    biono74Props,
    biono75Props,
    biono81Props,
    biono82Props,
    heading5Props,
    stateclosed1Props,
    stateclosed2Props,
    stateclosed3Props,
    stateclosed4Props,
    stateclosed5Props,
    stateclosed6Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile screen">
        <OverlapGroup2>
          <Mobile1 src={mobile} />
          <CloudBg src={cloudBg} />
          <Content>
            <Hero>
              <HeroFrame>
                <OverlapGroup>
                  <NFTDREAMSGIF2
                    className="animate-enter"
                    style={{ backgroundImage: `url(${nftDreamsGif2})` }}
                  ></NFTDREAMSGIF2>
                  <TapIntoTheMagicOfTheEveryday className="animate-enter1">
                    {tapIntoTheMagicOfTheEveryday}
                  </TapIntoTheMagicOfTheEveryday>
                </OverlapGroup>
                <DrEamsIsAGorilla>{drEamsIsAGorilla}</DrEamsIsAGorilla>
                <Statedefault />
              </HeroFrame>
            </Hero>
            <Merge>
              <Heading>{heading1Props.children}</Heading>
              <Answer>
                <Span0>{spanText1}</Span0>
                <Span1>{spanText2}</Span1>
                <Span0>{spanText3}</Span0>
              </Answer>
            </Merge>
            <Roadmap>
              <Heading className={heading2Props.className}>{heading2Props.children}</Heading>
              <Roadmap1>
                <RoadmapBlockSm
                  sellout={roadmapBlockSm1Props.sellout}
                  description={roadmapBlockSm1Props.description}
                  event={roadmapBlockSm1Props.event}
                />
                <RoadmapBlockSm
                  sellout={roadmapBlockSm2Props.sellout}
                  description={roadmapBlockSm2Props.description}
                  event={roadmapBlockSm2Props.event}
                  className={roadmapBlockSm2Props.className}
                />
                <RoadmapBlockSm
                  sellout={roadmapBlockSm3Props.sellout}
                  description={roadmapBlockSm3Props.description}
                  event={roadmapBlockSm3Props.event}
                  className={roadmapBlockSm3Props.className}
                />
                <RoadmapBlockSm
                  sellout={roadmapBlockSm4Props.sellout}
                  description={roadmapBlockSm4Props.description}
                  event={roadmapBlockSm4Props.event}
                  className={roadmapBlockSm4Props.className}
                />
                <RoadmapBlockSm
                  sellout={roadmapBlockSm5Props.sellout}
                  description={roadmapBlockSm5Props.description}
                  event={roadmapBlockSm5Props.event}
                  className={roadmapBlockSm5Props.className}
                />
              </Roadmap1>
            </Roadmap>
            <Team>
              <Heading className={heading3Props.className}>{heading3Props.children}</Heading>
              <TeamCore>
                <Biono upperProps={bionoProps.upperProps} iconyesProps={bionoProps.iconyesProps} />
                <Biono2
                  img={biono21Props.img}
                  group1Props={biono21Props.group1Props}
                  iconyesProps={biono21Props.iconyesProps}
                />
                <Biono2
                  img={biono22Props.img}
                  className={biono22Props.className}
                  group1Props={biono22Props.group1Props}
                  iconyesProps={biono22Props.iconyesProps}
                />
                <Biono2
                  img={biono23Props.img}
                  className={biono23Props.className}
                  group1Props={biono23Props.group1Props}
                  iconyesProps={biono23Props.iconyesProps}
                />
                <Biono3
                  img={biono3Props.img}
                  group1Props={biono3Props.group1Props}
                  iconnoProps={biono3Props.iconnoProps}
                />
                <Biono2
                  img={biono24Props.img}
                  className={biono24Props.className}
                  group1Props={biono24Props.group1Props}
                  iconyesProps={biono24Props.iconyesProps}
                />
              </TeamCore>
              <Heading className={heading4Props.className}>{heading4Props.children}</Heading>
              <TeamMusicians>
                <Biono4 upper2Props={biono4Props.upper2Props} iconnoProps={biono4Props.iconnoProps} />
                <Biono5 {...biono5Props} />
                <Biono6
                  spanText1={biono6Props.spanText1}
                  spanText2={biono6Props.spanText2}
                  spanText3={biono6Props.spanText3}
                  upper42Props={biono6Props.upper42Props}
                  iconnoProps={biono6Props.iconnoProps}
                />
                <Biono7
                  spanText1={biono71Props.spanText1}
                  spanText4={biono71Props.spanText4}
                  upper42Props={biono71Props.upper42Props}
                  iconnoProps={biono71Props.iconnoProps}
                />
                <Biono7
                  spanText1={biono72Props.spanText1}
                  spanText4={biono72Props.spanText4}
                  upper42Props={biono72Props.upper42Props}
                  iconnoProps={biono72Props.iconnoProps}
                />
                <Biono7
                  spanText1={biono73Props.spanText1}
                  spanText4={biono73Props.spanText4}
                  upper42Props={biono73Props.upper42Props}
                  iconnoProps={biono73Props.iconnoProps}
                />
                <Biono7
                  spanText1={biono74Props.spanText1}
                  spanText4={biono74Props.spanText4}
                  upper42Props={biono74Props.upper42Props}
                  iconnoProps={biono74Props.iconnoProps}
                />
                <Biono7
                  spanText1={biono75Props.spanText1}
                  spanText4={biono75Props.spanText4}
                  className={biono75Props.className}
                  upper42Props={biono75Props.upper42Props}
                  iconnoProps={biono75Props.iconnoProps}
                />
                <Biono8 upper42Props={biono81Props.upper42Props} iconnoProps={biono81Props.iconnoProps} />
                <Biono8 upper42Props={biono82Props.upper42Props} iconnoProps={biono82Props.iconnoProps} />
              </TeamMusicians>
            </Team>
            <Faq>
              <Heading className={heading5Props.className}>{heading5Props.children}</Heading>
              <FAQFrame>
                <FAQS>
                  <Surface>
                    <List>
                      <Stateclosed question={stateclosed1Props.question} />
                      <Stateclosed question={stateclosed2Props.question} className={stateclosed2Props.className} />
                      <Stateclosed question={stateclosed3Props.question} className={stateclosed3Props.className} />
                      <Stateclosed question={stateclosed4Props.question} className={stateclosed4Props.className} />
                      <Stateclosed question={stateclosed5Props.question} className={stateclosed5Props.className} />
                      <Stateclosed question={stateclosed6Props.question} className={stateclosed6Props.className} />
                    </List>
                  </Surface>
                </FAQS>
              </FAQFrame>
            </Faq>
            <Footer src={footer} />
          </Content>
          <MobileNav>
            <OverlapGroup1 style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <Logo />
              <GNavIcons />
            </OverlapGroup1>
          </MobileNav>
        </OverlapGroup2>
      </div>
    </div>
  );
}

const OverlapGroup2 = styled.div`
  width: 430px;
  height: 5119px;
  position: relative;
  margin-top: -1px;
`;

const Mobile1 = styled.img`
  position: absolute;
  width: 430px;
  height: 5118px;
  top: 1px;
  left: 0;
`;

const CloudBg = styled.img`
  position: absolute;
  width: 414px;
  height: 3627px;
  top: 303px;
  left: 0;
  object-fit: cover;
`;

const Content = styled.div`
  position: absolute;
  width: 414px;
  top: 60px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 5058px;
`;

const Hero = styled.div`
  width: 414px;
  height: 647px;
  display: flex;
`;

const HeroFrame = styled.div`
  margin-top: 8px;
  width: 356px;
  margin-left: 29px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 639px;
`;

const OverlapGroup = styled.div`
  width: 330px;
  height: 463px;
  position: relative;
  margin-top: 2px;
`;

const NFTDREAMSGIF2 = styled.div`
  position: absolute;
  width: 330px;
  height: 427px;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: 50% 50%;
  opacity: 0;
  transform: translate(-25px, 0);

  &.animate-enter {
    animation: animate-enter-frames 0.2s ease-in-out 0.5s 1 normal forwards;
    opacity: 0;
    transform: translate(-25px, 0);
  }
`;

const TapIntoTheMagicOfTheEveryday = styled.div`
  position: absolute;
  width: 285px;
  top: 377px;
  left: 22px;
  transform: translate(25px, 0);
  text-shadow: 0px 0px 25px #000000cc, 0px 0px 8px #00000080, 0px 0px 2px #00000066;
  font-family: var(--font-family-barlow_semi_condensed);
  font-weight: 800;
  font-style: italic;
  color: var(--ltblue--100);
  font-size: 39.1px;
  text-align: center;
  letter-spacing: -0.39px;
  line-height: 30px;
  opacity: 0;

  &.animate-enter1 {
    animation: animate-enter1-frames 0.3s ease-in-out 0s 1 normal forwards;
    opacity: 0;
    transform: translate(25px, 0);
  }
`;

const DrEamsIsAGorilla = styled.div`
  width: 324px;
  min-height: 96px;
  margin-top: 7px;
  text-shadow: 0px 0px 5px #0000008c;
  font-family: var(--font-family-barlow);
  font-weight: 400;
  color: var(--ltblue--100);
  font-size: var(--font-size-l);
  text-align: center;
  letter-spacing: -0.1px;
`;

const Merge = styled.div`
  width: 414px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 522px;
`;

const Answer = styled.p`
  ${BodybodyRegular}
  width: 354px;
  min-height: 296px;
  font-weight: 500;
  color: var(--ltblue--100);
  line-height: 22px;
`;

const Span0 = styled.span`
  ${BodybodyRegular}
  font-weight: 500;
`;

const Span1 = styled.span`
  font-family: var(--font-family-barlow);
  font-weight: 800;
  font-size: var(--font-size-m);
  letter-spacing: 0;
`;

const Roadmap = styled.div`
  width: 414px;
  height: 1390px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Roadmap1 = styled.div`
  height: 1164px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Team = styled.div`
  width: 414px;
  height: 1221px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const TeamCore = styled.div`
  height: 345px;
  width: 414px;
  align-self: center;
  position: relative;
  display: flex;
  overflow: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const TeamMusicians = styled.div`
  height: 423px;
  width: 414px;
  align-self: center;
  position: relative;
  display: flex;
  overflow: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const Faq = styled.div`
  width: 414px;
  height: 742px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const FAQFrame = styled.div`
  margin-left: 15px;
  width: 384px;
  display: flex;
`;

const FAQS = styled.div`
  ${Border1pxStroke}
  width: 384px;
  height: 500px;
  display: flex;
  background-color: var(--blackcomponent-bg);
  border-radius: 2px;
  box-shadow: 0px 0px 8px #14212f66;
`;

const Surface = styled.div`
  margin-top: 16px;
  width: 336px;
  margin-left: 24px;
  display: flex;
`;

const List = styled.div`
  width: 336px;
  height: 468px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.img`
  width: 414px;
  height: 536px;
`;

const MobileNav = styled.div`
  position: absolute;
  width: 414px;
  height: 60px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  background-color: var(--vulcan);
`;

const OverlapGroup1 = styled.div`
  height: 60px;
  position: relative;
  display: flex;
  padding: 2px 0;
  align-items: flex-start;
  min-width: 414px;
  background-size: cover;
  background-position: 50% 50%;
`;

export default Mobile;
