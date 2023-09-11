import img from "../../../assets/images/vitaliy.jpg";
import virtex from "../../../assets/images/virtex-food.png";
import cocaCola from "../../../assets/images/coca-cola.svg";
import inmarco from "../../../assets/images/inmarco.png";
import style from "./AboutPage.module.scss";

interface ClientsType {
  id: number;
  img: string;
  name: string;
}

const clients_list: ClientsType[] = [
  {
    id: 1,
    img: virtex,
    name: "virtex",
  },
  {
    id: 2,
    img: cocaCola,
    name: "cocaCola",
  },
  {
    id: 3,
    img: inmarco,
    name: "inmarco",
  },
];

const AboutPage = () => {
  return (
    <div className={style.AboutPage} id="about">
      <div className={style.about_Vitaliy}>
        <div className={style.imgVitaliy}>
          <img src={img} alt="Vitaliy" />
        </div>

        <div className={style.advantages}>
          <h2>Почему лучше обратиться ко мне?</h2>
          <ul className={style.advantages_list}>
            <li>Бесплатная диагностика поломки прямо при клиенте;</li>
            <li>Молниеносная скорость починки (в зависимости от заказа);</li>
            <li>Больше 30 лет опыта;</li>
            <li>Время работы: 9:00 - 20:00;</li>
          </ul>
        </div>
      </div>

      <div className={style.clients}>
        <h3>Мои корпоративные клиенты</h3>
        <div className={style.clients_list}>
          {clients_list?.map((el: ClientsType) => (
            <img src={el.img} alt={el.name} key={`${el.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
