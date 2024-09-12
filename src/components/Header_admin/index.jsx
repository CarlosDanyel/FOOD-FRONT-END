import { Receipt, SignOut } from "phosphor-react";

import Logo from "../../assets/logoadmin.png";
import { ContainerHeader, Logout, Navdesk, Seach } from "./styles";
import { useAuth } from "../../hooks/auth";

import InputHeader from "../InputHeader";
import { Link, useNavigate } from "react-router-dom";
import { HeaderMobalAdmin } from "../HeaderMobalAdmin";

export const HeaderAdmin = ({ setEstate, estate }) => {
  const { signinOut } = useAuth();
  const navigate = useNavigate();

  function haldleSigninOut() {
    signinOut();
    navigate("/");
  }
  return (
    <>
      <ContainerHeader>
        <HeaderMobalAdmin setEstate={setEstate} estate={estate} />
        <Navdesk>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <Seach $vericaState={estate}>
            <label className="sr-only" htmlFor="seach">
              Busque por pratos ou ingredientes
            </label>
            <InputHeader estate={estate} setEstate={setEstate} />
          </Seach>
          <Logout>
            <Link to="/new">Novo prato</Link>
            <button onClick={haldleSigninOut}>
              <SignOut size={32} />
            </button>
          </Logout>
        </Navdesk>
      </ContainerHeader>
    </>
  );
};
