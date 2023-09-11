import {
  Card,
  Heading,
  CardBody,
  CardFooter,
  Text,
  UnorderedList,
  ListItem,
  Image,
  Divider,
  Stack,
  Flex,
} from "@chakra-ui/react";

import style from "./ServicesPage.module.scss";
import { services } from "./listOfServices";

const ServicesPage = () => {
  return (
    <div className={style.ServicesPage} id="services">
      <div className={style.title}>
        <Heading>Услуги</Heading>
      </div>
      <Flex flexWrap={"wrap"} className={style.card_list}>
        {services.map((service) => (
          <Card maxW="sm" key={service.id} className={style.card}>
            <CardBody>
              <Image
                src={`${service.image}`}
                alt="Svarka argon"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{service.heading}</Heading>
                <Text>{service.text}</Text>
              </Stack>
            </CardBody>
            <Divider color="yellow.600" />
            <CardFooter textAlign={"left"} paddingLeft={"20px"}>
              <UnorderedList>
                {service.listofServices.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </UnorderedList>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </div>
  );
};

export default ServicesPage;
