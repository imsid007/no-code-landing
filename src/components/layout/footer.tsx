import { Row, Col } from "antd";
import React from "react";
import { TweeterIcon } from "../../icons/social-icons";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="container" style={{ padding: "100px 30px 80px 30px" }}>
        <Row justify="space-between">
          <Col span={4}>
            <h3>DEVELOPER</h3>
            <div className="footer-menu-item">Documentation</div>
            <div className="footer-menu-item">Cli</div>
            <div className="footer-menu-item">Tutorials</div>
          </Col>
          <Col span={4}>
            <h3>COMPANY</h3>
            <div className="footer-menu-item">Blog</div>
            <div className="footer-menu-item">About</div>
            <div className="footer-menu-item">Careers</div>
            <div className="footer-menu-item">Contact Us</div>
          </Col>
          <Col span={4}>
            <h3>LEGAL</h3>
            <div className="footer-menu-item">Terms of Service</div>
            <div className="footer-menu-item">Privacy Policy</div>
          </Col>
          <Col span={4}>
            <h3>JOIN US ON</h3>
            <Row>
              <img
                className="social-icon"
                src="/images/icons/tweeter.svg"
                alt="brands"
              />
              <img
                className="social-icon"
                src="/images/icons/linkdin.svg"
                alt="brands"
              />
              <img
                className="social-icon"
                src="/images/icons/git.svg"
                alt="brands"
              />
            </Row>
          </Col>
          <Col span={4}>
            <img
              style={{ maxWidth: "100%" }}
              src="/images/brands/circle.svg"
              alt="brands"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
