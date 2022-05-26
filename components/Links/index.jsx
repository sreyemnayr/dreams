import React from "react";
import styled from "styled-components";
import { BarlowBoldAthensGray18px } from "../../styledMixins";


function Links() {
  return (
    <Links1>
      <M2ndaryNav>
        <Roadmap>ROADMAP</Roadmap>
      </M2ndaryNav>
      <TheTeam>THE TEAM</TheTeam>
      <Faq>FAQ</Faq>
      <Place>CONTACT</Place>
    </Links1>
  );
}

const Links1 = styled.div`
  ${BarlowBoldAthensGray18px}
  height: 24px;
  width: 550px;
  margin-bottom: 61px;
  display: flex;
  align-items: center;
`;

const M2ndaryNav = styled.div`
  width: 90px;
  height: 16px;
  display: flex;
`;

const Roadmap = styled.div`
  ${BarlowBoldAthensGray18px}
  flex: 1;
  width: 90px;
  text-shadow: 0px 0px 6px #00000070;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 16px;
  white-space: nowrap;
`;

const TheTeam = styled.div`
  min-height: 16px;
  margin-left: 80px;
  min-width: 93px;
  text-shadow: 0px 0px 6px #00000070;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 16px;
  white-space: nowrap;
`;

const Faq = styled.div`
  min-height: 16px;
  margin-left: 80px;
  min-width: 35px;
  text-shadow: 0px 0px 6px #00000070;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 16px;
  white-space: nowrap;
`;

const Place = styled.div`
  width: 92px;
  min-height: 16px;
  margin-left: 80px;
  text-shadow: 0px 0px 6px #00000070;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 16px;
  white-space: nowrap;
`;

const Links2 = styled.div`
  ${BarlowBoldAthensGray18px}
  height: 24px;
  width: 550px;
  margin-bottom: 61px;
  display: flex;
  align-items: center;
`;

const M2ndaryNav1 = styled.div`
  width: 90px;
  height: 16px;
  display: flex;
`;

const Roadmap1 = styled.div`
  ${BarlowBoldAthensGray18px}
  flex: 1;
  width: 90px;
  text-shadow: 0px 0px 6px #00000070;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 16px;
  white-space: nowrap;
`;

const TheTeam1 = styled.div`
  min-height: 16px;
  margin-left: 80px;
  min-width: 93px;
  text-shadow: 0px 0px 6px #00000070;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 16px;
  white-space: nowrap;
`;

const Faq1 = styled.div`
  min-height: 16px;
  margin-left: 80px;
  min-width: 35px;
  text-shadow: 0px 0px 6px #00000070;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 16px;
  white-space: nowrap;
`;

const Place1 = styled.div`
  width: 92px;
  min-height: 16px;
  margin-left: 80px;
  text-shadow: 0px 0px 6px #00000070;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 16px;
  white-space: nowrap;
`;

export default Links;
