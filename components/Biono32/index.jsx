import React from "react";
import Lower22 from "../Lower22";
import styled from "styled-components";
import {
  Border1pxMedgray100,
  BarlowsemicondensedSemiBoldWhite14p,
  BarlowsemicondensedBoldWhite24px,
} from "../../styledMixins";


function Biono32(props) {
  const { img, lower2Props } = props;

  return (
    <TeamCore>
      <Upper>
        <Img src={img} />
        <Name>chris mcdaniels</Name>
        <Title>.GIF ARTIST</Title>
      </Upper>
      <Lower22 icons={lower2Props.icons} className={lower2Props.className} buttonProps={lower2Props.buttonProps} />
    </TeamCore>
  );
}

const TeamCore = styled.div`
  ${Border1pxMedgray100}
  width: 245px;
  height: 336px;
  position: relative;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--firefly);
  box-shadow: 0px 1px 8px #00000040;
  mix-blend-mode: color-burn;
`;

const Upper = styled.div`
  margin-left: 24px;
  width: 197px;
  height: 199px;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  height: 120px;
  width: 120px;
  object-fit: cover;
`;

const Name = styled.div`
  ${BarlowsemicondensedBoldWhite24px}
  height: 29px;
  width: 197px;
  margin-top: 16px;
  text-align: center;
  letter-spacing: -0.25px;
`;

const Title = styled.div`
  ${BarlowsemicondensedSemiBoldWhite14p}
  height: 18px;
  width: 197px;
  margin-top: 16px;
  text-align: center;
  letter-spacing: 1px;
  line-height: 18px;
  white-space: nowrap;
`;

export default Biono32;
