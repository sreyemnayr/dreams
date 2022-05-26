import React from "react";
import styled from "styled-components";
import { BarlowNormalAthensGray16px, BarlowsemicondensedBoldAthensGray24, ValignTextMiddle } from "../../styledMixins";


function Openyes(props) {
  const { blocktitle, dFaqIcons, blocktext, className } = props;

  return (
    <FaqBlock className={`faq-block ${className || ""}`}>
      <Surface className="surface-3">
        <Header className="header-5">
          <Title className="title-12">
            <BlockTitle className="block-title">{blocktitle}</BlockTitle>
            <DFAQIcons className="d-faq-icons" src={dFaqIcons} />
          </Title>
        </Header>
        <OverlapGroup className="overlap-group-3">
          <Divider className="divider"></Divider>
          <Text className="text-7">
            <BlockText className="block-text">{blocktext}</BlockText>
          </Text>
        </OverlapGroup>
      </Surface>
    </FaqBlock>
  );
}

const FaqBlock = styled.div`
  width: 672px;
  height: 159.00100708007812px;
  display: flex;

  &.faq-block.faq-block-1 {
    height: 133.00100708007812px;
    margin-top: 12px;
  }

  &.faq-block.faq-block-2 {
    height: 211.00100708007812px;
    margin-top: 12px;
  }

  &.faq-block.faq-block-3 {
    height: 253.00100708007812px;
    margin-top: 12px;
  }

  &.faq-block.faq-block-4 {
    height: 253.00100708007812px;
    margin-top: 12px;
  }

  &.faq-block.faq-block-5 {
    height: 321.0010070800781px;
    margin-top: 12px;
  }
`;

const Surface = styled.div`
  width: 672px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 159.00100708007812px;
`;

const Header = styled.div`
  width: 672px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 672px;
`;

const BlockTitle = styled.div`
  ${ValignTextMiddle}
  ${BarlowsemicondensedBoldAthensGray24}
            width: 630px;
  height: 32px;
  letter-spacing: 0;
  line-height: 31.7px;
  white-space: nowrap;
`;

const DFAQIcons = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 12px;
`;

const OverlapGroup = styled.div`
  width: 672px;
  height: 95px;
  position: relative;
`;

const Divider = styled.div`
  position: absolute;
  width: 672px;
  height: 3px;
  top: 0;
  left: 0;
  background-color: var(--white);
`;

const Text = styled.div`
  position: absolute;
  width: 672px;
  height: 92px;
  top: 3px;
  left: 0;
  display: flex;
  align-items: center;
`;

const BlockText = styled.p`
  ${BarlowNormalAthensGray16px}
  margin-top: -8px;
  height: 52px;
  margin-left: 2.38%;
  width: 640px;
  margin-right: 2.38%;
  flex: 1;
  letter-spacing: 0;
  line-height: 26px;
`;

const Surface1 = styled.div`
  .faq-block.faq-block-1 & {
    min-height: 133.00100708007812px;
  }
`;

const DFAQIcons1 = styled.img`
  .faq-block.faq-block-1 & {
    margin-top: -0.25px;
  }
`;

const OverlapGroup1 = styled.div`
  .faq-block.faq-block-1 & {
    height: 69px;
  }
`;

const Text1 = styled.div`
  .faq-block.faq-block-1 & {
    height: 66px;
  }
`;

const BlockText1 = styled.p`
  ${BarlowNormalAthensGray16px}

  .faq-block.faq-block-1  & {
    height: 26px;
    white-space: nowrap;
  }
`;

const Surface2 = styled.div`
  .faq-block.faq-block-2 & {
    min-height: 211.00100708007812px;
  }
`;

const DFAQIcons2 = styled.img`
  .faq-block.faq-block-2 & {
    margin-top: -0.25px;
  }
`;

const OverlapGroup2 = styled.div`
  .faq-block.faq-block-2 & {
    height: 147px;
  }
`;

const Text2 = styled.div`
  .faq-block.faq-block-2 & {
    height: 144px;
  }
`;

const BlockText2 = styled.p`
  ${BarlowNormalAthensGray16px}

  .faq-block.faq-block-2  & {
    height: 104px;
  }
`;

const Surface3 = styled.div`
  .faq-block.faq-block-3 & {
    min-height: 253.00100708007812px;
  }
`;

const DFAQIcons3 = styled.img`
  .faq-block.faq-block-3 & {
    margin-top: -0.25px;
  }
`;

const OverlapGroup3 = styled.div`
  .faq-block.faq-block-3 & {
    height: 189px;
  }
`;

const Text3 = styled.div`
  .faq-block.faq-block-3 & {
    height: 186px;
  }
`;

const BlockText3 = styled.p`
  ${BarlowNormalAthensGray16px}

  .faq-block.faq-block-3  & {
    height: 146px;
  }
`;

const Surface4 = styled.div`
  .faq-block.faq-block-4 & {
    min-height: 253.00100708007812px;
  }
`;

const DFAQIcons4 = styled.img`
  .faq-block.faq-block-4 & {
    margin-top: -0.25px;
  }
`;

const OverlapGroup4 = styled.div`
  .faq-block.faq-block-4 & {
    height: 189px;
  }
`;

const Text4 = styled.div`
  .faq-block.faq-block-4 & {
    height: 186px;
  }
`;

const BlockText4 = styled.p`
  ${BarlowNormalAthensGray16px}

  .faq-block.faq-block-4  & {
    height: 146px;
  }
`;

const Surface5 = styled.div`
  .faq-block.faq-block-5 & {
    min-height: 321.0010070800781px;
  }
`;

const DFAQIcons5 = styled.img`
  .faq-block.faq-block-5 & {
    margin-top: -0.25px;
  }
`;

const OverlapGroup5 = styled.div`
  .faq-block.faq-block-5 & {
    height: 257px;
  }
`;

const Text5 = styled.div`
  .faq-block.faq-block-5 & {
    height: 254px;
  }
`;

const BlockText5 = styled.p`
  ${BarlowNormalAthensGray16px}

  .faq-block.faq-block-5  & {
    height: 214px;
  }
`;

export default Openyes;
