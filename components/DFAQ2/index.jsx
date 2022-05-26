import React from "react";
import Openyes from "../Openyes";
import styled from "styled-components";


function DFAQ2(props) {
  const { openyes1Props, openyes2Props, openyes3Props, openyes4Props, openyes5Props, openyes6Props } = props;

  return (
    <Faq>
      <Surface>
        <List>
          <Openyes
            blocktitle={openyes1Props.blocktitle}
            dFaqIcons={openyes1Props.dFaqIcons}
            blocktext={openyes1Props.blocktext}
          />
          <Openyes
            blocktitle={openyes2Props.blocktitle}
            dFaqIcons={openyes2Props.dFaqIcons}
            blocktext={openyes2Props.blocktext}
            className={openyes2Props.className}
          />
          <Openyes
            blocktitle={openyes3Props.blocktitle}
            dFaqIcons={openyes3Props.dFaqIcons}
            blocktext={openyes3Props.blocktext}
            className={openyes3Props.className}
          />
          <Openyes
            blocktitle={openyes4Props.blocktitle}
            dFaqIcons={openyes4Props.dFaqIcons}
            blocktext={openyes4Props.blocktext}
            className={openyes4Props.className}
          />
          <Openyes
            blocktitle={openyes5Props.blocktitle}
            dFaqIcons={openyes5Props.dFaqIcons}
            blocktext={openyes5Props.blocktext}
            className={openyes5Props.className}
          />
          <Openyes
            blocktitle={openyes6Props.blocktitle}
            dFaqIcons={openyes6Props.dFaqIcons}
            blocktext={openyes6Props.blocktext}
            className={openyes6Props.className}
          />
        </List>
      </Surface>
    </Faq>
  );
}

const Faq = styled.div`
  margin-left: 240px;
  width: 720px;
  height: 1454.006103515625px;
  display: flex;
  background-color: var(--dkblue--100);
  border-radius: 20px;
  border: 1px solid var(--dkblue80);
`;

const Surface = styled.div`
  margin-top: 32px;
  width: 672px;
  margin-left: 24px;
  display: flex;
  border-radius: 20px;
`;

const List = styled.div`
  width: 672px;
  height: 1390.006103515625px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default DFAQ2;
