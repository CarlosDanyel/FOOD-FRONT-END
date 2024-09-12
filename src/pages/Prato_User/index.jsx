import { CaretLeft } from "phosphor-react";
import { Link, useParams } from "react-router-dom";

import { ButtonAdicionaPedido } from "../../components/ButtonAdicionaPedido";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, ContainerPrato } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

const Prato_User = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [carValue, setCarValue] = useState([]);

  const params = useParams();

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/pedidos/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  const imgPedidoUrl = `${api.defaults.baseURL}/files/${data.ImagemPedido}`;

  console.log(data);

  return (
    <>
      <div className="layoutApp">
        <Header carValue={carValue} estate={search} setEstate={setSearch} />
        <Container>
          <section>
            <Link to={"/"}>
              <CaretLeft size={32} />
              Voltar
            </Link>
            <ContainerPrato>
              <img src={imgPedidoUrl} />
              <div>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <ul>
                  {data.ingredientes &&
                    data.ingredientes.map((item) => (
                      <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
                <ButtonAdicionaPedido
                  carrinhoStatus={setCarValue}
                  textBtn={`"incluir ∙ R$"${data.valor}`}
                />
              </div>
            </ContainerPrato>
          </section>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Prato_User;
