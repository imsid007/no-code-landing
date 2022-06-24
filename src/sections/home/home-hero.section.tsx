import { Button, Col, Row } from "antd";
import style from "../../styles/modules/home.module.scss";

export default function HomeHeroBanner() {
  return (
    <div
      className={style.home_hero_banner_container}
      style={{ overflow: "hidden" }}
    >
      <div className={style.home_background}>
        {/* <video
          style={{
            position: "absolute",
            top: 0,
            left: "-20%",
            height: "140%",
            width: "140%",
          }}
          autoPlay
          muted
          loop
          id="myVideo"
        >
          <source src="/images/home/3004518524.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video> */}
      </div>
      <div
        className={style.home_hero_container}
        style={{ zIndex: "1", textAlign: "center" }}
      >
        <h1 className="title">Code to Cloud 10x Faster</h1>
        <div className={style.hero_subtitle}>
          Accelerate development lifecycle with Altostra’s no-code
          infrastructure automation.
        </div>
        <Button className={style.create_new_project_btn}>
          Create a New Project
        </Button>
        <div style={{ marginTop: "10vh" }}>
          <fieldset
            style={{ borderColor: "red" }}
            className={style.partner_title}
          >
            <legend style={{ width: "180px", color: "#777" }}>
              <h6>PARTNERED WITH</h6>
            </legend>
          </fieldset>
          <Row
            justify="space-between"
            style={{ marginTop: "4vh", padding: "0 50px" }}
          >
            <Col span={4}>
              <img
                className={style.brand_img}
                src="/images/brands/circle.svg"
                alt="brands"
              />
            </Col>

            <Col span={4}>
              <img
                className={style.brand_img}
                src="/images/brands/aws.svg"
                alt="brands"
              />
            </Col>
            <Col span={4}>
              <img
                className={style.brand_img}
                src="/images/brands/data-go.svg"
                alt="brands"
              />
            </Col>
            <Col span={4}>
              <img
                className={style.brand_img}
                src="/images/brands/spunk.svg"
                alt="brands"
              />
            </Col>
            <Col span={4}>
              <img
                className={style.brand_img}
                src="/images/brands/auth0.svg"
                alt="brands"
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
