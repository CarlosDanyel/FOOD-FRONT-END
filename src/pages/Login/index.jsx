import { Container } from "./styles.js";
import loginLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth.jsx";
import { useState } from "react";
import { InputContainer } from "../../components/inputComponent/index.jsx";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin } = useAuth();

  function handleSigninIn() {
    signin({ email, password });
  }

  return (
    <Container>
      <section>
        <div>
          <img src={loginLogo} alt="Logo" />
        </div>
        <form>
          <h1>Faça login</h1>
          <InputContainer
            nameLabel={"Email"}
            placeholherName={"Exemplo: exemplo@exemplo.com.br"}
            type={"email"}
            id={"inputEmailId"}
            setEstate={setEmail}
          />
          <InputContainer
            nameLabel={"Senha"}
            placeholherName={"No mínimo 6 caracteres"}
            type={"password"}
            id={"inputPassword"}
            setEstate={setPassword}
          />
          <button type="button" onClick={() => handleSigninIn()}>
            Entrar
          </button>
          <Link to="/loginUp">Criar uma conta</Link>
        </form>
      </section>
    </Container>
  );
};
