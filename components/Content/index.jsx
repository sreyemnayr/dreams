import React from "react";
import Header2 from "../Header2";
import RoadmapLg32 from "../RoadmapLg32";
import RoadmapLg42 from "../RoadmapLg42";
import RoadmapLg52 from "../RoadmapLg52";
import RoadmapLg5 from "../RoadmapLg5";
import Biono24 from "../Biono24";
import Biono222 from "../Biono222";
import Biono32 from "../Biono32";
import Biono42 from "../Biono42";
import Biono52 from "../Biono52";
import Biono62 from "../Biono62";
import Biono72 from "../Biono72";
import Biono82 from "../Biono82";
import DFAQ2 from "../DFAQ2";
import styled from "styled-components";
import { BarlowsemicondensedExtraExtraBoldAt } from "../../styledMixins";


function Content(props) {
  const {
    footer,
    header21Props,
    roadmapLg51Props,
    roadmapLg52Props,
    roadmapLgProps,
    header22Props,
    biono241Props,
    biono2Props,
    biono242Props,
    biono3Props,
    biono4Props,
    biono243Props,
    header23Props,
    biono51Props,
    biono52Props,
    biono6Props,
    biono71Props,
    biono72Props,
    biono73Props,
    biono74Props,
    biono75Props,
    biono81Props,
    biono82Props,
    header24Props,
    dFAQ2Props,
  } = props;

  return (
    <Content1>
      <Hero className="animate-enter8">
        <NFTDREAMSGIF1 src="/img/nft-dreams-gif.gif" />
        <DrEamsIsAGorilla>
          Dr.Eams is a Gorillaz-style music collective releasing their debut song as the first mergeable music/PFP
          project on the blockchain
        </DrEamsIsAGorilla>
      </Hero>
      <Roadmap>
        <Header2 header3Props={header21Props.header3Props} />
        <Roadmap1>
          <RoadmapLg32 />
          <RoadmapLg42 />
          <RoadmapLg52 roadmapText3Props={roadmapLg51Props.roadmapText3Props} />
          <RoadmapLg52 roadmapText3Props={roadmapLg52Props.roadmapText3Props} />
          <RoadmapLg5
            sellout={roadmapLgProps.sellout}
            establishRisingArt={roadmapLgProps.establishRisingArt}
            eponymRaffleForMinters={roadmapLgProps.eponymRaffleForMinters}
          />
        </Roadmap1>
      </Roadmap>
      <Team>
        <Header2 className={header22Props.className} header3Props={header22Props.header3Props} />
        <TeamCores>
          <Biono24 upper11Props={biono241Props.upper11Props} lowerProps={biono241Props.lowerProps} />
          <Biono222 upper11Props={biono2Props.upper11Props} lower2Props={biono2Props.lower2Props} />
          <Biono24
            className={biono242Props.className}
            upper11Props={biono242Props.upper11Props}
            lowerProps={biono242Props.lowerProps}
          />
          <Biono32 img={biono3Props.img} lower2Props={biono3Props.lower2Props} />
          <Biono42 upper11Props={biono4Props.upper11Props} lower3Props={biono4Props.lower3Props} />
          <Biono24
            className={biono243Props.className}
            upper11Props={biono243Props.upper11Props}
            lowerProps={biono243Props.lowerProps}
          />
        </TeamCores>
        <Header2 className={header23Props.className} header3Props={header23Props.header3Props} />
        <TeamMusicians>
          <Biono52
            img={biono51Props.img}
            name={biono51Props.name}
            title={biono51Props.title}
            line={biono51Props.line}
            spanText4={biono51Props.spanText4}
            lower3Props={biono51Props.lower3Props}
          />
          <Biono52
            img={biono52Props.img}
            name={biono52Props.name}
            title={biono52Props.title}
            line={biono52Props.line}
            spanText4={biono52Props.spanText4}
            className={biono52Props.className}
            lower3Props={biono52Props.lower3Props}
          />
          <Biono62 img={biono6Props.img} line={biono6Props.line} lower3Props={biono6Props.lower3Props} />
          <Biono72 upper2Props={biono71Props.upper2Props} lower3Props={biono71Props.lower3Props} />
          <Biono72 upper2Props={biono72Props.upper2Props} lower3Props={biono72Props.lower3Props} />
          <Biono72 upper2Props={biono73Props.upper2Props} lower3Props={biono73Props.lower3Props} />
          <Biono72 upper2Props={biono74Props.upper2Props} lower3Props={biono74Props.lower3Props} />
          <Biono72
            className={biono75Props.className}
            upper2Props={biono75Props.upper2Props}
            lower3Props={biono75Props.lower3Props}
          />
          <Biono82
            img={biono81Props.img}
            name={biono81Props.name}
            title={biono81Props.title}
            line={biono81Props.line}
            lower3Props={biono81Props.lower3Props}
          />
          <Biono82
            img={biono82Props.img}
            name={biono82Props.name}
            title={biono82Props.title}
            line={biono82Props.line}
            className={biono82Props.className}
            lower3Props={biono82Props.lower3Props}
          />
        </TeamMusicians>
      </Team>
      <Faq>
        <Header2 header3Props={header24Props.header3Props} />
        <DFAQ2
          openyes1Props={dFAQ2Props.openyes1Props}
          openyes2Props={dFAQ2Props.openyes2Props}
          openyes3Props={dFAQ2Props.openyes3Props}
          openyes4Props={dFAQ2Props.openyes4Props}
          openyes5Props={dFAQ2Props.openyes5Props}
          openyes6Props={dFAQ2Props.openyes6Props}
        />
      </Faq>
      <Footer src={footer} />
    </Content1>
  );
}

const Content1 = styled.div`
  z-index: 1;
  margin-top: 48px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 6948px;
`;

const Hero = styled.div`
  width: 1200px;
  height: 899px;
  opacity: 1;
  transform: translate(25px, 0);

  &.animate-enter8 {
    animation: animate-enter8-frames 0.2s ease-in-out 0s 1 normal forwards;
    opacity: 1;
    transform: translate(25px, 0);
  }
`;

const NFTDREAMSGIF1 = styled.img`
  margin-top: 100px;
  width: 540px;
  height: 699px;
  margin-left: 45px;
  object-fit: cover;
`;

const DrEamsIsAGorilla = styled.div`
  ${BarlowsemicondensedExtraExtraBoldAt}
  margin-top: 260px;
  width: 491px;
  height: 539px;
  margin-left: 55px;
  text-shadow: 0px 0px 5px #0000008c;
  letter-spacing: 0;
`;

const Roadmap = styled.div`
  width: 1200px;
  height: 1898px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Roadmap1 = styled.div`
  margin-left: -13px;
  width: 1226px;
  height: 1495px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Team = styled.div`
  width: 1200px;
  height: 1545px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const TeamCores = styled.div`
  flex: 1;
  max-height: 336px;
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
  flex: 1;
  max-height: 403px;
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
  width: 1200px;
  height: 2070px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.img`
  width: 1200px;
  height: 541px;
  object-fit: cover;
`;

export default Content;
