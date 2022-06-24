import { Col, Row } from "antd";
import style from "../../styles/modules/home.module.scss";

export default function Develop() {
  return (
    <div className="container">
      <Row align="middle" style={{ textAlign: "center" }} justify="center">
        <Col span={24}>
          <h1 className={style.develop_title}>
            DESIGN. DEVELOP. DEPLOY. REPEAT.
          </h1>
        </Col>
        <Col span={24}>
          <div className={style.develop_subtitle}>
            End-to-end solution that takes you from idea to production in no
            time.
          </div>
        </Col>
      </Row>
      <Row justify="space-between" style={{ margin: "5vw 0" }}>
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
                <h2 style={{ color: "#000" }}>Visual Workspace</h2>
                <div className={style.develop_description}>
                  Simply design any architectures as you wish, code, no-code or
                  both, in your own environment.
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
                <h2 style={{ color: "#000" }}>Powerful CLI</h2>
                <div className={style.develop_description}>
                  Fast, reliable, cross-platform command-line tool that
                  developers love.
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
                <h2 style={{ color: "#000" }}>Rapid Deployments</h2>
                <div className={style.develop_description}>
                  Drive success with continuous, automated software delivery
                  that fits your workflow.
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={13}>
          <img
            className={style.develop_banner_img}
            src="/images/home/develop.svg"
            alt="brands"
          />
        </Col>
      </Row>
    </div>
  );
}
