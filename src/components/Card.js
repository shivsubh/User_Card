import React from "react";
import { Avatar, CardStyled, Email, Name } from "./component.style";

const Card = (props) => {
  return (
    <CardStyled>
      <Avatar src={props.image} alt="user_image" />
      <Name>
        {props.firstName} {props.lastName}
      </Name>
      <Email href={`mailto:${props.email}`}>{props.email}</Email>
    </CardStyled>
  );
};

export default Card;
