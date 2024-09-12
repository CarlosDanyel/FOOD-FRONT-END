import { Minus, Plus } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { Container } from "./styles";

export const ButtonAdicionaPedido = ({ carrinhoStatus, textBtn }) => {
  const [quantidadeDoPedido, setQuantidadeDoPedido] = useState(1);
  const spanRef = useRef(null);

  const quantidadeMenorQueZero = quantidadeDoPedido <= 1;

  function CalculaQuantidade(calculo) {
    if (calculo === "+") {
      setQuantidadeDoPedido((prevState) => prevState + 1);
    } else {
      setQuantidadeDoPedido((prevState) => prevState - 1);
    }
  }

  useEffect(() => {
    const carrinhoLocal = JSON.parse(localStorage.getItem("@food:carrinho"));
    if (carrinhoLocal) {
      carrinhoStatus(carrinhoLocal);
    }
  }, [carrinhoStatus]);

  function handlePedidoInclui(event) {
    event.preventDefault();

    const quantidade = parseInt(spanRef.current.textContent, 10);

    carrinhoStatus((prevCarrinho) => {
      const novoCarrinho = [...prevCarrinho, { item: "Pedido", quantidade }];

      localStorage.setItem("@food:carrinho", JSON.stringify(novoCarrinho));

      return novoCarrinho;
    });
  }

  return (
    <Container>
      <div>
        <button
          disabled={quantidadeMenorQueZero}
          onClick={() => CalculaQuantidade("-")}
          type="button"
        >
          <Minus size={24} />
        </button>
        <span ref={spanRef}>
          {quantidadeDoPedido.toString().padStart(2, "0")}
        </span>
        <button onClick={() => CalculaQuantidade("+")} type="button">
          <Plus size={24} />
        </button>
      </div>
      <div>
        <button onClick={handlePedidoInclui}>{textBtn}</button>
      </div>
    </Container>
  );
};
