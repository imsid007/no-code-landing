import { Col, Row } from "antd";
import style from "../../styles/modules/home.module.scss";

export default function CloudeEnvirnment() {
  return (
    <div style={{ background: "#f6f6f6", paddingBottom: "20px" }}>
      <div className="container">
        <Row align="middle" style={{ textAlign: "center" }} justify="center">
          <Col span={24}>
            <h1 className={style.develop_title}>CLOUD ENVIRONMENTS MANAGER</h1>
          </Col>
          <Col span={24}>
            <div className={style.develop_subtitle}>
              {
                "Get a clear view of your organization's assets to leverage usage."
              }
            </div>
          </Col>
        </Row>
        <Row justify="space-between" style={{ margin: "5vw 0" }}>
          <Col span={13}>
            <img
              className={style.develop_banner_img}
              src="/images/home/cloude-envirnment.svg"
              alt="brands"
            />
          </Col>
          <Col span={9}>
            <Row className={style.develop_description_container}>
              <Col span={3}>
                <img
                  style={{ maxWidth: "30px" }}
                  src="/images/home/eye.svg"
                  alt="brands"
                />
              </Col>
              <Col span={20}>
                <div>
                  <h2 style={{ color: "#000" }}>Self Service</h2>
                  <div className={style.develop_description}>
                    Give your team the freedom to build without delays. Create
                    or duplicate environments in seconds.
                  </div>
                </div>
              </Col>
            </Row>
            <Row className={style.develop_description_container}>
              <Col span={3}>
                <img
                  style={{ maxWidth: "30px" }}
                  src="/images/home/cli.svg"
                  alt="brands"
                />
              </Col>
              <Col span={20}>
                <div>
                  <h2 style={{ color: "#000" }}>Centralized Management</h2>
                  <div className={style.develop_description}>
                    Use policies, configuration sets, and automated actions to
                    control your organization’s assets.
                  </div>
                </div>
              </Col>
            </Row>
            <Row className={style.develop_description_container}>
              <Col span={3}>
                <img
                  style={{ maxWidth: "30px" }}
                  src="/images/home/rocket.svg"
                  alt="brands"
                />
              </Col>
              <Col span={20}>
                <div>
                  <h2 style={{ color: "#000" }}>Reliability</h2>
                  <div className={style.develop_description}>
                    Validate your stack before shipping. Prevent security issues
                    on production with early detection.
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
