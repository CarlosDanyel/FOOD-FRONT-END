import { Container } from "./styles.js";
import loginLogo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { InputContainer } from "../../components/inputComponent/index.jsx";
import { useState } from "react";
import { api } from "../../services/api.js";

export const LoginOut = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name || !email || !password) {
      return alert("Preencha corretamente todos os campos");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("usuario cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Nao foi possivel cadastrar");
        }
      });
  };

  return (
    <Container>
      <section>
        <div>
          <img src={loginLogo} alt="Logo" />
        </div>
        <form>
          <h1>Faça login</h1>
          <InputContainer
            nameLabel={"Seu nome"}
            placeholherName={"Exemplo: Maria da Silva"}
            type={"text"}
            id={"inputName"}
            setEstate={setName}
          />
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
            type={"email"}
            id={"senhaId"}
            setEstate={setPassword}
          />
          <button onClick={handleSignup} type="button">
            Criar conta
          </button>
          <Link to="/">Já tenho uma conta</Link>
        </form>
      </section>
    </Container>
  );
};
