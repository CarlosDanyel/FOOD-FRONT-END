import { HeartStraight } from "phosphor-react";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { ButtonAdicionaPedido } from "../ButtonAdicionaPedido";
import { ItemContainer } from "./styles";
import { api } from "../../services/api";

export const ItemCardapio = ({ lengthType, carrinhoStatus, data }) => {
  const navigate = useNavigate();
  const [favoriteBtnState, setFavoriteBtnState] = useState(false);

  useEffect(() => {
    const savedFavorite = localStorage.getItem(`favorite_${data.id}`);
    if (savedFavorite === "true") {
      setFavoriteBtnState(true);
    }
  }, [data.id]);

  function favoritePedido() {
    const newFavoriteState = !favoriteBtnState;
    setFavoriteBtnState(newFavoriteState);

    if (newFavoriteState) {
      localStorage.setItem(`favorite_${data.id}`, "true");
    } else {
      localStorage.removeItem(`favorite_${data.id}`);
    }
  }

  function handleDetails(id) {
    navigate(`/pedidos/${id}`);
  }

  const imgPedidoUrl = `${api.defaults.baseURL}/files/${data.ImagemPedido}`;

  return (
    <>
      <ItemContainer $lengthType={lengthType}>
        <button onClick={favoritePedido}>
          {!favoriteBtnState ? (
            <HeartStraight />
          ) : (
            <HeartStraight weight="fill" />
          )}
        </button>
        <div className="detailes" onClick={() => handleDetails(data.id)}>
          <div>
            <img src={imgPedidoUrl} alt={`imagem de um ${"Spaguetti Gambe"}`} />
          </div>
          <strong>
            {data.title}
            {" >"}
          </strong>
          <p>{data.description}</p>
          <span>R${data.valor}</span>
        </div>
        <form>
          <ButtonAdicionaPedido
            carrinhoStatus={carrinhoStatus}
            textBtn={"Incluir"}
          />
        </form>
      </ItemContainer>
    </>
  );
};
