import React from "react";
import { 
  Button,
  Htag, 
  Ptag
} from "../components/index";

export default function Home() {
  return (
    <>
      <Htag tag='h1' color="black">Пиломатериалы во Владимире – ТК «Мир Дерева»</Htag>
      <Htag tag='h1' color="primary">Пиломатериалы во Владимире – ТК «Мир Дерева»</Htag>
      <Htag tag='h2' color="black">Пиломатериалы во Владимире</Htag>
      <Htag tag='h2' color="primary">Пиломатериалы во Владимире</Htag>
      <Htag tag='h3' color="black">Разновидности</Htag>
      <Htag tag='h3' color="primary">Разновидности</Htag>
      <Button appearance="orange">ПОДПИСАТЬСЯ</Button>
      <Ptag size="s" color="black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro ut impedit est error et suscipit, totam ratione commodi quidem iste facilis quam nulla iure recusandae delectus at? Non, at?</Ptag>
      <Button appearance="primary">В корзину</Button>
      <Ptag size="m" color="black">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet reiciendis, accusamus nemo consectetur iusto pariatur dolor itaque maiores earum voluptas cupiditate molestiae atque nobis non, sed accusantium a fugiat possimus?</Ptag>
      <Button appearance="green">Купить в 1 клик</Button>
      <Ptag size="l" color="black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo quibusdam doloremque sint harum cum omnis optio libero dolores labore porro, adipisci repellendus iure beatae neque earum eveniet, commodi dolor.</Ptag>
    </>
  );
}
