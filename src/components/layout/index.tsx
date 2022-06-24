import { Layout } from "antd";
import { ReactNode } from "react";
import CustomHeader from "./custom-header";
import FooterComponent from "./footer";

const { Content } = Layout;

type props = {
  children: ReactNode;
  activeKey?: number;
};

export default function MainLayout({ children, activeKey }: props) {
  return (
    <Layout>
      <CustomHeader activeKey={activeKey} />
      <Content style={{ marginTop: "-1px" }}>{children}</Content>
      <FooterComponent />
    </Layout>
  );
}
