import Contents from "@/components/Contents";
import SideBar from "@/components/Sidebar";
import { Layout } from "antd";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
