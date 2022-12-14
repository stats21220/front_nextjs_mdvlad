import { GetStaticProps } from "next";
import React, { useState } from "react";
import { 
  Button,
  Htag, 
  Ptag,
  Tag,
  Rating
} from "../components/index";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { IMenuItem } from "../interfaces/menu.interface";

function Home() {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1' weight={900} color="black">Пиломатериалы во Владимире – ТК «Мир Дерева»</Htag>
      <Htag tag='h1' weight={500} color="primary">Пиломатериалы во Владимире – ТК «Мир Дерева»</Htag>
      <Htag tag='h2' weight={700} color="black">Пиломатериалы во Владимире</Htag>
      <Htag tag='h2' color="primary">Пиломатериалы во Владимире</Htag>
      <Htag tag='h3' weight={900} color="black">Разновидности</Htag>
      <Htag tag='h3' color="primary">Разновидности</Htag>
      <Tag href="https://yandex.ru" tabIndex={0}>yandex</Tag><Tag href="https://google.com" tabIndex={0}>google</Tag>
      <Button appearance="orange" arrow="right">ПОДПИСАТЬСЯ</Button>
      <Ptag size="s" color="black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro ut impedit est error et suscipit, totam ratione commodi quidem iste facilis quam nulla iure recusandae delectus at? Non, at?</Ptag>
      <Button appearance="primary" arrow="down">В корзину</Button>
      <Ptag size="m" color="black">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet reiciendis, accusamus nemo consectetur iusto pariatur dolor itaque maiores earum voluptas cupiditate molestiae atque nobis non, sed accusantium a fugiat possimus?</Ptag>
      <Button appearance="primary">Купить в 1 клик</Button>
      <Ptag size="l" color="black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo quibusdam doloremque sint harum cum omnis optio libero dolores labore porro, adipisci repellendus iure beatae neque earum eveniet, commodi dolor.</Ptag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
      <Rating rating={3}/>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const {data: menu} = await axios.get<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/page/getMenu');
  const firstCategory = 0;
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface IHomeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
}
