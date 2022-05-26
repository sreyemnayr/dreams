import React from "react";
import Button from "../Button";
import styled from "styled-components";


function Lower3(props) {
  const { buttonProps } = props;

  return (
    <Lower>
      <Button className={buttonProps.className}>{buttonProps.children}</Button>
    </Lower>
  );
}

const Lower = styled.div`
  height: 61px;
  align-self: center;
  position: relative;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  min-width: 131px;
`;

export default Lower3;
