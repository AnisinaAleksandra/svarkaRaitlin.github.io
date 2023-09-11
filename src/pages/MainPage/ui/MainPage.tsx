import { Heading } from "@chakra-ui/react";
import style from "./MainPage.module.scss";
import backgroundImage from "../../../assets/images/svarka_main_page.jpg";

const MainPage = () => {
  return (
    <div
      className={style.MainPage}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={style.contacts_block}>
        <div className={style.number_phone}>
          <a href="tel:+7(913)754-58-65">+7(913)754-58-65</a>
        </div>
        <div className={style.schedule}>Пн-Вс с 9:00 до 20:00</div>
      </div>
      <div className={style.information}>
        <Heading className={style.h2}>Аргонодуговая сварка</Heading>
      </div>
    </div>
  );
};

export default MainPage;
