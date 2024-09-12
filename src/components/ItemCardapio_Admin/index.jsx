import { Pencil, PencilSimple } from "phosphor-react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { ItemContainer } from "./styles";
import { api } from "../../services/api";

export const ItemCardapioAdmin = ({ data }) => {
  const [favoriteBtnState, setFavoriteBtnState] = useState(false);
  const navigate = useNavigate();

  function favoritePedido() {
    setFavoriteBtnState(!favoriteBtnState);
  }

  const imgPedidoUrl = `${api.defaults.baseURL}/files/${data.ImagemPedido}`;

  function handleDetails(id) {
    navigate(`/prato/${id}`);
  }

  return (
    <>
      <ItemContainer>
        <div className="containerBtn" onClick={() => handleDetails(data.id)}>
          <button onClick={favoritePedido}>
            <PencilSimple size={30} />
          </button>
        </div>
        <div>
          <img src={imgPedidoUrl} alt={`imagem de um ${data.title}`} />
        </div>
        <strong>
          {data.title}
          {" >"}
        </strong>
        <p>{data.description}</p>
        <span>R${data.valor}</span>
      </ItemContainer>
    </>
  );
};
