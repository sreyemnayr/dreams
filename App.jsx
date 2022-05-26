import "./App.css";
import React, {useState, useEffect} from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Desktop from "./components/Desktop";

import TeamMemberTw from "./components/TeamMemberTw";
import Biono92 from "./components/Biono92";
import TeamMember from "./components/TeamMember";
import Content from "./components/Content";
import MNavbar from "./components/MNavbar";

function App() {
   

    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Desktop {...desktopData}/>
                </Route>

                <Route path="/teammembertw">
                    <TeamMemberTw bio="One or two sentences for the description, one or two sentences for the description. One or two sentences for the description, one or two. One or two sentences for the description..." />
                </Route>
                <Route path="/bio-no">
                    <Biono92 lower2Props={biono922Data.lower2Props} lower2Props2={biono922Data.lower2Props2} />
                </Route>
                <Route path="/teammember">
                    <TeamMember />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
const heading1Data = {
    children: "What is a “merge”?",
};

const heading2Data = {
    children: "Roadmap 1.0",
    className: "heading-1",
};

const roadmapBlockSm1Data = {
    sellout: "10% SELLOUT",
    description: "The gamification of merging our song/collection begins, our project is validated.",
    event: <>FIRST 500 MINTERS RECEIVE FREE<br /> DR.EAMS OG MINT T-SHIRT</>,
};

const roadmapBlockSm2Data = {
    sellout: "25% SELLOUT",
    description: <>Non-Profit Record Label established for <br />musician projects in need of $$ support.</>,
    event: "EPONYM RAFFLE FOR MINTERS",
    className: "roadmap-block-sm-1",
};

const roadmapBlockSm3Data = {
    sellout: "50% SELLOUT",
    description: <>Project hires music marketing team for TV/film/ad placement of song. <br />IRL concerts for holders.</>,
    event: <>100% SONG ROYALTIES WILL BE USED<br /> TO BENEFIT THE COMMUNITY</>,
    className: "roadmap-block-sm-2",
};

const roadmapBlockSm4Data = {
    sellout: "75% SELLOUT",
    description: <>Dr.Eams legacy! 4 songs ft. new artists to <br />be released as their own collection with <br />OG exclusivity to first gen holders. <br />New collection every 6 months for 2 years. Beyond that, we plan to evolve alongside you.</>,
    event: <>GALAXY WARRIOR RAFFLE <br />FOR HOLDERS</>,
    className: "roadmap-block-sm-3",
};

const roadmapBlockSm5Data = {
    sellout: "100% SELLOUT",
    description: "Metaverse Land purchased with tentative plans to create a dive bar music venue to host DIY concerts.",
    event: <>+5ETH GIVEAWAYS<br />WAGMI</>,
    className: "roadmap-block-sm-4",
};

const heading3Data = {
    children: "Core Team",
    className: "heading-2",
};

const group11Data = {
    name: "Anthony “Oz” Oslund",
    title: "FOUNDER/CREATIVE DIRECTOR",
};

const upper1Data = {
    img: "/img/img@2x.png",
    group1Props: group11Data,
};

const statedefault21Data = {
    className: "",
};

const iconyes1Data = {
    icon: "/img/icon@2x.png",
    statedefault2Props: statedefault21Data,
};

const biono1Data = {
    upperProps: upper1Data,
    iconyesProps: iconyes1Data,
};

const group12Data = {
    name: "David Kozlovksy",
    title: "LEAD DIGITAL ARTIST",
    className: "",
};

const statedefault22Data = {
    className: "",
};

const iconyes2Data = {
    icon: "/img/icon-11@2x.png",
    className: "",
    statedefault2Props: statedefault22Data,
};

const biono21Data = {
    img: "/img/img-33@2x.png",
    group1Props: group12Data,
    iconyesProps: iconyes2Data,
};

const group13Data = {
    name: "Ryan Meyers",
    title: "LEAD DEVELOPER",
    className: "group-1-2",
};

const statedefault23Data = {
    className: "button-secondary-2",
};

const iconyes3Data = {
    icon: "/img/img-21@2x.png",
    className: "bottom-bar-2",
    statedefault2Props: statedefault23Data,
};

const biono22Data = {
    img: "/img/img-21@2x.png",
    className: "team-member-tw-5",
    group1Props: group13Data,
    iconyesProps: iconyes3Data,
};

const group14Data = {
    name: "Chris McDaniel",
    title: ".GIF ARTIST",
    className: "group-1-3",
};

const statedefault24Data = {
    className: "button-secondary-3",
};

const iconyes4Data = {
    icon: "/img/img-21@2x.png",
    className: "bottom-bar-3",
    statedefault2Props: statedefault24Data,
};

const biono23Data = {
    img: "/img/img-21@2x.png",
    className: "team-member-ins-4",
    group1Props: group14Data,
    iconyesProps: iconyes4Data,
};

const group15Data = {
    name: "Adam K",
    title: "CYBERSECURITY",
    className: "group-1-4",
};

const statedefault25Data = {
    className: "button",
};

const iconno1Data = {
    statedefault2Props: statedefault25Data,
};

const biono31Data = {
    img: "/img/img-21@2x.png",
    group1Props: group15Data,
    iconnoProps: iconno1Data,
};

const group16Data = {
    name: "Tishana “Ash” Hinds",
    title: "COMMUNITY BUILDER",
    className: "group-1-5",
};

const statedefault26Data = {
    className: "button-secondary-4",
};

const iconyes5Data = {
    icon: "/img/img-21@2x.png",
    className: "bottom-bar-4",
    statedefault2Props: statedefault26Data,
};

const biono24Data = {
    img: "/img/img-21@2x.png",
    className: "team-member-tw-6",
    group1Props: group16Data,
    iconyesProps: iconyes5Data,
};

const heading4Data = {
    children: "Musicians",
    className: "heading-3",
};

const group17Data = {
    name: "dr. ill",
    title: "GUITAR",
    className: "group-1-6",
};

const upper21Data = {
    img: "/img/img-6@2x.png",
    group1Props: group17Data,
};

const statedefault27Data = {
    className: "labelreadmore",
};

const iconno2Data = {
    className: "bottom-bar-8",
    statedefault2Props: statedefault27Data,
};

const biono41Data = {
    upper2Props: upper21Data,
    iconnoProps: iconno2Data,
};

const group18Data = {
    name: "dr. ums",
    title: "PLAYS THE DRUMS",
    className: "group-1-7",
};

const statedefault28Data = {
    className: "button-1",
};

const iconno3Data = {
    className: "bottom-bar-9",
    statedefault2Props: statedefault28Data,
};

const biono5Data = {
    img: "/img/img-39@2x.png",
    line: "/img/line-21@2x.png",
    spanText1: "worked with ",
    spanText2: " ",
    spanText3: " ",
    spanText4: "Taylor Swift, Bon Iver, Eyedea & Abilities",
    group1Props: group18Data,
    iconnoProps: iconno3Data,
};

const group122Data = {
    name: "dr. ape",
    title: "BARITONE OPERA SINGER",
};

const upper421Data = {
    group12Props: group122Data,
};

const statedefault29Data = {
    className: "button-2",
};

const iconno4Data = {
    className: "bottom-bar-10",
    statedefault2Props: statedefault29Data,
};

const biono6Data = {
    spanText1: "fun fact",
    spanText2: "   ",
    spanText3: "“Seemingly unlimited baritone” according to Opera News",
    upper42Props: upper421Data,
    iconnoProps: iconno4Data,
};

const group123Data = {
    name: "dr. ooling",
    title: "LEAD VOCALS",
};

const upper422Data = {
    group12Props: group123Data,
};

const statedefault210Data = {
    className: "button-3",
};

const iconno5Data = {
    className: "bottom-bar-11",
    statedefault2Props: statedefault210Data,
};

const biono71Data = {
    spanText1: "fun fact ",
    spanText4: "Licensed attorney, brews his own kombucha",
    upper42Props: upper422Data,
    iconnoProps: iconno5Data,
};

const group124Data = {
    name: "dr. ips",
    title: "VIOLIN",
};

const upper423Data = {
    group12Props: group124Data,
};

const statedefault211Data = {
    className: "button-4",
};

const iconno6Data = {
    className: "bottom-bar-12",
    statedefault2Props: statedefault211Data,
};

const biono72Data = {
    spanText1: "worked with ",
    spanText4: "Belle & Sebastian, Dessa, Jeremy Messersmith",
    upper42Props: upper423Data,
    iconnoProps: iconno6Data,
};

const group125Data = {
    name: "dr. one",
    title: "SYNTH VOCALS",
};

const upper424Data = {
    group12Props: group125Data,
};

const statedefault212Data = {
    className: "button-5",
};

const iconno7Data = {
    className: "bottom-bar-13",
    statedefault2Props: statedefault212Data,
};

const biono73Data = {
    spanText1: "fun fact ",
    spanText4: "Former band’s album was 1 of 11 to get perfect 10 on Pitchfork",
    upper42Props: upper424Data,
    iconnoProps: iconno7Data,
};

const group126Data = {
    name: "dr. ugs",
    title: "SYNTH BASS/SYNTH",
};

const upper425Data = {
    group12Props: group126Data,
};

const statedefault213Data = {
    className: "button-6",
};

const iconno8Data = {
    className: "bottom-bar-14",
    statedefault2Props: statedefault213Data,
};

const biono74Data = {
    spanText1: "worked with",
    spanText4: "Kansas Plates, Good Doom, Pitstop, Black Market Brass",
    upper42Props: upper425Data,
    iconnoProps: iconno8Data,
};

const group127Data = {
    name: "dr. izzle",
    title: "VOCAL SAMPLE",
};

const upper426Data = {
    group12Props: group127Data,
};

const statedefault214Data = {
    className: "button-7",
};

const iconno9Data = {
    className: "bottom-bar-15",
    statedefault2Props: statedefault214Data,
};

const biono75Data = {
    spanText1: "worked with",
    spanText4: "Solid Gold, Gayngs",
    className: "team-musician-7",
    upper42Props: upper426Data,
    iconnoProps: iconno9Data,
};

const group128Data = {
    name: "dr. ying",
    title: "HARMONIES/BACKGROUND VOX",
};

const upper427Data = {
    group12Props: group128Data,
};

const statedefault215Data = {
    className: "button-8",
};

const iconno10Data = {
    className: "bottom-bar-16",
    statedefault2Props: statedefault215Data,
};

const biono81Data = {
    upper42Props: upper427Data,
    iconnoProps: iconno10Data,
};

const group129Data = {
    name: "dr. ink",
    title: "SONGWRITER/PRODUCER/GUITAR",
};

const upper428Data = {
    group12Props: group129Data,
};

const statedefault216Data = {
    className: "button-9",
};

const iconno11Data = {
    className: "bottom-bar-17",
    statedefault2Props: statedefault216Data,
};

const biono82Data = {
    upper42Props: upper428Data,
    iconnoProps: iconno11Data,
};

const heading5Data = {
    children: "FAQ",
    className: "heading-4",
};

const stateclosed1Data = {
    question: "How much does it cost to mint?",
};

const stateclosed2Data = {
    question: "When is mint?",
    className: "faq-2",
};

const stateclosed3Data = {
    question: "Who are the musicians involved in this project?",
    className: "faq-3",
};

const stateclosed4Data = {
    question: "What is the inspiration?",
    className: "faq-4",
};

const stateclosed5Data = {
    question: "What is the merge?",
    className: "faq-5",
};

const stateclosed6Data = {
    question: "How are you incorporating music into the NFTs?",
    className: "faq-6",
};

const mobileData = {
    mobile: "/img/mobile.png",
    cloudBg: "/img/cloud-bg.png",
    nftDreamsGif2: "https://cdn.animaapp.com/projects/621f03187008b16657f7b63b/files/nft-dreams-gif.gif",
    tapIntoTheMagicOfTheEveryday: "Tap into the magic of the everyday",
    drEamsIsAGorilla: "Dr.Eams is a Gorillaz-style music collective releasing their debut song as the first mergeable music/PFP project on the blockchain",
    spanText1: "A merge can occur if you hold 3 or more ",
    spanText2: "consecutive",
    spanText3: <> sections of the song (e.g., sections 1, 2, &amp; 3 or sections 6, 7, &amp; 8). The merge will be a fusion of your NFTs to create a longer section of the song and your art will come to life as a .gif. <br />For example, if you merge 3 NFTs, your piece will now be 1 minute long and you will choose which of the 3 images you wish to bring to life as a .gif while the other 2 will be burned. <br />This creates a deflationary economy, adds an element of gamification to collecting, and will unlock new utility for holders that merge.</>,
    footer: "/img/footer-1@1x.png",
    overlapGroup1: "/img/mobile-nav-1@2x.png",
    heading1Props: heading1Data,
    heading2Props: heading2Data,
    roadmapBlockSm1Props: roadmapBlockSm1Data,
    roadmapBlockSm2Props: roadmapBlockSm2Data,
    roadmapBlockSm3Props: roadmapBlockSm3Data,
    roadmapBlockSm4Props: roadmapBlockSm4Data,
    roadmapBlockSm5Props: roadmapBlockSm5Data,
    heading3Props: heading3Data,
    bionoProps: biono1Data,
    biono21Props: biono21Data,
    biono22Props: biono22Data,
    biono23Props: biono23Data,
    biono3Props: biono31Data,
    biono24Props: biono24Data,
    heading4Props: heading4Data,
    biono4Props: biono41Data,
    biono5Props: biono5Data,
    biono6Props: biono6Data,
    biono71Props: biono71Data,
    biono72Props: biono72Data,
    biono73Props: biono73Data,
    biono74Props: biono74Data,
    biono75Props: biono75Data,
    biono81Props: biono81Data,
    biono82Props: biono82Data,
    heading5Props: heading5Data,
    stateclosed1Props: stateclosed1Data,
    stateclosed2Props: stateclosed2Data,
    stateclosed3Props: stateclosed3Data,
    stateclosed4Props: stateclosed4Data,
    stateclosed5Props: stateclosed5Data,
    stateclosed6Props: stateclosed6Data,
};

const statedefault3Data = {
    className: "button-primary-1",
};

const heading32Data = {
    children: "What‘s a “merge”?",
};

const heading33Data = {
    children: "Roadmap 1.0",
    className: "heading-6",
};

const roadmapBlock1Data = {
    sellout: "10% SELLOUT",
    description: "The gamification of merging our song/collection begins, our project is validated.",
    event: "FIRST 500 MINTERS RECEIVE FREE DR.EAMS OG MINT T-SHIRT",
};

const roadmapBlock2Data = {
    sellout: "25% SELLOUT",
    description: <>Non-Profit Record Label established for <br />musician projects in need of $$ support.</>,
    event: "EPONYM RAFFLE FOR MINTERS",
    className: "roadmap-block-1",
};

const roadmapBlock3Data = {
    sellout: "50% SELLOUT",
    description: <>Project hires music marketing team for <br />TV/film/ad placement of song. <br />IRL concerts for holders.</>,
    event: "100% SONG ROYALTIES WILL BE USED TO BENEFIT THE COMMUNITY",
    className: "roadmap-block-2",
};

const roadmapBlock4Data = {
    sellout: "75% SELLOUT",
    description: <>Dr.Eams legacy! 4 songs ft. new artists to be released as their own collection with OG <br />exclusivity to first gen holders. <br />New collection every 6 months for 2 years. Beyond that, we plan to evolve alongside you.</>,
    event: "GALAXY WARRIOR RAFFLE FOR HOLDERS",
    className: "roadmap-block-3",
};

const roadmapBlock5Data = {
    sellout: "100% SELLOUT",
    description: "Metaverse Land purchased with tentative plans to create a dive bar music venue to host DIY concerts.",
    event: <>+5ETH GIVEAWAYS<br />WAGMI</>,
    className: "roadmap-block-4",
};

const heading34Data = {
    children: "Core Team",
    className: "heading-7",
};

const group19Data = {
    name: "Anthony “Oz” Oslund",
    title: "FOUNDER/CREATIVE DIRECTOR",
};

const upper3Data = {
    img: "/img/img@2x.png",
    group1Props: group19Data,
};

const statedefault217Data = {
    className: "",
};

const iconyes6Data = {
    icon: "/img/icon@2x.png",
    statedefault2Props: statedefault217Data,
};

const biono9Data = {
    className: "team-member-tw-1",
    upperProps: upper3Data,
    iconyesProps: iconyes6Data,
};

const group110Data = {
    name: "David Kozlovksy",
    title: "LEAD DIGITAL ARTIST",
};

const upper4Data = {
    img: "/img/img-1@2x.png",
    group1Props: group110Data,
};

const statedefault218Data = {
    className: "",
};

const iconyes7Data = {
    icon: "/img/icon-1@2x.png",
    statedefault2Props: statedefault218Data,
};

const biono10Data = {
    className: "team-member-ins",
    upperProps: upper4Data,
    iconyesProps: iconyes7Data,
};

const group111Data = {
    name: "Ryan Meyers",
    title: "LEAD DEVELOPER",
};

const upper5Data = {
    img: "/img/img-2@2x.png",
    group1Props: group111Data,
};

const statedefault219Data = {
    className: "",
};

const iconyes8Data = {
    icon: "/img/icon@2x.png",
    statedefault2Props: statedefault219Data,
};

const biono11Data = {
    className: "team-member-tw-2",
    upperProps: upper5Data,
    iconyesProps: iconyes8Data,
};

const group112Data = {
    name: "Chris McDaniel",
    title: ".GIF ARTIST",
};

const upper6Data = {
    img: "/img/img-19@2x.png",
    group1Props: group112Data,
};

const statedefault220Data = {
    className: "",
};

const iconyes9Data = {
    icon: "/img/icon-1@2x.png",
    statedefault2Props: statedefault220Data,
};

const biono12Data = {
    className: "team-member-ins-1",
    upperProps: upper6Data,
    iconyesProps: iconyes9Data,
};

const group113Data = {
    name: "Adam K",
    title: "CYBERSECURITY",
    className: "",
};

const statedefault221Data = {
    className: "button-10",
};

const iconno12Data = {
    statedefault2Props: statedefault221Data,
};

const biono32Data = {
    img: "/img/img-20@2x.png",
    className: "team-member-def-1",
    group1Props: group113Data,
    iconnoProps: iconno12Data,
};

const group114Data = {
    name: "Tishana “Ash” Hinds",
    title: "COMMUNITY BUILDER",
};

const statedefault222Data = {
    className: "",
};

const iconyes10Data = {
    icon: "/img/icon@2x.png",
    statedefault2Props: statedefault222Data,
};

const biono92Data = {
    img: "/img/img-21@2x.png",
    group1Props: group114Data,
    iconyesProps: iconyes10Data,
};

const heading35Data = {
    children: "Musicians",
    className: "heading-8",
};

const group115Data = {
    name: "dr. ill",
    title: "GUITAR",
    className: "group-1-8",
};

const upper22Data = {
    img: "/img/img-6@2x.png",
    group1Props: group115Data,
};

const statedefault223Data = {
    className: "labelreadmore-1",
};

const iconno13Data = {
    className: "bottom-bar-19",
    statedefault2Props: statedefault223Data,
};

const biono42Data = {
    className: "team-musician-1",
    upper2Props: upper22Data,
    iconnoProps: iconno13Data,
};

const group116Data = {
    name: "dr. ums",
    title: "PLAYS THE DRUMS",
    className: "group-1-9",
};

const upper23Data = {
    img: "/img/img-7@2x.png",
    group1Props: group116Data,
};

const statedefault224Data = {
    className: "button-11",
};

const iconno14Data = {
    className: "bottom-bar-20",
    statedefault2Props: statedefault224Data,
};

const biono102Data = {
    upper2Props: upper23Data,
    iconnoProps: iconno14Data,
};

const group1210Data = {
    name: "dr. ape",
    title: "BARITONE OPERA SINGER",
    className: "group-1-17",
};

const upper32Data = {
    img: "/img/img-8@2x.png",
    group12Props: group1210Data,
};

const statedefault225Data = {
    className: "button-12",
};

const iconno15Data = {
    className: "bottom-bar-21",
    statedefault2Props: statedefault225Data,
};

const biono112Data = {
    upper3Props: upper32Data,
    iconnoProps: iconno15Data,
};

const group1211Data = {
    name: "dr. ooling",
    title: "LEAD VOCALS",
    className: "group-1-18",
};

const upper33Data = {
    img: "/img/img-25@2x.png",
    group12Props: group1211Data,
};

const statedefault226Data = {
    className: "button-13",
};

const iconno16Data = {
    className: "bottom-bar-22",
    statedefault2Props: statedefault226Data,
};

const biono122Data = {
    spanText1: "fun fact ",
    spanText4: "Licensed attorney, brews his own kombucha",
    upper3Props: upper33Data,
    iconnoProps: iconno16Data,
};

const group1212Data = {
    name: "dr. ips",
    title: "VIOLIN",
    className: "group-1-19",
};

const upper34Data = {
    img: "/img/img-26@2x.png",
    group12Props: group1212Data,
};

const statedefault227Data = {
    className: "button-14",
};

const iconno17Data = {
    className: "bottom-bar-23",
    statedefault2Props: statedefault227Data,
};

const biono123Data = {
    spanText1: "worked with ",
    spanText4: "Belle & Sebastian, Dessa, Jeremy Messersmith",
    upper3Props: upper34Data,
    iconnoProps: iconno17Data,
};

const group1213Data = {
    name: "dr. one",
    title: "SYNTH VOCALS",
    className: "group-1-20",
};

const statedefault228Data = {
    className: "button-15",
};

const iconno18Data = {
    className: "bottom-bar-24",
    statedefault2Props: statedefault228Data,
};

const biono13Data = {
    img: "/img/img-27@2x.png",
    line: "/img/line-5@2x.png",
    spanText1: "fun fact ",
    spanText2: " ",
    spanText3: " ",
    spanText4: "Former band’s album was 1 of 11 to get perfect 10 on Pitchfork",
    group12Props: group1213Data,
    iconnoProps: iconno18Data,
};

const group1214Data = {
    name: "dr. ugs",
    title: "SYNTH BASS/SYNTH",
};

const upper429Data = {
    group12Props: group1214Data,
};

const statedefault229Data = {
    className: "button-16",
};

const iconno19Data = {
    className: "bottom-bar-25",
    statedefault2Props: statedefault229Data,
};

const biono76Data = {
    spanText1: "worked with",
    spanText4: "Kansas Plates, Good Doom, Pitstop, Black Market Brass",
    upper42Props: upper429Data,
    iconnoProps: iconno19Data,
};

const group1215Data = {
    name: "dr. izzle",
    title: "VOCAL SAMPLE",
};

const upper4210Data = {
    group12Props: group1215Data,
};

const statedefault230Data = {
    className: "button-17",
};

const iconno20Data = {
    className: "bottom-bar-26",
    statedefault2Props: statedefault230Data,
};

const biono77Data = {
    spanText1: "worked with",
    spanText4: "Solid Gold, Gayngs",
    className: "team-musician-8",
    upper42Props: upper4210Data,
    iconnoProps: iconno20Data,
};

const group1216Data = {
    name: "dr. ying",
    title: "HARMONIES/BACKGROUND VOX",
};

const upper4211Data = {
    group12Props: group1216Data,
};

const statedefault231Data = {
    className: "button-18",
};

const iconno21Data = {
    className: "bottom-bar-27",
    statedefault2Props: statedefault231Data,
};

const biono83Data = {
    upper42Props: upper4211Data,
    iconnoProps: iconno21Data,
};

const group1217Data = {
    name: "dr. ink",
    title: "SONGWRITER/PRODUCER/GUITAR",
};

const upper4212Data = {
    group12Props: group1217Data,
};

const statedefault232Data = {
    className: "button-19",
};

const iconno22Data = {
    className: "bottom-bar-28",
    statedefault2Props: statedefault232Data,
};

const biono84Data = {
    upper42Props: upper4212Data,
    iconnoProps: iconno22Data,
};

const heading36Data = {
    children: "FAQ",
    className: "heading-9",
};

const questionBlock1Data = {
    question: "How much does it cost to mint?",
};

const stateclosed22Data = {
    questionBlockProps: questionBlock1Data,
};

const questionBlock2Data = {
    question: "When is mint?",
};

const stateclosed23Data = {
    className: "faq-9",
    questionBlockProps: questionBlock2Data,
};

const questionBlock3Data = {
    question: "Who are the musicians involved in this project?",
};

const stateclosed24Data = {
    className: "faq-10",
    questionBlockProps: questionBlock3Data,
};

const questionBlock4Data = {
    question: "What is the inspiration?",
};

const stateclosed25Data = {
    className: "faq-11",
    questionBlockProps: questionBlock4Data,
};

const questionBlock5Data = {
    question: "How are you incorporating music into the NFTs?",
};

const stateclosed26Data = {
    className: "faq-12",
    questionBlockProps: questionBlock5Data,
};

const questionBlock6Data = {
    question: "What is the merge?",
};

const stateclosed27Data = {
    className: "faq-13",
    questionBlockProps: questionBlock6Data,
};

const fAQFrame1Data = {
    stateclosed21Props: stateclosed22Data,
    stateclosed22Props: stateclosed23Data,
    stateclosed23Props: stateclosed24Data,
    stateclosed24Props: stateclosed25Data,
    stateclosed25Props: stateclosed26Data,
    stateclosed26Props: stateclosed27Data,
};

const desktopData = {
    overlapGroup2: "/img/01---home----desktop-1@1x.png",
    cloudBg: "/img/cloud-bg-1@1x.svg",
    nftDreamsGif2: "/img/nft-dreams-gif.gif",
    tapIntoTheMagicOfTheEveryday: <>Tap into the magic<br />        of the everyday</>,
    drEamsIsAGorilla: "Dr.Eams is a Gorillaz-style music collective releasing their debut song as the first mergeable music/PFP project on the blockchain",
    spanText1: "A merge can occur if you hold 3 or more ",
    spanText2: "consecutive",
    spanText3: <> sections of the song (e.g., sections 1, 2, &amp; 3 or sections 6, 7, &amp; 8). The merge will be a fusion of your NFTs to create a longer section of the song and your art will come to life as a .gif. <br />For example, if you merge 3 NFTs your piece will now be 1 minute long and you will choose which of the 3 images you wish to bring to life as a .gif while the other 2 will be burned. <br />This creates a deflationary economy, adds an element of gamification to collecting, and will unlock new utility for holders that merge.</>,
    footer: "/img/footer-1.png",
    socialIcons: "/img/social-icons@2x.png",
    logoHead: "/img/logo-head-1@2x.png",
    overlapGroup1: "/img/navbar.png",
    head1: "/img/head-1@2x.png",
    drEams: "DR.EAMS",
    links: "/img/links@2x.png",
    icons: "/img/icons@2x.png",
    statedefaultProps: statedefault3Data,
    heading31Props: heading32Data,
    heading32Props: heading33Data,
    roadmapBlock1Props: roadmapBlock1Data,
    roadmapBlock2Props: roadmapBlock2Data,
    roadmapBlock3Props: roadmapBlock3Data,
    roadmapBlock4Props: roadmapBlock4Data,
    roadmapBlock5Props: roadmapBlock5Data,
    heading33Props: heading34Data,
    biono1Props: biono9Data,
    biono2Props: biono10Data,
    biono3Props: biono11Data,
    biono4Props: biono12Data,
    biono3Props2: biono32Data,
    biono9Props: biono92Data,
    heading34Props: heading35Data,
    biono4Props2: biono42Data,
    biono10Props: biono102Data,
    biono11Props: biono112Data,
    biono121Props: biono122Data,
    biono122Props: biono123Data,
    biono13Props: biono13Data,
    biono71Props: biono76Data,
    biono72Props: biono77Data,
    biono81Props: biono83Data,
    biono82Props: biono84Data,
    heading35Props: heading36Data,
    fAQFrameProps: fAQFrame1Data,
};

const logo2Data = {
    className: "logo-1",
};

const gNavIcons2Data = {
    className: "g-nav-icons-1",
};

const statedefault4Data = {
    className: "button-primary-2",
};

const whatsAMerge1Data = {
    children: "What is a “merge”?",
};

const whatsAMerge2Data = {
    children: "Roadmap 1.0",
    className: "h1-roadmap",
};

const roadmapBlock6Data = {
    sellout: "10% SELLOUT",
    description: "The gamification of merging our song/collection begins, our project is validated.",
    event: "FIRST 500 MINTERS RECEIVE FREE DR.EAMS OG MINT T-SHIRT",
    className: "roadmap-block-5",
};

const roadmapBlock7Data = {
    sellout: "25% SELLOUT",
    description: <>Non-Profit Record Label established for <br />musician projects in need of $$ support.</>,
    event: "EPONYM RAFFLE FOR MINTERS",
    className: "roadmap-block-6",
};

const roadmapBlock8Data = {
    sellout: "50% SELLOUT",
    description: <>Project hires music marketing team for <br />TV/film/ad placement of song. <br />IRL concerts for holders.</>,
    event: "100% SONG ROYALTIES WILL BE USED TO BENEFIT THE COMMUNITY",
    className: "roadmap-block-7",
};

const roadmapBlock9Data = {
    sellout: "75% SELLOUT",
    description: <>Dr.Eams legacy! 4 songs ft. new artists to be released as their own collection with OG <br />exclusivity to first gen holders. <br />New collection every 6 months for 2 years. Beyond that, we plan to evolve alongside you.</>,
    event: "GALAXY WARRIOR RAFFLE FOR HOLDERS",
    className: "roadmap-block-8",
};

const roadmapBlock10Data = {
    sellout: "100% SELLOUT",
    description: "Metaverse Land purchased with tentative plans to create a dive bar music venue to host DIY concerts.",
    event: <>+5ETH GIVEAWAYS<br />WAGMI</>,
    className: "roadmap-block-9",
};

const header1Data = {
    children: "Core Team",
};

const group117Data = {
    name: "Anthony “Oz” Oslund",
    title: "FOUNDER/CREATIVE DIRECTOR",
};

const upper7Data = {
    img: "/img/img@2x.png",
    group1Props: group117Data,
};

const statedefault233Data = {
    className: "",
};

const iconyes11Data = {
    icon: "/img/icon@2x.png",
    statedefault2Props: statedefault233Data,
};

const biono14Data = {
    className: "team-member-tw-3",
    upperProps: upper7Data,
    iconyesProps: iconyes11Data,
};

const group118Data = {
    name: "David Kozlovksy",
    title: "LEAD DIGITAL ARTIST",
};

const upper8Data = {
    img: "/img/img-1@2x.png",
    group1Props: group118Data,
};

const statedefault234Data = {
    className: "",
};

const iconyes12Data = {
    icon: "/img/icon-1@2x.png",
    statedefault2Props: statedefault234Data,
};

const biono15Data = {
    className: "team-member-ins-2",
    upperProps: upper8Data,
    iconyesProps: iconyes12Data,
};

const group119Data = {
    name: "Ryan Meyers",
    title: "LEAD DEVELOPER",
};

const upper9Data = {
    img: "/img/img-2@2x.png",
    group1Props: group119Data,
};

const statedefault235Data = {
    className: "",
};

const iconyes13Data = {
    icon: "/img/icon@2x.png",
    statedefault2Props: statedefault235Data,
};

const biono16Data = {
    className: "team-member-tw-4",
    upperProps: upper9Data,
    iconyesProps: iconyes13Data,
};

const group120Data = {
    name: "Chris McDaniel",
    title: ".GIF ARTIST",
    className: "group-1-10",
};

const statedefault236Data = {
    className: "button-secondary-5",
};

const iconyes14Data = {
    icon: "/img/img-21@2x.png",
    className: "bottom-bar-5",
    statedefault2Props: statedefault236Data,
};

const biono25Data = {
    img: "/img/img-21@2x.png",
    className: "team-member-ins-5",
    group1Props: group120Data,
    iconyesProps: iconyes14Data,
};

const group121Data = {
    name: "Adam K",
    title: "CYBERSECURITY",
    className: "group-1-11",
};

const statedefault237Data = {
    className: "button-20",
};

const iconno23Data = {
    statedefault2Props: statedefault237Data,
};

const biono33Data = {
    img: "/img/img-21@2x.png",
    className: "team-member-def-2",
    group1Props: group121Data,
    iconnoProps: iconno23Data,
};

const group130Data = {
    name: "Tishana “Ash” Hinds",
    title: "COMMUNITY BUILDER",
    className: "group-1-12",
};

const statedefault238Data = {
    className: "button-secondary-6",
};

const iconyes15Data = {
    icon: "/img/img-21@2x.png",
    className: "bottom-bar-6",
    statedefault2Props: statedefault238Data,
};

const biono26Data = {
    img: "/img/img-21@2x.png",
    className: "team-member-tw-7",
    group1Props: group130Data,
    iconyesProps: iconyes15Data,
};

const header2Data = {
    children: "Musicians",
};

const group131Data = {
    name: "dr. ill",
    title: "GUITAR",
    className: "group-1-13",
};

const upper24Data = {
    img: "/img/img-6@2x.png",
    group1Props: group131Data,
};

const statedefault239Data = {
    className: "labelreadmore-2",
};

const iconno24Data = {
    className: "bottom-bar-29",
    statedefault2Props: statedefault239Data,
};

const biono43Data = {
    className: "team-musician-2",
    upper2Props: upper24Data,
    iconnoProps: iconno24Data,
};

const group132Data = {
    name: "dr. ums",
    title: "PLAYS THE DRUMS",
    className: "group-1-14",
};

const upper25Data = {
    img: "/img/img-7@2x.png",
    group1Props: group132Data,
};

const statedefault240Data = {
    className: "button-21",
};

const iconno25Data = {
    className: "bottom-bar-30",
    statedefault2Props: statedefault240Data,
};

const biono103Data = {
    upper2Props: upper25Data,
    iconnoProps: iconno25Data,
};

const group1218Data = {
    name: "dr. ape",
    title: "BARITONE OPERA SINGER",
    className: "group-1-21",
};

const upper35Data = {
    img: "/img/img-8@2x.png",
    group12Props: group1218Data,
};

const statedefault241Data = {
    className: "button-22",
};

const iconno26Data = {
    className: "bottom-bar-31",
    statedefault2Props: statedefault241Data,
};

const biono113Data = {
    upper3Props: upper35Data,
    iconnoProps: iconno26Data,
};

const group1219Data = {
    name: "dr. ooling",
    title: "LEAD VOCALS",
};

const upper4213Data = {
    group12Props: group1219Data,
};

const statedefault242Data = {
    className: "button-23",
};

const iconno27Data = {
    className: "bottom-bar-32",
    statedefault2Props: statedefault242Data,
};

const biono78Data = {
    spanText1: "fun fact ",
    spanText4: "Licensed attorney, brews his own kombucha",
    upper42Props: upper4213Data,
    iconnoProps: iconno27Data,
};

const group1220Data = {
    name: "dr. ips",
    title: "VIOLIN",
};

const upper4214Data = {
    group12Props: group1220Data,
};

const statedefault243Data = {
    className: "button-24",
};

const iconno28Data = {
    className: "bottom-bar-33",
    statedefault2Props: statedefault243Data,
};

const biono79Data = {
    spanText1: "worked with ",
    spanText4: "Belle & Sebastian, Dessa, Jeremy Messersmith",
    upper42Props: upper4214Data,
    iconnoProps: iconno28Data,
};

const group1221Data = {
    name: "dr. one",
    title: "SYNTH VOCALS",
};

const upper4215Data = {
    group12Props: group1221Data,
};

const statedefault244Data = {
    className: "button-25",
};

const iconno29Data = {
    className: "bottom-bar-34",
    statedefault2Props: statedefault244Data,
};

const biono710Data = {
    spanText1: "fun fact ",
    spanText4: "Former band’s album was 1 of 11 to get perfect 10 on Pitchfork",
    upper42Props: upper4215Data,
    iconnoProps: iconno29Data,
};

const group1222Data = {
    name: "dr. ugs",
    title: "SYNTH BASS/SYNTH",
};

const upper4216Data = {
    group12Props: group1222Data,
};

const statedefault245Data = {
    className: "button-26",
};

const iconno30Data = {
    className: "bottom-bar-35",
    statedefault2Props: statedefault245Data,
};

const biono711Data = {
    spanText1: "worked with",
    spanText4: "Kansas Plates, Good Doom, Pitstop, Black Market Brass",
    upper42Props: upper4216Data,
    iconnoProps: iconno30Data,
};

const group1223Data = {
    name: "dr. izzle",
    title: "VOCAL SAMPLE",
};

const upper4217Data = {
    group12Props: group1223Data,
};

const statedefault246Data = {
    className: "button-27",
};

const iconno31Data = {
    className: "bottom-bar-36",
    statedefault2Props: statedefault246Data,
};

const biono712Data = {
    spanText1: "worked with",
    spanText4: "Solid Gold, Gayngs",
    className: "team-musician-9",
    upper42Props: upper4217Data,
    iconnoProps: iconno31Data,
};

const group1224Data = {
    name: "dr. ying",
    title: "HARMONIES/BACKGROUND VOX",
};

const upper4218Data = {
    group12Props: group1224Data,
};

const statedefault247Data = {
    className: "button-28",
};

const iconno32Data = {
    className: "bottom-bar-37",
    statedefault2Props: statedefault247Data,
};

const biono85Data = {
    upper42Props: upper4218Data,
    iconnoProps: iconno32Data,
};

const group1225Data = {
    name: "dr. ink",
    title: "SONGWRITER/PRODUCER/GUITAR",
};

const upper4219Data = {
    group12Props: group1225Data,
};

const statedefault248Data = {
    className: "button-29",
};

const iconno33Data = {
    className: "bottom-bar-38",
    statedefault2Props: statedefault248Data,
};

const biono86Data = {
    upper42Props: upper4219Data,
    iconnoProps: iconno33Data,
};

const header3Data = {
    children: "FAQ",
    className: "header-2",
};

const questionBlock7Data = {
    question: "How much does it cost to mint?",
};

const stateclosed28Data = {
    questionBlockProps: questionBlock7Data,
};

const questionBlock8Data = {
    question: "When is mint?",
};

const stateclosed29Data = {
    className: "faq-14",
    questionBlockProps: questionBlock8Data,
};

const questionBlock9Data = {
    question: "Who are the musicians involved in this project?",
};

const stateclosed210Data = {
    className: "faq-15",
    questionBlockProps: questionBlock9Data,
};

const questionBlock10Data = {
    question: "What is the inspiration?",
};

const stateclosed211Data = {
    className: "faq-16",
    questionBlockProps: questionBlock10Data,
};

const questionBlock11Data = {
    question: "How are you incorporating music into the NFTs?",
};

const stateclosed212Data = {
    className: "faq-17",
    questionBlockProps: questionBlock11Data,
};

const questionBlock12Data = {
    question: "What is the merge?",
};

const stateclosed213Data = {
    className: "faq-18",
    questionBlockProps: questionBlock12Data,
};

const fAQFrame2Data = {
    className: "faq-frame-2",
    stateclosed21Props: stateclosed28Data,
    stateclosed22Props: stateclosed29Data,
    stateclosed23Props: stateclosed210Data,
    stateclosed24Props: stateclosed211Data,
    stateclosed25Props: stateclosed212Data,
    stateclosed26Props: stateclosed213Data,
};


const upper323Data = {
    className: "upper-9",
};

const button1Data = {
    children: "READ MORE",
};

const lower221Data = {
    icons: "/img/icons@2x.svg",
    buttonProps: button1Data,
};

const biono922Data = {
    lower2Props: upper323Data,
    lower2Props2: lower221Data,
};

const header32Data = {
    children: "Roadmap 1.0",
};

const header22Data = {
    header3Props: header32Data,
};

const roadmapText31Data = {
    sellout: "50% SELLOUT",
    establishRisingArt: <>Project hires music marketing team for TV/film/ad placement of song. <br />IRL concerts for holders.</>,
    eponymRaffleForMinters: "100% SONG ROYALTIES WILL BE REDISTRIBUTED TO HOLDERS (BEST PATHWAY TBD BY COMMUNITY/TEAM)",
};

const roadmapLg521Data = {
    roadmapText3Props: roadmapText31Data,
};

const roadmapText32Data = {
    sellout: "75% SELLOUT",
    establishRisingArt: <>Dr.Eams legacy! 4 songs ft. new artists to be released as their own collection with OG exclusivity to first gen holders. <br />New collection every 6 months for 2 years. Beyond that, we plan to evolve alongside you.</>,
    eponymRaffleForMinters: "GALAXY WARRIOR RAFFLE FOR HOLDERS",
};

const roadmapLg522Data = {
    roadmapText3Props: roadmapText32Data,
};

const roadmapLg5Data = {
    sellout: "100% SELLOUT",
    establishRisingArt: "Metaverse Land purchased with tentative plans to create a dive bar music Venue to host DIY concerts.",
    eponymRaffleForMinters: <>+5ETH GIVEAWAYS<br />WAGMI</>,
};

const header33Data = {
    children: "Core Team",
};

const header23Data = {
    className: "header-3",
    header3Props: header33Data,
};

const upper111Data = {
    img: "/img/img-16@2x.png",
    name: "oz  (anthony oslund)",
    title: "FOUNDER/CREATIVE DIRECTOR",
};

const button2Data = {
    children: "READ MORE",
};

const lower1Data = {
    icons: "/img/icons-5@2x.png",
    buttonProps: button2Data,
};

const biono242Data = {
    upper11Props: upper111Data,
    lowerProps: lower1Data,
};

const upper112Data = {
    img: "/img/img-1@2x.png",
    name: "david kozlovsky",
    title: "LEAD DIGITAL ARTIST",
};

const button3Data = {
    children: "READ MORE",
};

const lower222Data = {
    icons: "/img/icons-6@2x.png",
    className: "lower-1",
    buttonProps: button3Data,
};

const biono222Data = {
    upper11Props: upper112Data,
    lower2Props: lower222Data,
};

const upper113Data = {
    img: "/img/img-18@2x.png",
    name: "ryan meyers",
    title: "LEAD DEVELOPER",
};

const button4Data = {
    children: "READ MORE",
};

const lower2Data = {
    icons: "/img/icons-5@2x.png",
    buttonProps: button4Data,
};

const biono243Data = {
    className: "team-core-4",
    upper11Props: upper113Data,
    lowerProps: lower2Data,
};

const button5Data = {
    children: "READ MORE",
};

const lower223Data = {
    icons: "/img/icons-6@2x.png",
    className: "lower-2",
    buttonProps: button5Data,
};

const biono322Data = {
    img: "/img/img-3@2x.png",
    lower2Props: lower223Data,
};

const upper114Data = {
    img: "/img/img-20@2x.png",
    name: "adam k",
    title: "CYBERSECURITY",
};

const button6Data = {
    children: "READ MORE",
    className: "button-33",
};

const lower31Data = {
    buttonProps: button6Data,
};

const biono422Data = {
    upper11Props: upper114Data,
    lower3Props: lower31Data,
};

const upper115Data = {
    img: "/img/img-21@2x.png",
    name: "tishana “ash” hinds",
    title: "COMMUNITY MANAGER",
};

const button7Data = {
    children: "READ MORE",
};

const lower4Data = {
    icons: "/img/icons-5@2x.png",
    buttonProps: button7Data,
};

const biono244Data = {
    className: "team-core-5",
    upper11Props: upper115Data,
    lowerProps: lower4Data,
};

const header34Data = {
    children: "Musicians",
};

const header24Data = {
    className: "header-4",
    header3Props: header34Data,
};

const button8Data = {
    children: "READ MORE",
    className: "button-34",
};

const lower32Data = {
    buttonProps: button8Data,
};

const biono521Data = {
    img: "/img/img-22@2x.png",
    name: "dr. ill",
    title: "GUITAR",
    line: "/img/line@2x.png",
    spanText4: "Bon Iver, John Prine, Eyedea & Abilities, Andrew Bird",
    lower3Props: lower32Data,
};

const button9Data = {
    children: "READ MORE",
    className: "button-35",
};

const lower33Data = {
    buttonProps: button9Data,
};

const biono522Data = {
    img: "/img/img-23@2x.png",
    name: "dr. ums",
    title: "PLAYS THE DRUMS",
    line: "/img/line@2x.png",
    spanText4: "Taylor Swift, Bon Iver, Eyedea & Abilities",
    className: "team-musician-16",
    lower3Props: lower33Data,
};

const button10Data = {
    children: "READ MORE",
    className: "button-36",
};

const lower34Data = {
    buttonProps: button10Data,
};

const biono62Data = {
    img: "/img/img-24@2x.png",
    line: "/img/line@2x.png",
    lower3Props: lower34Data,
};

const upper222Data = {
    img: "/img/img-25@2x.png",
    name: "dr. ooling",
    title: "LEAD VOCALS",
    spanText1: "fun fact ",
    spanText4: "Licensed attorney, brews his own kombucha",
    className: "",
};

const button11Data = {
    children: "READ MORE",
    className: "button-37",
};

const lower35Data = {
    buttonProps: button11Data,
};

const biono722Data = {
    upper2Props: upper222Data,
    lower3Props: lower35Data,
};

const upper223Data = {
    img: "/img/img-26@2x.png",
    name: "dr. ips",
    title: "VIOLIN",
    spanText1: "worked with ",
    spanText4: "Belle & Sebastian, Dessa, Jeremy Messersmith",
    className: "",
};

const button12Data = {
    children: "READ MORE",
    className: "button-38",
};

const lower36Data = {
    buttonProps: button12Data,
};

const biono723Data = {
    upper2Props: upper223Data,
    lower3Props: lower36Data,
};

const upper224Data = {
    img: "/img/img-11@2x.png",
    name: "dr. one",
    title: "SYNTH VOCALS",
    spanText1: "fun fact ",
    spanText4: "Former band’s album was 1 of 11 to get perfect 10 on Pitchfork",
    className: "",
};

const button13Data = {
    children: "READ MORE",
    className: "button-39",
};

const lower37Data = {
    buttonProps: button13Data,
};

const biono724Data = {
    upper2Props: upper224Data,
    lower3Props: lower37Data,
};

const upper225Data = {
    img: "/img/img-12@2x.png",
    name: "dr. ugs",
    title: "SYNTH BASS/SYNTH",
    spanText1: "worked with",
    spanText4: "Kansas Plates, Good Doom, Pitstop, Black Market Brass",
    className: "",
};

const button14Data = {
    children: "READ MORE",
    className: "button-40",
};

const lower38Data = {
    buttonProps: button14Data,
};

const biono725Data = {
    upper2Props: upper225Data,
    lower3Props: lower38Data,
};

const upper226Data = {
    img: "/img/img-13@2x.png",
    name: "dr. izzle",
    title: "VOCAL SAMPLE",
    spanText1: "worked with",
    spanText4: "Solid Gold, Gayngs",
    className: "upper-16",
};

const button15Data = {
    children: "READ MORE",
    className: "button-41",
};

const lower39Data = {
    buttonProps: button15Data,
};

const biono726Data = {
    className: "team-musician-20",
    upper2Props: upper226Data,
    lower3Props: lower39Data,
};

const button16Data = {
    children: "READ MORE",
    className: "button-42",
};

const lower310Data = {
    buttonProps: button16Data,
};

const biono822Data = {
    img: "/img/img-30@2x.png",
    name: "dr. ying",
    title: "HARMONIES/BACKGROUND VOX",
    line: "/img/line@2x.png",
    lower3Props: lower310Data,
};

const button17Data = {
    children: "READ MORE",
    className: "button-43",
};

const lower311Data = {
    buttonProps: button17Data,
};

const biono823Data = {
    img: "/img/img-31@2x.png",
    name: "dr. ink",
    title: "SONGWRITER/PRODUCER/GUITAR",
    line: "/img/line@2x.png",
    className: "team-musician-22",
    lower3Props: lower311Data,
};

const header35Data = {
    children: "FAQ",
};

const header25Data = {
    header3Props: header35Data,
};

const openyes1Data = {
    blocktitle: "How much does it cost to mint?",
    dFaqIcons: "/img/d---faq---icons@2x.png",
    blocktext: <>Presale Mint @ .06ETH<br />Public Mint @ .08ETH</>,
};

const openyes2Data = {
    blocktitle: "When is mint?",
    dFaqIcons: "/img/d---faq---icons-1@2x.png",
    blocktext: "Date TBD, targeting early-mid April. Collection size: 6,000 NFT’s",
    className: "faq-block-1",
};

const openyes3Data = {
    blocktitle: "Who are the musicians involved in this project?",
    dFaqIcons: "/img/d---faq---icons-2@2x.png",
    blocktext: "There are TEN musicians who collaborated on this song. Ranging from talented unknowns to people who have performed/recorded with Bon Iver, Andrew Bird, Taylor Swift, Eyedea & Abilities + more. One of our musicians released an album that is 1 of 11 to ever receive a perfect score on Pitchfork.",
    className: "faq-block-2",
};

const openyes4Data = {
    blocktitle: "What is the inspiration?",
    dFaqIcons: "/img/d---faq---icons-3@2x.png",
    blocktext: <>Much of our inspiration comes from ideas of Terence Mckenna. He once told a story while terminally ill, where he was so tapped into the wonders of our world that he could be reduced to tears from the beauty of seeing an ant walking by. <br />This is the type of life goal we strive to tap into! We plan to build a community of music/art lovers and find ways together to tap into the magic of everyday living.</>,
    className: "faq-block-3",
};

const openyes5Data = {
    blocktitle: "How are you incorporating music into the NFTs?",
    dFaqIcons: "/img/d---faq---icons-4@2x.png",
    blocktext: <>Our song is ~4 minutes long. Each NFT will feature a 20 second section of the song and each section will act as its own “trait”. There will be 12 sections in total, and we’ll be incentivizing holders to collect different parts of the song to “merge” them. <br />There is no rarity amongst sections, each section will have an equal amount of NFTs (500 for each section), however it is likely certain parts of the song will be more sought after.</>,
    className: "faq-block-4",
};

const openyes6Data = {
    blocktitle: "What is the “merge”?",
    dFaqIcons: "/img/d---faq---icons-4@2x.png",
    blocktext: <>The merge can occur if you hold 3 (or more) CONSECUTIVE sections of the song (ie: section 1, 2, &amp; 3 or sections 6, 7, &amp; 8). The merge will be a fusion of your NFTs to create a longer section of the song + your art will come to life as a .gif. <br />For example, if you merge 3 NFTs your piece will now be 1 minute long and you will choose which of the 3 images you wish to bring to life as a .gif while the other 2 will be burned. <br />This creates a deflationary economy, adds an element of gamification to collecting, and will unlock new utility for holders that merge.</>,
    className: "faq-block-5",
};

const dFAQ2Data = {
    openyes1Props: openyes1Data,
    openyes2Props: openyes2Data,
    openyes3Props: openyes3Data,
    openyes4Props: openyes4Data,
    openyes5Props: openyes5Data,
    openyes6Props: openyes6Data,
};

const contentData = {
    footer: "/img/footer-5@1x.png",
    header21Props: header22Data,
    roadmapLg51Props: roadmapLg521Data,
    roadmapLg52Props: roadmapLg522Data,
    roadmapLgProps: roadmapLg5Data,
    header22Props: header23Data,
    biono241Props: biono242Data,
    biono2Props: biono222Data,
    biono242Props: biono243Data,
    biono3Props: biono322Data,
    biono4Props: biono422Data,
    biono243Props: biono244Data,
    header23Props: header24Data,
    biono51Props: biono521Data,
    biono52Props: biono522Data,
    biono6Props: biono62Data,
    biono71Props: biono722Data,
    biono72Props: biono723Data,
    biono73Props: biono724Data,
    biono74Props: biono725Data,
    biono75Props: biono726Data,
    biono81Props: biono822Data,
    biono82Props: biono823Data,
    header24Props: header25Data,
    dFAQ2Props: dFAQ2Data,
};

const logo3Data = {
    logoHead: "/img/logo-head@2x.png",
};

const mNavbarData = {
    logoProps: logo3Data,
};

