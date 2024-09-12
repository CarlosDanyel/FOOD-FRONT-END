import React, { useEffect, useState } from "react";
import {
  Container,
  ContainerButton,
  ContainerEdicao,
  FormContainer,
} from "./styles";

import defaultImg from "../../assets/imgPedido.png";

import { HeaderAdmin } from "../../components/Header_admin";
import { CaretLeft, Plus, X } from "phosphor-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { InputContainer } from "../../components/inputComponent";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export const EditPrato = () => {
  const { updateProfile } = useAuth();

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [categoria, setCategoria] = useState("Refeições");
  const [description, setDescription] = useState("");

  const [ingredientes, setIngredientes] = useState([]);
  const [novoIngrediente, setNovoIngrediente] = useState("");
  const [preco, setPreco] = useState("");

  const [file, setFile] = useState(defaultImg);
  const [imgFile, setImgFile] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  const formDataFile = new FormData();

  const isDisabled =
    !name || !description || ingredientes.length === 0 || !preco;

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/pedidos/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  function addIng() {
    if (novoIngrediente == "") {
      alert("Campo vazio, passe o ingrediente primeiro");
    } else {
      setIngredientes((prevState) => [...prevState, novoIngrediente]);
      setNovoIngrediente("");
    }
  }

  function removeIng(deleted) {
    setIngredientes((prevState) => prevState.filter((ing) => ing !== deleted));
  }

  function handleFile(e) {
    const file = e.target.files[0];
    setImgFile(file);

    const imagePreview = URL.createObjectURL(file);
    setFile(imagePreview);
  }

  async function handleDelete() {
    await api.delete(`/pedidos/${params.id}`);

    alert("Nota deletado com suscesso");
    navigate("/");
  }

  async function handleSubmit() {
    formDataFile.append("pedidoUrl", imgFile);

    await api.put(`/pedidos/${params.id}`, {
      description,
      categoria,
      title: name,
      ingredients: ingredientes,
      valor: preco,
    });

    await api.patch(`/pedidos/${params.id}/urlImg`, formDataFile);
    alert("Nota criada com suscesso ");
    navigate("/");
  }

  return (
    <>
      <HeaderAdmin estate={search} setEstate={setSearch} />
      <Container>
        <section>
          <Link to={"/"}>
            <CaretLeft size={32} />
            Voltar
          </Link>
          <ContainerEdicao>
            <h1>Editar prato</h1>
            <FormContainer>
              <div>
                <fieldset className="fileContainer">
                  <label htmlFor="inputSubmit">Imagem do prato</label>
                  <div>
                    <input type="file" id="inputSubmit" onChange={handleFile} />
                    <span>{imgFile ? imgFile.name : "Selecione imagem"}</span>
                  </div>
                </fieldset>
                <InputContainer
                  nameLabel="Nome"
                  placeholherName="Ex.: Salada Ceasar"
                  type="text"
                  id="editNameText"
                  setEstate={setName}
                  value={name}
                />
                <fieldset>
                  <label htmlFor="category">Categoria</label>
                  <select
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                  >
                    <option>Refeições</option>
                    <option>Bebidas</option>
                    <option>Sobremesas</option>
                  </select>
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <label htmlFor="Ingredientes">Ingredientes</label>
                  <div>
                    {ingredientes.map((tag, index) => (
                      <span key={index}>
                        {tag}
                        <button type="button" onClick={() => removeIng(tag)}>
                          <X size={16} />
                        </button>
                      </span>
                    ))}
                    <div className="containerAddIng">
                      <input
                        id="Ingredientes"
                        type="text"
                        placeholder="Adicionar"
                        value={novoIngrediente}
                        onChange={(e) => setNovoIngrediente(e.target.value)}
                      />
                      <button onClick={addIng} type="button">
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="containerPreco">
                  <label htmlFor="preço">Preço</label>
                  <input
                    placeholder="R$ 00,00"
                    type="number"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                  />
                </fieldset>
              </div>
              <div>
                <fieldset>
                  <label htmlFor="description">Descrição</label>
                  <textarea
                    placeholder="A Salada César é uma opção refrescante para o verão."
                    name="Descrição"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </fieldset>
              </div>
              <ContainerButton>
                <button onClick={handleDelete} type="button">
                  Excluir prato
                </button>
                <button
                  disabled={isDisabled}
                  type="button"
                  onClick={handleSubmit}
                >
                  Salvar alterações
                </button>
              </ContainerButton>
            </FormContainer>
          </ContainerEdicao>
        </section>
      </Container>
      <Footer />
    </>
  );
};
