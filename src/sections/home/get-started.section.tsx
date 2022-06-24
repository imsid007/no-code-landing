import { Button, Col, Row } from "antd";
import style from "../../styles/modules/home.module.scss";

export default function GetStarted() {
  return (
    <div className="container">
      <Row justify="center" style={{ textAlign: "center" }}>
        <Col span={24}>
          <h1 className={style.develop_title}>
            <span style={{ fontWeight: "400" }}>Ready to</span> Get Started?
          </h1>
        </Col>
        <Col span={24} style={{ marginBottom: "50px" }}>
          <Button className={style.create_new_project_btn}>
            Get Started for Free
          </Button>
        </Col>
      </Row>
    </div>
  );
}
