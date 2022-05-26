import React from "react";
import Stateclosed2 from "../Stateclosed2";
import styled from "styled-components";
import { Border1pxStroke } from "../../styledMixins";


function FAQFrame(props) {
  const {
    className,
    stateclosed21Props,
    stateclosed22Props,
    stateclosed23Props,
    stateclosed24Props,
    stateclosed25Props,
    stateclosed26Props,
  } = props;

  return (
    <FAQFrame1 className={`faq-frame-1 ${className || ""}`}>
      <FAQS className="faqs-1">
        <Surface className="surface-1">
          <List className="list-1">
            <Stateclosed2 questionBlockProps={stateclosed21Props.questionBlockProps} />
            <Stateclosed2
              className={stateclosed22Props.className}
              questionBlockProps={stateclosed22Props.questionBlockProps}
            />
            <Stateclosed2
              className={stateclosed23Props.className}
              questionBlockProps={stateclosed23Props.questionBlockProps}
            />
            <Stateclosed2
              className={stateclosed24Props.className}
              questionBlockProps={stateclosed24Props.questionBlockProps}
            />
            <Stateclosed2
              className={stateclosed25Props.className}
              questionBlockProps={stateclosed25Props.questionBlockProps}
            />
            <Stateclosed2
              className={stateclosed26Props.className}
              questionBlockProps={stateclosed26Props.questionBlockProps}
            />
          </List>
        </Surface>
      </FAQS>
    </FAQFrame1>
  );
}

const FAQFrame1 = styled.div`
  margin-left: 405px;
  width: 702px;
  display: flex;

  &.faq-frame-1.faq-frame-2 {
    margin-left: 66px;
  }
`;

const FAQS = styled.div`
  ${Border1pxStroke}
  width: 702px;
  height: 464px;
  display: flex;
  background-color: var(--blackcomponent-bg);
  border-radius: 2px;
  box-shadow: 0px 0px 8px #14212f66;
`;

const Surface = styled.div`
  margin-top: 16px;
  width: 654px;
  margin-left: 24px;
  display: flex;
`;

const List = styled.div`
  width: 654px;
  height: 432px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default FAQFrame;
