import 'regenerator-runtime/runtime'
import React,{useState,useEffect} from "react";

import Carousel, { slidesToShowPlugin, slidesToScrollPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import Statedefault from "../Statedefault";
import Heading3 from "../Heading3";
import RoadmapBlock from "../RoadmapBlock";
import Bio from "../Biono";
import FAQFrame from "../FAQFrame";
import Links from "../Links";
import styled from "styled-components";
import {
  BarlowExtraBoldAthensGray20px,
  BarlowNormalAthensGray24px,
  BarlowsemicondensedBoldAthensGray16,
  BodybodyLargeRegular,
  ValignTextMiddle,
} from "../../styledMixins";
import "./Desktop.css";

function Desktop(props) {
  const {
    cloudBg,
    nftDreamsGif2,
    tapIntoTheMagicOfTheEveryday,
    drEamsIsAGorilla,
    spanText1,
    spanText2,
    spanText3,
    footer,
    socialIcons,
    logoHead,
    overlapGroup1,
    head1,
    drEams,
    links,
    icons,
    statedefaultProps,
    heading31Props,
    heading32Props,
    roadmapBlock1Props,
    roadmapBlock2Props,
    roadmapBlock3Props,
    roadmapBlock4Props,
    roadmapBlock5Props,
    heading33Props,
    heading34Props,
    heading35Props,
    fAQFrameProps,
//    teamData,
//    musicianData,
  } = props;
  // const teamData = []
  // const musicianData = []

  
  const [teamData,setTeamData]=useState([]);
    const [musicianData,setMusicianData]=useState([]);

    const getData=()=>{
      fetch('/data/team.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setTeamData(myJson);
        });
  
        fetch('/data/musicians.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setMusicianData(myJson);
        });
    }

    useEffect(()=>{
        
        getData();
      },[]);
  

  return (
    <div className="container-center-horizontal">
      <div className="desktop screen">
        <OverlapGroup2 style={{  }}>
          <Content style={{ backgroundImage: `url(${cloudBg})`, backgroundSize: 'cover', backgroundPositionY: 0, backgroundPositionX: 'center' }}>
            <Hero className="animate-enter4">
              <OverlapGroup>
                <NFTDREAMSGIF2
                  className="animate-enter2"
                  style={{ backgroundImage: `url(${nftDreamsGif2})` }}
                ></NFTDREAMSGIF2>
                <TapIntoTheMagicOfTheEveryday className="animate-enter3">
                  {tapIntoTheMagicOfTheEveryday}
                </TapIntoTheMagicOfTheEveryday>
              </OverlapGroup>
              <DrEamsIsAGorilla>{drEamsIsAGorilla}</DrEamsIsAGorilla>
              <Statedefault className={statedefaultProps.className} />
            </Hero>
            <Merge>
              <Heading3>{heading31Props.children}</Heading3>
              <Answer>
                <Span06>{spanText1}</Span06>
                <Span16>{spanText2}</Span16>
                <Span06>{spanText3}</Span06>
              </Answer>
            </Merge>
            <Roadmap>
              <Heading3 className={heading32Props.className}>{heading32Props.children}</Heading3>
              <Roadmap1>
                <RoadmapBlock
                  sellout={roadmapBlock1Props.sellout}
                  description={roadmapBlock1Props.description}
                  event={roadmapBlock1Props.event}
                  filterClass="roadmap10"
                />
                <RoadmapBlock
                  sellout={roadmapBlock2Props.sellout}
                  description={roadmapBlock2Props.description}
                  event={roadmapBlock2Props.event}
                  className={roadmapBlock2Props.className}
                  filterClass="roadmap25"
                />
                <RoadmapBlock
                  sellout={roadmapBlock3Props.sellout}
                  description={roadmapBlock3Props.description}
                  event={roadmapBlock3Props.event}
                  className={roadmapBlock3Props.className}
                  filterClass="roadmap50"
                />
                <RoadmapBlock
                  sellout={roadmapBlock4Props.sellout}
                  description={roadmapBlock4Props.description}
                  event={roadmapBlock4Props.event}
                  className={roadmapBlock4Props.className}
                  filterClass="roadmap75"
                />
                <RoadmapBlock
                  sellout={roadmapBlock5Props.sellout}
                  description={roadmapBlock5Props.description}
                  event={roadmapBlock5Props.event}
                  className={roadmapBlock5Props.className}
                  filterClass="roadmap100"
                />
              </Roadmap1>
            </Roadmap>
            <Team>
              <Heading3 className={heading33Props.className}>{heading33Props.children}</Heading3>
              <TeamCore>
                {teamData && teamData.length>0 &&
              <Carousel
                  plugins={[
                  'infinite',
                  'arrows',
                  'centered',
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                     numberOfSlides: 5
                    }
                  }
                ]}   
                animationSpeed={1000}
                breakpoints={{
                  640: {
                    plugins: [
                      'infinite',
                      'arrows',
                      'centered',
                     {
                       resolve: slidesToShowPlugin,
                       options: {
                        numberOfSlides: 2
                       }
                     },
                   ]
                  },
                  900: {
                    plugins: [
                      'infinite',
                      'arrows',
                      'centered',
                     {
                       resolve: slidesToShowPlugin,
                       options: {
                        numberOfSlides: 3
                       }
                     },
                   ]
                  },
                  1200: {
                    plugins: [
                      'infinite',
                      'arrows',
                      'centered',
                     {
                       resolve: slidesToShowPlugin,
                       options: {
                        numberOfSlides: 4
                       }
                     },
                   ]
                  }
                }}
              >
                {teamData.map((item, idx)=>
                    <Bio
                    className="team-member-tw"
                    img={item.img}
                    title={item.title}
                    name={item.name}
                    bio={item.bio}
                    twitter={item.twitter}
                    instagram={item.instagram}
                    key={`team_${idx}`}
                  />
              )
                }
              
              </Carousel>
              }
              
              </TeamCore>
              <Heading3 className={heading34Props.className}>{heading34Props.children}</Heading3>
              <TeamMusicians>
              {musicianData && musicianData.length>0 &&
              <Carousel
                  plugins={[
                  'infinite',
                  'arrows',
                  'centered',
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                     numberOfSlides: 5
                    }
                  }
                ]}   
                animationSpeed={1000}
                breakpoints={{
                  640: {
                    plugins: [
                      'infinite',
                      'arrows',
                      'centered',
                     {
                       resolve: slidesToShowPlugin,
                       options: {
                        numberOfSlides: 2
                       }
                     },
                   ]
                  },
                  900: {
                    plugins: [
                      'infinite',
                      'arrows',
                      'centered',
                     {
                       resolve: slidesToShowPlugin,
                       options: {
                        numberOfSlides: 3
                       }
                     },
                   ]
                  },
                  1200: {
                    plugins: [
                      'infinite',
                      'arrows',
                      'centered',
                     {
                       resolve: slidesToShowPlugin,
                       options: {
                        numberOfSlides: 4
                       }
                     },
                   ]
                  }
                }}
              >
                {musicianData.map((item, idx)=><Bio
                className="team-member-tw"
                img={item.img}
                title={item.title}
                name={item.name}
                bio={item.bio}
                bylineCategory={item['byline-category']}
                byline={item.byline}
                key={`musician_${idx}`}
              />)
                }
              
              </Carousel>
              }
              </TeamMusicians>
            </Team>
            <Faq>
              <Heading3 className={heading35Props.className}>{heading35Props.children}</Heading3>
              <FAQFrame
                stateclosed21Props={fAQFrameProps.stateclosed21Props}
                stateclosed22Props={fAQFrameProps.stateclosed22Props}
                stateclosed23Props={fAQFrameProps.stateclosed23Props}
                stateclosed24Props={fAQFrameProps.stateclosed24Props}
                stateclosed25Props={fAQFrameProps.stateclosed25Props}
                stateclosed26Props={fAQFrameProps.stateclosed26Props}
              />
            </Faq>
            <Footer style={{ backgroundImage: `url(${footer})` }}>
              <Links />
              <SocialIcons src={socialIcons} />
              <LogoHead src={logoHead} />
            </Footer>
          </Content>
        </OverlapGroup2>
        <Navbar>
          <OverlapGroup1 style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <Logo>
              <Head1 src={head1} />
              <Dreams>{drEams}</Dreams>
            </Logo>
            <Nav>
              <Links1 src={links} />
              <Icons src={icons} />
            </Nav>
          </OverlapGroup1>
        </Navbar>
      </div>
    </div>
  );
}

const OverlapGroup2 = styled.div`
  width: 100vw;
  height: 6349px;
  z-index: 1;
  position: relative;
  background-size: 100% 100%;
`;

const CloudBg = styled.img`
  position: absolute;
  width: 100vw;
  height: 3627px;
  top: 519px;
  left: 0;
  object-fit: cover;
`;

const Content = styled.div`
  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 6349px;
`;

const Hero = styled.div`
  width: 1200px;
  height: 982px;
  position: relative;
  opacity: 1;
  transform: translate(25px, 0);

  &.animate-enter4 {
    animation: animate-enter4-frames 0.2s ease-in-out 0s 1 normal forwards;
    opacity: 1;
    transform: translate(25px, 0);
  }
`;

const OverlapGroup = styled.div`
  position: relative;
  width: 1111px;
  height: 699px;
  top: 15px;
  left: 45px;
  display: flex;
`;

const NFTDREAMSGIF2 = styled.div`
  position: absolute;
  width: 540px;
  height: 699px;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: 50% 50%;
  opacity: 1;
  transform: translate(-25px, 0);

  &.animate-enter2 {
    animation: animate-enter2-frames 0.2s ease-in-out 0.5s 1 normal forwards;
    opacity: 1;
    transform: translate(-25px, 0);
  }
`;

const TapIntoTheMagicOfTheEveryday = styled.div`
  position: absolute;
  width: 737px;
  top: 97px;
  left: 366px;
  transform: translate(25px, 0);
  text-shadow: 0px 0px 25px #000000cc, 0px 0px 8px #00000080, 0px 0px 2px #00000066;
  font-family: 'El Messiri';
  font-weight: 700;
  
  color: var(--ltblue--100);
  font-size: 85.4px;
  letter-spacing: -0.95px;
  line-height: 85px;
  opacity: 1;

  &.animate-enter3 {
    animation: animate-enter3-frames 0.3s ease-in-out 0s 1 normal forwards;
    opacity: 1;
    transform: translate(25px, 0);
  }
`;

const DrEamsIsAGorilla = styled.div`
  ${BarlowNormalAthensGray24px}
  position: absolute;
  width: 502px;
  top: 498px;
  left: 621px;
  text-shadow: 0px 0px 5px #0000008c;
  letter-spacing: -0.12px;
`;

const Merge = styled.div`
  width: 1512px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 601px;
`;

const Answer = styled.div`
  ${BodybodyLargeRegular}
  width: 710px;
  min-height: 272px;
  font-weight: 500;
  color: var(--ltblue--100);
  line-height: 28px;
`;

const Span06 = styled.span`
  ${BodybodyLargeRegular}
  font-weight: 500;
`;

const Span16 = styled.span`
  ${BarlowExtraBoldAthensGray20px}
  letter-spacing: 0;
`;

const Roadmap = styled.div`
  width: 100vw;
  height: 1896px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Roadmap1 = styled.div`
  padding-left: 156px;
  padding-top: 100px;
  width: 1200px;
  height: 1567px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-image: url('/img/line.svg');
  background-size: auto 100%;
  background-position: left;
  background-repeat: no-repeat;
`;

const Team = styled.div`
  width: 100vw;
  
  position: relative;
  display: flex;
  flex-direction: column;
`;

const TeamCore = styled.div`
  flex: 1;
  
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
  
  width: 100vw;
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
  width: 100vw;
  height: 809px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  width: 100vw;
  height: 635px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  background-size: cover;
  background-position: 50% 50%;
`;

const SocialIcons = styled.img`
  height: 45px;
  width: 220px;
  margin-bottom: 54.5px;
`;

const LogoHead = styled.img`
  height: 133px;
  width: 215px;
  margin-bottom: -2.5px;
`;

const Navbar = styled.div`
  position: fixed;
  width: 100vw;
  height: 60px;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  background-color: var(--vulcan);
`;

const OverlapGroup1 = styled.div`
  height: 60px;
  display: flex;
  padding: 2px 63px;
  justify-content: space-between;
  align-items: center;
  min-width: 100vw;
  background-size: cover;
  background-position: 50% 50%;
`;

const Logo = styled.div`
  width: 145px;
  height: 48px;
  align-self: flex-end;
  display: flex;
  align-items: flex-end;
`;

const Head1 = styled.img`
  margin-bottom: 3px;
  width: 53px;
  height: 47px;
  margin-left: 14px;
  object-fit: cover;
`;

const Dreams = styled.div`
  ${ValignTextMiddle}
  ${BarlowsemicondensedBoldAthensGray16}
            margin-bottom: 16px;
  width: 67px;
  height: 16px;
  margin-left: 5px;
  letter-spacing: 1.5px;
  line-height: 16px;
  white-space: nowrap;
`;

const Nav = styled.div`
  height: 41px;
  margin-top: 1px;
  display: flex;
`;

const Links1 = styled.img`
  margin-top: 0.5px;
  width: 316px;
  height: 40px;
  margin-left: -3px;
`;

const Icons = styled.img`
  margin-top: 6.5px;
  width: 118px;
  height: 28px;
  margin-left: 42px;
`;

export default Desktop;
