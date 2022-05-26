import React from "react";
import styled from "styled-components";
import { BarlowBoldAthensGray24px, ValignTextMiddle } from "../../styledMixins";


function QuestionBlock(props) {
  const { question } = props;

  return (
    <QuestionBlock1>
      <Title>
        <Question>{question}</Question>
        <FAQicon src="/img/faqicon@2x.png" />
      </Title>
    </QuestionBlock1>
  );
}

const QuestionBlock1 = styled.div`
  width: 654px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 654px;
`;

const Question = styled.div`
  ${ValignTextMiddle}
  ${BarlowBoldAthensGray24px}
            width: 612px;
  height: 29px;
  letter-spacing: -0.24px;
`;

const FAQicon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 12px;
`;

const QuestionBlock2 = styled.div`
  width: 654px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title1 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 654px;
`;

const Question1 = styled.div`
  ${ValignTextMiddle}
  ${BarlowBoldAthensGray24px}
            width: 612px;
  height: 29px;
  letter-spacing: -0.24px;
`;

const FAQicon1 = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 12px;
`;

export default QuestionBlock;
