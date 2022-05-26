import React from "react";
import QuestionBlock from "../QuestionBlock";
import styled from "styled-components";


function Stateclosed2(props) {
  const { className, questionBlockProps } = props;

  return (
    <FAQ className={`faq-8 ${className || ""}`}>
      <QuestionBlock question={questionBlockProps.question} />
    </FAQ>
  );
}

const FAQ = styled.div`
  width: 654px;
  height: 62px;
  position: relative;
  display: flex;

  &.faq-8.faq-9 {
    margin-top: 12px;
  }

  &.faq-8.faq-10 {
    margin-top: 12px;
  }

  &.faq-8.faq-11 {
    margin-top: 12px;
  }

  &.faq-8.faq-12 {
    margin-top: 12px;
  }

  &.faq-8.faq-13 {
    margin-top: 12px;
  }

  &.faq-8.faq-14 {
    margin-top: 12px;
  }

  &.faq-8.faq-15 {
    margin-top: 12px;
  }

  &.faq-8.faq-16 {
    margin-top: 12px;
  }

  &.faq-8.faq-17 {
    margin-top: 12px;
  }

  &.faq-8.faq-18 {
    margin-top: 12px;
  }
`;

export default Stateclosed2;
