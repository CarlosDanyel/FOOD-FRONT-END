import { Receipt, SignOut } from "phosphor-react";

import Logo from "../../assets/logo.png";
import { ContainerHeader, Logout, Navdesk, Seach } from "./styles";
import { useAuth } from "../../hooks/auth";

import InputHeader from "../InputHeader";
import { HeaderMobal } from "../HeaderMobal";

export const Header = ({ setEstate, estate, carValue }) => {
  const { signinOut } = useAuth();

  return (
    <ContainerHeader>
      <HeaderMobal carValue={carValue} setEstate={setEstate} estate={estate} />
      <Navdesk>
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
        <Seach $vericaState={estate}>
          <label className="sr-only" htmlFor="seach">
            Busque por pratos ou ingredientes
          </label>
          <InputHeader estate={estate} setEstate={setEstate} />
        </Seach>
        <Logout>
          <button>
            <Receipt size={26} />
            pedidos
            <span>{carValue ? `(${carValue.length})` : "(0)"}</span>
          </button>
          <button onClick={signinOut}>
            <SignOut size={32} />
          </button>
        </Logout>
      </Navdesk>
    </ContainerHeader>
  );
};
