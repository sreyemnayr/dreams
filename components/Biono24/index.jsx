import React from "react";
import Upper11 from "../Upper11";
import Lower from "../Lower";
import styled from "styled-components";
import { Border1pxMedgray100 } from "../../styledMixins";


function Biono24(props) {
  const { className, upper11Props, lowerProps } = props;

  return (
    <TeamCore className={`team-core-3 ${className || ""}`}>
      <Upper11 img={upper11Props.img} name={upper11Props.name} title={upper11Props.title} />
      <Lower icons={lowerProps.icons} buttonProps={lowerProps.buttonProps} />
    </TeamCore>
  );
}

const TeamCore = styled.div`
  ${Border1pxMedgray100}
  width: 245px;
  height: 336px;
  position: relative;
  margin-left: 38px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--firefly);
  box-shadow: 0px 1px 8px #00000040;
  mix-blend-mode: color-burn;

  &.team-core-3.team-core-4 {
    margin-left: 16px;
  }

  &.team-core-3.team-core-5 {
    margin-left: 16px;
  }
`;

export default Biono24;
