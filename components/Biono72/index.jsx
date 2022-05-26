import React from "react";
import Upper22 from "../Upper22";
import Lower3 from "../Lower3";
import styled from "styled-components";
import { Border1pxMedgray100 } from "../../styledMixins";


function Biono72(props) {
  const { className, upper2Props, lower3Props } = props;

  return (
    <TeamMusician className={`team-musician-18 ${className || ""}`}>
      <Upper22
        img={upper2Props.img}
        name={upper2Props.name}
        title={upper2Props.title}
        spanText1={upper2Props.spanText1}
        spanText4={upper2Props.spanText4}
        className={upper2Props.className}
      />
      <Lower3 buttonProps={lower3Props.buttonProps} />
    </TeamMusician>
  );
}

const TeamMusician = styled.div`
  ${Border1pxMedgray100}
  width: 245px;
  height: 402px;
  position: relative;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--firefly);
  box-shadow: 0px 1px 8px #00000040;
  mix-blend-mode: color-burn;

  &.team-musician-18.team-musician-20 {
    height: 385px;
  }
`;

export default Biono72;
