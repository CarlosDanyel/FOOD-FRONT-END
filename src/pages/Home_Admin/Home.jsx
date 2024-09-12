import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {
  Container,
  ContainerDisplaySectionSabores,
  Display,
  MainContainer,
} from "./styles";

import imgBanner from "../../assets/fruts.png";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { HeaderAdmin } from "../../components/Header_admin";
import CardapioAdmin from "../../components/CardapioAdmin";

export const HomeAdmin = () => {
  const [search, setSearch] = useState("");
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
        <HeaderAdmin estate={search} setEstate={setSearch} />
        <MainContainer>
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
            <CardapioAdmin title={"Refeições"} type={refeicoes} />
            <CardapioAdmin title={"Sobremesas"} type={sobremesa} />
            <CardapioAdmin title={"Bebidas"} type={bebidas} />
          </Display>
        </MainContainer>
        <Footer />
      </div>
    </>
  );
};
