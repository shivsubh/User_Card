import React from "react";
import { GetUserButton, Header, HeaderLogo } from "./component.style";

const Navbar = (props) => {
  return (
    <Header>
      <HeaderLogo>Advertyzement</HeaderLogo>
      <GetUserButton onClick={props.fetchUsers}>Get Users</GetUserButton>
    </Header>
  );
};

export default Navbar;
