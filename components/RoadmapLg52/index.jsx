import React from "react";
import RoadmapText3 from "../RoadmapText3";
import styled from "styled-components";


function RoadmapLg52(props) {
  const { roadmapText3Props } = props;

  return (
    <RoadmapLg>
      <RoadmapText3
        sellout={roadmapText3Props.sellout}
        establishRisingArt={roadmapText3Props.establishRisingArt}
        eponymRaffleForMinters={roadmapText3Props.eponymRaffleForMinters}
      />
    </RoadmapLg>
  );
}

const RoadmapLg = styled.div`
  margin-left: 13px;
  width: 1200px;
  height: 311px;
  position: relative;
  margin-top: 12px;
  display: flex;
  justify-content: center;
  background-color: var(--bunker);
  mix-blend-mode: multiply;
`;

export default RoadmapLg52;
