import logoFooter from "../../assets/logoFooter.png";
import { ContainerFooter } from "./styles";

export const Footer = () => {
  return (
    <ContainerFooter>
      <div>
        <img src={logoFooter} />
        <span>© 2023 - Todos os direitos reservados.</span>
      </div>
    </ContainerFooter>
  );
};
