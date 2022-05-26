import React from "react";
import styled from "styled-components";
import { BarlowBoldAthensGray20px, ValignTextMiddle } from "../../styledMixins";


function Stateclosed(props) {
  const { question, className } = props;

  return (
    <FAQ className={`faq-1 ${className || ""}`}>
      <QuestionBlock className="question-block">
        <Title className="title-2">
          <Question className="question">{question}</Question>
          <FAQicon className="fa-qicon" src="/img/faqicon-12@2x.png" />
        </Title>
      </QuestionBlock>
    </FAQ>
  );
}

const FAQ = styled.div`
  width: 336px;
  display: flex;

  &.faq-1.faq-2 {
    margin-top: 12px;
  }

  &.faq-1.faq-3 {
    margin-top: 12px;
  }

  &.faq-1.faq-4 {
    margin-top: 12px;
  }

  &.faq-1.faq-5 {
    margin-top: 12px;
  }

  &.faq-1.faq-6 {
    margin-top: 12px;
  }
`;

const QuestionBlock = styled.div`
  width: 336px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 336px;
`;

const Question = styled.div`
  ${ValignTextMiddle}
  ${BarlowBoldAthensGray20px}
            width: 294px;
  height: 24px;
  letter-spacing: -0.2px;
`;

const FAQicon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 12px;
`;

const QuestionBlock1 = styled.div`
  .faq-1.faq-3 & {
    height: 80px;
  }
`;

const Question1 = styled.div`
  ${ValignTextMiddle}
  ${BarlowBoldAthensGray20px}
            
            
           .faq-1.faq-3  & {
    height: 48px;
  }
`;

const QuestionBlock2 = styled.div`
  .faq-1.faq-6 & {
    height: 80px;
  }
`;

const Question2 = styled.div`
  ${ValignTextMiddle}
  ${BarlowBoldAthensGray20px}
            
            
           .faq-1.faq-6  & {
    width: 298px;
    height: 48px;
  }
`;

const FAQicon1 = styled.img`
  .faq-1.faq-6 & {
    margin-left: 8px;
  }
`;

export default Stateclosed;
