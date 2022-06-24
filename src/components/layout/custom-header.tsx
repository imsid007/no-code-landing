import { Button, Row } from "antd";
export default function CustomHeader({ activeKey }: { activeKey?: number }) {
  return (
    <div className="header" style={{ background: "#000000" }}>
      <Row align="middle" className="header-container" justify="space-between">
        <div>
          <Row align="middle">
            <div className="menu-item" style={{ fontSize: "20px" }}>
              <i> NO-CODE</i>
            </div>
            <div className="menu-item">Developers</div>
            <div className="menu-item">Company</div>
            <div className="menu-item">Pricing</div>
            <div className="menu-item">Blog</div>
          </Row>
        </div>
        <div>
          <Button ghost className="signin-btn">
            Sign In
          </Button>
          <Button className="signup-btn">Sign Up</Button>
        </div>
      </Row>
    </div>
  );
}
