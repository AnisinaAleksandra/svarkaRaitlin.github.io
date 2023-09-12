import { PhoneIcon } from "@chakra-ui/icons";
import { Button, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-scroll";
import svg from "../../../assets/phone.svg";
import logo from "../../../assets/logo.png";
import { useState } from "react";
import { ModalCall } from "../../ModalCall/index";
import styles from "./Header.module.scss";

export const Header = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <div className={styles.Header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.container}>
        <nav className={styles.menu}>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Услуги
              </Link>
            </li>
            {/* <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Портфолио
              </Link>
              <a href="#2"></a>
            </li> */}
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Обо мне
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="map"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Адрес
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.contacts_block}>
          <div className={styles.number_phone}>
            <img src={`${svg}`} alt="React Logo" />
            <a href="tel:+7(913)754-58-65">+7(913)754-58-65</a>
          </div>
          <div className={styles.schedule}>Пн-Вс с 9:00 до 20:00</div>
        </div>

        <div className={styles.btn_call_container}>
          <Button
            rightIcon={<PhoneIcon />}
            colorScheme="yellow"
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
            }}
          >
            Заказать звонок
          </Button>
        </div>
      </div>

      <ModalCall isOpen={isOpen} overlay={overlay} onClose={onClose} />
    </div>
  );
};
