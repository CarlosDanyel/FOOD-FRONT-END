import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { ContainerDisplaySectionSabores, Display } from "./styles";

import { Header } from "../../components/Header";

import imgBanner from "../../assets/fruts.png";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";

import { api } from "../../services/api";
import Cardapio from "../../components/Cardapio";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [carValue, setCarValue] = useState([]);
  const [pedidos, setPedido] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/pedidos?title=${search}`);
      setPedido(response.data);
    }
    fetchNotes();
  }, [search]);

  const refeicoes = pedidos.filter((item) => item.categoria === "Refeições");

  const sobremesa = pedidos.filter((item) => item.categoria === "Sobremesas");

  const bebidas = pedidos.filter((item) => item.categoria === "Bebidas");

  return (
    <>
      <div className="layoutApp">
        <Header carValue={carValue} estate={search} setEstate={setSearch} />
        <main>
          <Display>
            <ContainerDisplaySectionSabores>
              <div>
                <img src={imgBanner} alt="bolachas caindo" />
              </div>
              <div>
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
              </div>
            </ContainerDisplaySectionSabores>
            <Cardapio
              setCarValue={setCarValue}
              title={"Refeições"}
              type={refeicoes}
            />
            <Cardapio
              setCarValue={setCarValue}
              title={"Sobremesas"}
              type={sobremesa}
            />
            <Cardapio
              setCarValue={setCarValue}
              title={"Bebidas"}
              type={bebidas}
            />
          </Display>
        </main>
        <Footer />
      </div>
    </>
  );
};
