import styled from "styled-components";
import { StyledTitle } from "../SectionTitle/SectionTitle";
import SectionSee from "../SectionSee/SectionSee.jsx";

import ExperiencesCard from "./ExperiencesCard";
import React, { useState, useEffect } from "react";

const Columns = styled.div`
  display: flex;
  column-gap: 18px;
`;
const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
`;

const data = [
  {
    title: "Awesome Steel Sausages",
    reviews: [
      {
        rating: 4,
        text: "qui",
      },
    ],
    price: 36,
    imageSource: "https://i.ibb.co/WVrvQKX/Rectangle.jpg",
  },
  {
    title: "Licensed Concrete Shoes",
    reviews: [
      {
        rating: 0,
        text: "officia non velit aliqua ullamco nulla adipisicing voluptate esse pariatur duis adipisicing excepteur non reprehenderit laborum officia enim labore eu",
      },
      {
        rating: 4,
        text: "est cillum proident ea tempor culpa id cillum fugiat esse ea ex irure eiusmod sint incididunt",
      },
      {
        rating: 2,
        text: "aliquip cupidatat commodo velit occaecat qui",
      },
      {
        rating: 0,
        text: "eiusmod adipisicing excepteur cupidatat aliquip exercitation mollit pariatur aute nulla",
      },
      {
        rating: 2,
        text: "qui consectetur aute duis proident eu aliqua consectetur consequat",
      },
      {
        rating: 1,
        text: "aliquip cupidatat reprehenderit ipsum pariatur anim ea amet sint nulla velit nisi laboris adipisicing amet anim sint",
      },
      {
        rating: 3,
        text: "",
      },
    ],
    price: 30,
    imageSource: "https://i.ibb.co/SxBpWBM/Rectangle-1.jpg",
  },
  {
    title: "Licensed Fresh Sausages",
    reviews: [
      {
        rating: 0,
        text: "ad veniam do culpa deserunt est ea dolore duis velit eu duis",
      },
      {
        rating: 5,
        text: "culpa officia et ullamco nostrud",
      },
      {
        rating: 4,
        text: "cupidatat occaecat duis nisi labore commodo ullamco velit duis fugiat adipisicing cupidatat aliquip consectetur proident reprehenderit",
      },
      {
        rating: 1,
        text: "veniam sunt amet elit laborum Lorem cillum nulla qui proident excepteur cupidatat Lorem esse quis sunt sunt",
      },
      {
        rating: 4,
        text: "eu fugiat id",
      },
      {
        rating: 3,
        text: "sit qui esse ex irure duis commodo ipsum magna elit sunt",
      },
    ],
    price: 90,
    imageSource: "https://i.ibb.co/GCnfx3R/Rectangle-2.jpg",
  },
  {
    title: "Refined Wooden Bike",
    reviews: [
      {
        rating: 4,
        text: "consectetur ex ipsum voluptate",
      },
      {
        rating: 1,
        text: "cupidatat dolor anim quis laborum ex eiusmod reprehenderit",
      },
      {
        rating: 1,
        text: "laboris",
      },
      {
        rating: 2,
        text: "",
      },
      {
        rating: 2,
        text: "amet non consequat aute deserunt",
      },
      {
        rating: 4,
        text: "incididunt qui deserunt minim deserunt enim enim sint labore adipisicing voluptate",
      },
    ],
    price: 11,
    imageSource: "https://i.ibb.co/Bfc1Y17/Rectangle-3.jpg",
  },
  {
    title: "Tasty Frozen Mouse",
    reviews: [
      {
        rating: 0,
        text: "labore voluptate consectetur mollit minim est adipisicing anim anim anim ipsum ex",
      },
      {
        rating: 4,
        text: "in ut quis sit",
      },
      {
        rating: 4,
        text: "proident laboris aliqua eiusmod officia mollit voluptate veniam aliquip consectetur nulla eiusmod ea commodo quis elit esse occaecat voluptate incididunt",
      },
      {
        rating: 3,
        text: "ullamco ipsum excepteur nostrud proident sit nisi aliqua ullamco est sint amet mollit",
      },
      {
        rating: 2,
        text: "nisi mollit laborum aliqua cupidatat exercitation ut sint cupidatat",
      },
      {
        rating: 1,
        text: "sunt sit ea nisi reprehenderit dolor voluptate ea nulla in ipsum aute ad aliquip officia nulla ipsum",
      },
      {
        rating: 3,
        text: "commodo sint nulla irure enim",
      },
      {
        rating: 1,
        text: "nisi sint voluptate et voluptate consectetur Lorem occaecat dolore aliquip quis sit laboris ullamco ea",
      },
      {
        rating: 4,
        text: "exercitation tempor do eiusmod ad ipsum officia culpa ullamco laboris do sunt amet est excepteur voluptate esse sunt",
      },
      {
        rating: 1,
        text: "duis commodo ipsum ullamco aute exercitation nostrud esse laborum",
      },
    ],
    price: 75,
    imageSource: "https://i.ibb.co/WVrvQKX/Rectangle.jpg",
  },
  {
    title: "Generic Granite Chips",
    reviews: [
      {
        rating: 1,
        text: "ipsum ipsum commodo et fugiat fugiat esse do reprehenderit aliqua id anim sit velit ad ea duis cupidatat adipisicing aliqua",
      },
      {
        rating: 4,
        text: "minim ut ad pariatur adipisicing irure est laborum",
      },
      {
        rating: 4,
        text: "elit magna excepteur irure dolor deserunt elit ea deserunt irure sunt pariatur do ex enim laboris ullamco velit duis minim",
      },
      {
        rating: 2,
        text: "occaecat esse qui",
      },
    ],
    price: 69,
    imageSource: "https://i.ibb.co/SxBpWBM/Rectangle-1.jpg",
  },
  {
    title: "Handcrafted Metal Fish",
    reviews: [
      {
        rating: 0,
        text: "nostrud amet ullamco consectetur anim labore proident eiusmod enim ea excepteur consectetur consequat voluptate sint qui anim sint qui",
      },
      {
        rating: 3,
        text: "aliquip aliquip elit ullamco",
      },
      {
        rating: 3,
        text: "in consequat pariatur mollit elit duis sunt cillum voluptate pariatur dolore id culpa fugiat excepteur ut non excepteur eiusmod laboris",
      },
      {
        rating: 1,
        text: "aliqua dolore in nulla magna",
      },
      {
        rating: 1,
        text: "culpa dolore proident",
      },
    ],
    price: 84,
    imageSource: "https://i.ibb.co/GCnfx3R/Rectangle-2.jpg",
  },
  {
    title: "Unbranded Soft Shirt",
    reviews: [
      {
        rating: 1,
        text: "Lorem eiusmod tempor velit ullamco et culpa sit eu ea est voluptate amet Lorem deserunt nulla consequat fugiat",
      },
      {
        rating: 0,
        text: "cillum in voluptate ullamco proident consectetur officia dolore do ex reprehenderit aute",
      },
      {
        rating: 5,
        text: "proident non adipisicing ipsum",
      },
      {
        rating: 4,
        text: "velit amet do sunt consequat sit eiusmod incididunt cupidatat commodo eiusmod",
      },
      {
        rating: 2,
        text: "reprehenderit laborum laborum non ut sunt eu officia consequat mollit irure fugiat cillum nulla pariatur Lorem",
      },
      {
        rating: 4,
        text: "Lorem et ad et sint cillum consectetur nostrud commodo veniam incididunt aliquip officia ullamco",
      },
    ],
    price: 76,
    imageSource: "https://i.ibb.co/Bfc1Y17/Rectangle-3.jpg",
  },
  {
    title: "Rustic Frozen Mouse",
    reviews: [
      {
        rating: 5,
        text: "occaecat labore veniam cillum quis culpa laborum sint labore sint duis enim aliquip",
      },
      {
        rating: 2,
        text: "consectetur do eu quis non aute proident consectetur aliquip velit nulla eu",
      },
    ],
    price: 58,
    imageSource: "https://i.ibb.co/WVrvQKX/Rectangle.jpg",
  },
  {
    title: "Unbranded Fresh Keyboard",
    reviews: [
      {
        rating: 4,
        text: "ullamco ut commodo Lorem quis velit nisi laborum culpa ipsum culpa velit laborum occaecat sint",
      },
    ],
    price: 99,
    imageSource: "https://i.ibb.co/SxBpWBM/Rectangle-1.jpg",
  },
  {
    title: "Handcrafted Fresh Hat",
    reviews: [
      {
        rating: 4,
        text: "culpa est",
      },
      {
        rating: 2,
        text: "est laboris laboris",
      },
      {
        rating: 2,
        text: "tempor incididunt eu pariatur magna proident sint voluptate ipsum",
      },
    ],
    price: 61,
    imageSource: "https://i.ibb.co/GCnfx3R/Rectangle-2.jpg",
  },
  {
    title: "Intelligent Steel Car",
    reviews: [
      {
        rating: 2,
        text: "cillum dolore id in et aliqua",
      },
      {
        rating: 3,
        text: "anim enim proident minim ullamco in pariatur dolore labore non consequat aliqua et non minim cupidatat enim irure ex",
      },
      {
        rating: 1,
        text: "amet adipisicing cupidatat cupidatat irure deserunt exercitation eiusmod fugiat aute sunt nisi pariatur Lorem sit ullamco sunt",
      },
      {
        rating: 1,
        text: "laborum in dolore nostrud magna occaecat non excepteur pariatur labore veniam",
      },
      {
        rating: 5,
        text: "cillum adipisicing nulla dolor culpa est dolore culpa in nulla veniam nostrud",
      },
      {
        rating: 2,
        text: "ea cillum voluptate occaecat est tempor adipisicing consectetur ad magna",
      },
      {
        rating: 3,
        text: "nulla sit nulla officia elit excepteur ex ea minim duis labore ipsum ex qui culpa sunt non",
      },
    ],
    price: 10,
    imageSource: "https://i.ibb.co/Bfc1Y17/Rectangle-3.jpg",
  },
  {
    title: "Sleek Frozen Cheese",
    reviews: [
      {
        rating: 2,
        text: "minim exercitation eu qui laborum eiusmod veniam nulla veniam esse elit cupidatat",
      },
    ],
    price: 19,
    imageSource: "https://i.ibb.co/WVrvQKX/Rectangle.jpg",
  },
  {
    title: "Sleek Wooden Pants",
    reviews: [
      {
        rating: 2,
        text: "do",
      },
      {
        rating: 1,
        text: "tempor occaecat cupidatat Lorem dolore tempor Lorem ex incididunt esse pariatur irure",
      },
      {
        rating: 1,
        text: "dolore eiusmod et excepteur proident in Lorem irure ea cupidatat eiusmod do elit Lorem",
      },
    ],
    price: 94,
    imageSource: "https://i.ibb.co/SxBpWBM/Rectangle-1.jpg",
  },
  {
    title: "Handmade Cotton Shirt",
    reviews: [
      {
        rating: 3,
        text: "ut ex minim esse deserunt",
      },
      {
        rating: 3,
        text: "est dolor sit dolore laboris ex ut labore sit pariatur dolore mollit nostrud nulla",
      },
      {
        rating: 3,
        text: "",
      },
      {
        rating: 4,
        text: "dolor occaecat cupidatat",
      },
      {
        rating: 2,
        text: "culpa do adipisicing est proident deserunt laboris incididunt consequat",
      },
      {
        rating: 1,
        text: "amet sunt deserunt voluptate labore qui ut velit tempor esse velit eu velit",
      },
      {
        rating: 2,
        text: "laborum adipisicing do reprehenderit ea anim officia nisi adipisicing adipisicing duis ipsum Lorem ad dolor labore ut fugiat nostrud mollit",
      },
      {
        rating: 0,
        text: "",
      },
    ],
    price: 27,
    imageSource: "https://i.ibb.co/GCnfx3R/Rectangle-2.jpg",
  },
  {
    title: "Sleek Soft Chips",
    reviews: [
      {
        rating: 3,
        text: "labore cupidatat minim minim minim sint tempor excepteur eu",
      },
      {
        rating: 4,
        text: "in consectetur ea duis cillum laborum elit adipisicing eiusmod qui velit quis consequat veniam est sunt excepteur",
      },
      {
        rating: 0,
        text: "aliqua non consectetur voluptate aute magna et ullamco et",
      },
      {
        rating: 1,
        text: "mollit id minim quis minim occaecat commodo",
      },
      {
        rating: 3,
        text: "mollit ea cillum veniam non pariatur dolore adipisicing irure proident eu",
      },
      {
        rating: 2,
        text: "aliquip mollit voluptate fugiat labore nisi deserunt voluptate laboris aute ullamco ipsum mollit ea",
      },
      {
        rating: 4,
        text: "eu adipisicing in ullamco duis quis",
      },
      {
        rating: 4,
        text: "laboris magna tempor aliquip adipisicing commodo",
      },
    ],
    price: 44,
    imageSource: "https://i.ibb.co/Bfc1Y17/Rectangle-3.jpg",
  },
  {
    title: "Refined Metal Soap",
    reviews: [
      {
        rating: 1,
        text: "Lorem dolor esse eu do nisi enim consectetur",
      },
      {
        rating: 4,
        text: "irure commodo duis ut",
      },
    ],
    price: 68,
    imageSource: "https://i.ibb.co/WVrvQKX/Rectangle.jpg",
  },
  {
    title: "Small Soft Sausages",
    reviews: [
      {
        rating: 2,
        text: "occaecat velit irure do eu anim consectetur dolore excepteur anim ea nisi proident voluptate reprehenderit veniam ea ex",
      },
      {
        rating: 2,
        text: "aliqua dolor labore nulla esse ut incididunt tempor reprehenderit esse cupidatat ullamco",
      },
    ],
    price: 1,
    imageSource: "https://i.ibb.co/SxBpWBM/Rectangle-1.jpg",
  },
  {
    title: "Practical Plastic Chair",
    reviews: [
      {
        rating: 4,
        text: "",
      },
      {
        rating: 2,
        text: "",
      },
      {
        rating: 4,
        text: "nostrud veniam deserunt anim fugiat veniam ipsum nulla laboris sint et et officia esse voluptate laborum",
      },
    ],
    price: 95,
    imageSource: "https://i.ibb.co/GCnfx3R/Rectangle-2.jpg",
  },
  {
    title: "Handcrafted Granite Cheese",
    reviews: [
      {
        rating: 2,
        text: "Lorem eu tempor enim aliquip reprehenderit elit esse quis ut ut cupidatat culpa et",
      },
      {
        rating: 1,
        text: "tempor magna culpa cupidatat nisi et ad irure pariatur ea laboris sunt est qui qui aute ad ullamco ipsum",
      },
      {
        rating: 2,
        text: "nulla do sunt exercitation magna ipsum qui occaecat irure qui",
      },
      {
        rating: 5,
        text: "voluptate occaecat in anim",
      },
    ],
    price: 10,
    imageSource: "https://i.ibb.co/Bfc1Y17/Rectangle-3.jpg",
  },
];

export default function Experiences(props) {
  const [resultat, setResultat] = useState([]);
  useEffect(() => {
    const API = "https://ipwbxlctkx.api.quickmocker.com/experiences";
    fetch(API)
      .then((res) => res.json())
      .then((data) => setResultat(data));
  }, []);

  return (
    <div className={props.className}>
      <HeaderTitle>
        <StyledTitle>Experiences</StyledTitle>
        <SectionSee to="cards" />
      </HeaderTitle>
      <Columns>
        {data.slice(0, 4).map((element, pos) => (
          <ExperiencesCard />
        ))}
      </Columns>
    </div>
  );
}
