import React from "react";
import Logo3 from "../Logo3";
import styled from "styled-components";


function MNavbar(props) {
  const { mNavbar, links, icons, logoProps } = props;

  return (
    <MNavbar1 style={{ backgroundImage: `url(${mNavbar})` }}>
      <Logo3 logoHead={logoProps.logoHead} />
      <Nav>
        <Links src={links} />
        <Icons src={icons} />
      </Nav>
    </MNavbar1>
  );
}

const MNavbar1 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  z-index: 2;
  display: flex;
  box-shadow: 0px 1px 5px #00000040;
  background-size: cover;
  background-position: 50% 50%;
`;

const Nav = styled.div`
  width: 100%;
  margin-left: 501px;
  display: flex;
`;

const Links = styled.img`
  width: 303.5px;
  height: 48px;
  margin-left: -2.2px;
`;

const Icons = styled.img`
  margin-top: 10px;
  width: 118px;
  height: 28px;
  margin-left: 42.8px;
`;

export default MNavbar;
