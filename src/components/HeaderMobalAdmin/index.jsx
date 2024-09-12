import React, { useState } from "react";

import menuImg from "../../assets/Menu.png";
import LogoAdmin from "../../assets/logo.png";
import Close from "../../assets/Close.png";

import { Container, Seach } from "./styles";

import InputHeader from "../InputHeader";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";

export const HeaderMobalAdmin = ({ estate, setEstate }) => {
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
          <Link to="/new">Criar prato</Link>
          <span onClick={haldleSigninOut}>Sair</span>
        </Seach>
      </nav>
      <button onClick={handleActive}>
        <img src={menuImg} alt="" />
      </button>
      <div>
        <img src={LogoAdmin} alt="" />
        <span className="nameLogo">admin</span>
      </div>
      <div></div>
    </Container>
  );
};
