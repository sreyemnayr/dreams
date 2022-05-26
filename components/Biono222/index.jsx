import React from "react";
import Upper11 from "../Upper11";
import Lower22 from "../Lower22";
import styled from "styled-components";
import { Border1pxMedgray100 } from "../../styledMixins";


function Biono222(props) {
  const { upper11Props, lower2Props } = props;

  return (
    <TeamCore>
      <Upper11 img={upper11Props.img} name={upper11Props.name} title={upper11Props.title} />
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

export default Biono222;
