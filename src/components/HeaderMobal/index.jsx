import React, { useState } from "react";

import menuImg from "../../assets/Menu.png";
import Logo from "../../assets/logo.png";
import LogoAdmin from "../../assets/logoadmin.png";
import Receipt from "../../assets/Receipt.png";
import Close from "../../assets/Close.png";

import { Container, Seach } from "./styles";

import InputHeader from "../InputHeader";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export const HeaderMobal = ({ estate, setEstate, carValue }) => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const { signinOut } = useAuth();

  function handleActive() {
    setActive(!active);
  }

  function haldleSigninOut() {
    signinOut();
    navigate("/");
  }

  return (
    <Container>
      <nav className={active ? "navbar navbarActive" : "navbar"}>
        <div>
          <button onClick={handleActive}>
            <img src={Close} alt="" />
          </button>
          <span>Menu</span>
        </div>
        <Seach $vericaState={estate}>
          <label className="sr-only" htmlFor="seach">
            Busque por pratos ou ingredientes
          </label>
          <InputHeader estate={estate} setEstate={setEstate} />
          <span onClick={haldleSigninOut}>Sair</span>
        </Seach>
      </nav>
      <button onClick={handleActive}>
        <img src={menuImg} alt="" />
      </button>
      <div>
        <img src={Logo} alt="" />
      </div>
      <div>
        <img src={Receipt} alt="" />
        <span className="carrinho">
          {carValue.length ? `${carValue.length}` : "0"}
        </span>
      </div>
    </Container>
  );
};
