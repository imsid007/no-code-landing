import { Row, Col } from "antd";
import { NextPage } from "next";
import styles from "../../styles/modules/home.module.scss";
import MainLayout from "../components/layout";
import CloudeEnvirnment from "../sections/home/cloude-envirnment.section";
import Develop from "../sections/home/develop.section";
import GetStarted from "../sections/home/get-started.section";
import HomeHeroBanner from "../sections/home/home-hero.section";

const Home = () => {
  return (
    <MainLayout>
      <HomeHeroBanner />
      <Develop />
      <CloudeEnvirnment />
      <GetStarted />
    </MainLayout>
  );
};

export default Home;
