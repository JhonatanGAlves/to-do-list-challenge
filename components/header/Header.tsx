import React from "react";
import { ContainerHeader } from "./styles";
import rocketLogo from "../../assets/images/rocket-logo.svg";

export const Header = () => {
  return (
    <ContainerHeader>
      <a href="/">
        <img src={rocketLogo} alt="Logo do cabeçalho" />
      </a>
      <strong>
        to<span>do</span>
      </strong>
    </ContainerHeader>
  );
};
