import React from "react";
import styled from "styled-components";
import {
  BodybodyRegular,
  BarlowExtraBoldAthensGray312px,
  BarlowBoldAthensGray14px,
  Border1pxStroke,
  ValignTextMiddle,
} from "../../styledMixins";


function RoadmapBlockSm(props) {
  const { sellout, description, event, className } = props;

  return (
    <RoadmapBlockSm1 className={`roadmap-block-sm ${className || ""}`}>
      <Text className="text">
        <Sellout className="sellout">{sellout}</Sellout>
        <Description className="description">{description}</Description>
        <Event className="event">{event}</Event>
      </Text>
    </RoadmapBlockSm1>
  );
}

const RoadmapBlockSm1 = styled.div`
  ${Border1pxStroke}
  width: 414px;
  height: 206px;
  display: flex;
  justify-content: center;
  background-color: var(--blackcomponent-bg);
  box-shadow: 0px 0px 8px #14212f66;

  &.roadmap-block-sm.roadmap-block-sm-1 {
    height: 188px;
    margin-top: 8px;
  }

  &.roadmap-block-sm.roadmap-block-sm-2 {
    height: 244px;
    margin-top: 8px;
  }

  &.roadmap-block-sm.roadmap-block-sm-3 {
    height: 288px;
    margin-top: 8px;
  }

  &.roadmap-block-sm.roadmap-block-sm-4 {
    margin-top: 8px;
  }
`;

const Text = styled.div`
  width: 366px;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  align-items: flex-start;
  min-height: 206px;
`;

const Sellout = styled.div`
  ${ValignTextMiddle}
  ${BarlowExtraBoldAthensGray312px}
            width: 366px;
  height: 38px;
  text-align: center;
  letter-spacing: -0.31px;
`;

const Description = styled.p`
  ${ValignTextMiddle}
  ${BodybodyRegular}
            width: 366px;
  height: 44px;
  margin-top: 16px;
  font-weight: 500;
  color: var(--ltblue--100);
  text-align: center;
  line-height: 22px;
`;

const Event = styled.p`
  ${BarlowBoldAthensGray14px}
  width: 366px;
  min-height: 36px;
  margin-top: 16px;
  text-align: center;
  letter-spacing: 0.7px;
  line-height: 18px;
`;

const Text1 = styled.div`
  .roadmap-block-sm.roadmap-block-sm-1 & {
    min-height: 188px;
  }
`;

const Event1 = styled.div`
  ${BarlowBoldAthensGray14px}

  .roadmap-block-sm.roadmap-block-sm-1  & {
    min-height: 18px;
    white-space: nowrap;
  }
`;

const Text2 = styled.div`
  .roadmap-block-sm.roadmap-block-sm-2 & {
    min-height: 244px;
  }
`;

const Description1 = styled.p`
  ${ValignTextMiddle}
  ${BodybodyRegular}
            
            
           .roadmap-block-sm.roadmap-block-sm-2  & {
    height: 82px;
  }
`;

const Text3 = styled.div`
  .roadmap-block-sm.roadmap-block-sm-3 & {
    min-height: 288px;
  }
`;

const Description2 = styled.p`
  ${ValignTextMiddle}
  ${BodybodyRegular}
            
            
           .roadmap-block-sm.roadmap-block-sm-3  & {
    height: 126px;
  }
`;

export default RoadmapBlockSm;
