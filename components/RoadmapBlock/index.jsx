import React from "react";
import styled from "styled-components";
import {
  ValignTextMiddle,
  Border1pxStroke,
  BarlowBoldAthensGray16px,
  BodybodyLargeRegular,
  BarlowExtraBoldAthensGray488px,
} from "../../styledMixins";


function RoadmapBlock(props) {
  const { sellout, description, event, className, filterClass } = props;

  return (
    <RoadmapBlock1 className={`roadmap-block ${className || ""}`}>
      <HeadBlock src="/img/head.png" className={filterClass} />
      <Text className="text-1">
        <Sellout className="sellout-1">{sellout}</Sellout>
        <Description className="description-1">{description}</Description>
        <Event className="event-1">{event}</Event>
      </Text>
    </RoadmapBlock1>
  );
}

const HeadBlock = styled.img`
  height: 124px;
  width: 144px;
`;

const RoadmapBlock1 = styled.div`
  
  margin-left: 156px;
  width: 730px;
  height: 265px;
  display: flex;
  justify-content: center;
  
  border-radius: 2px;

  &.roadmap-block.roadmap-block-1 {
    margin-top: 8px;
  }

  &.roadmap-block.roadmap-block-2 {
    height: 317px;
    margin-top: 8px;
  }

  &.roadmap-block.roadmap-block-3 {
    height: 373px;
    margin-top: 8px;
  }

  &.roadmap-block.roadmap-block-4 {
    height: 315px;
    margin-top: 8px;
  }

  &.roadmap-block.roadmap-block-5 {
    margin-left: 52px;
  }

  &.roadmap-block.roadmap-block-6 {
    margin-left: 52px;
    margin-top: 8px;
  }

  &.roadmap-block.roadmap-block-7 {
    margin-left: 52px;
    height: 317px;
    margin-top: 8px;
  }

  &.roadmap-block.roadmap-block-8 {
    margin-left: 52px;
    height: 373px;
    margin-top: 8px;
  }

  &.roadmap-block.roadmap-block-9 {
    margin-left: 52px;
    height: 315px;
    margin-top: 8px;
  }
`;

const Text = styled.div`
  margin-top: 32px;
  width: 730px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 201px;
`;

const Sellout = styled.div`
  ${ValignTextMiddle}
  ${BarlowExtraBoldAthensGray488px}
            width: 360px;
  height: 59px;
  text-align: center;
  letter-spacing: -0.49px;
`;

const Description = styled.div`
  ${ValignTextMiddle}
  ${BodybodyLargeRegular}
            width: 442px;
  height: 56px;
  margin-top: 32px;
  font-weight: 500;
  color: var(--ltblue--100);
  text-align: center;
  line-height: 28px;
`;

const Event = styled.p`
  ${BarlowBoldAthensGray16px}
  min-height: 22px;
  margin-top: 32px;
  min-width: 504px;
  text-align: center;
  letter-spacing: 1.28px;
  line-height: 22px;
  white-space: nowrap;
`;

const Event1 = styled.div`
  ${BarlowBoldAthensGray16px}

  .roadmap-block.roadmap-block-1  & {
    min-width: 252px;
  }
`;

const Text1 = styled.div`
  .roadmap-block.roadmap-block-2 & {
    min-height: 253px;
  }
`;

const Description1 = styled.div`
  ${ValignTextMiddle}
  ${BodybodyLargeRegular}
            
            
           .roadmap-block.roadmap-block-2  & {
    height: 108px;
  }
`;

const Event2 = styled.p`
  ${BarlowBoldAthensGray16px}

  .roadmap-block.roadmap-block-2  & {
    min-width: 551px;
  }
`;

const Text2 = styled.div`
  .roadmap-block.roadmap-block-3 & {
    min-height: 309px;
  }
`;

const Description2 = styled.div`
  ${ValignTextMiddle}
  ${BodybodyLargeRegular}
            
            
           .roadmap-block.roadmap-block-3  & {
    height: 164px;
  }
`;

const Event3 = styled.p`
  ${BarlowBoldAthensGray16px}

  .roadmap-block.roadmap-block-3  & {
    min-width: 335px;
  }
`;

const Text3 = styled.div`
  .roadmap-block.roadmap-block-4 & {
    min-height: 251px;
  }
`;

const Description3 = styled.div`
  ${ValignTextMiddle}
  ${BodybodyLargeRegular}
            
            
           .roadmap-block.roadmap-block-4  & {
    height: 84px;
  }
`;

const Event4 = styled.div`
  ${BarlowBoldAthensGray16px}

  .roadmap-block.roadmap-block-4  & {
    min-height: 44px;
    min-width: 151px;
    white-space: unset;
  }
`;

const Event5 = styled.div`
  ${BarlowBoldAthensGray16px}

  .roadmap-block.roadmap-block-6  & {
    min-width: 252px;
  }
`;

const Text4 = styled.div`
  .roadmap-block.roadmap-block-7 & {
    min-height: 253px;
  }
`;

const Description4 = styled.div`
  ${ValignTextMiddle}
  ${BodybodyLargeRegular}
            
            
           .roadmap-block.roadmap-block-7  & {
    height: 108px;
  }
`;

const Event6 = styled.p`
  ${BarlowBoldAthensGray16px}

  .roadmap-block.roadmap-block-7  & {
    min-width: 551px;
  }
`;

const Text5 = styled.div`
  .roadmap-block.roadmap-block-8 & {
    min-height: 309px;
  }
`;

const Description5 = styled.div`
  ${ValignTextMiddle}
  ${BodybodyLargeRegular}
            
            
           .roadmap-block.roadmap-block-8  & {
    height: 164px;
  }
`;

const Event7 = styled.p`
  ${BarlowBoldAthensGray16px}

  .roadmap-block.roadmap-block-8  & {
    min-width: 335px;
  }
`;

const Text6 = styled.div`
  .roadmap-block.roadmap-block-9 & {
    min-height: 251px;
  }
`;

const Description6 = styled.div`
  ${ValignTextMiddle}
  ${BodybodyLargeRegular}
            
            
           .roadmap-block.roadmap-block-9  & {
    height: 84px;
  }
`;

const Event8 = styled.div`
  ${BarlowBoldAthensGray16px}

  .roadmap-block.roadmap-block-9  & {
    min-height: 44px;
    min-width: 151px;
    white-space: unset;
  }
`;

export default RoadmapBlock;
