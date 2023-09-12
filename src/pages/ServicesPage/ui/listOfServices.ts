import imageSvarka from "../../../assets/images/svarka.jpeg";
import imgvarkaDiskov from "../../../assets/images/svarkaDiskov.jpeg";
import imgKvadro from "../../../assets/images/kvadro.jpeg";

export const services = [
  {
    id: 2,
    image: imgvarkaDiskov,
    heading: "Сварка автомобильных запчастей",
    text: `Все виды сварки для ремонта автомобилей`,
    listofServices: [
      "Литых дисков",
      "Наварка недостоющих частей и деталей",
      "Поддонов автомобильных",
      "Трубок гидроусилителей",
      "Трубок гидросистем высокого давления",
    ],
  },
  {
    id: 1,
    image: imageSvarka,
    heading: "Аргонодуговая сварка",
    text: `Сварка алюминия, нержавейки, 
конструкционных сталей на современном, 
качественном оборудовании`,
    listofServices: [
      "Аргонная сварка",
      "Сварка алюминия",
      "Сварка нержавейки",
      "Сварка конструкционных сталей",
    ],
  },
  {
    id: 3,
    image: imgKvadro,
    heading: "Сварка квадроциклов и лодок",
    text: `Все виды сварки для ремонта квадроциклов и лодок, 
        рамы, крепления и т. д.`,
    listofServices: [
      "Сварка квадроциклов",
      "Сварка лодок",
      "Сварка снегоходов",
      "Сварка меди",
      "Сварка титана",
    ],
  },
];
