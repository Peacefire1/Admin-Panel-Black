import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={<ShoppingCartOutlined />}
          title={"Orders"}
          value={12345}
        />
        <DashboardCard
          icon={<ShoppingOutlined />}
          title={"Inventory"}
          value={12345}
        />
        <DashboardCard
          icon={<UserOutlined />}
          title={"Customer"}
          value={12345}
        />
        <DashboardCard
          icon={<DollarCircleOutlined />}
          title={"Revenue"}
          value={12345}
        />
      </Space>
      <Space>
        <RecentOrders />
      </Space>
    </div>
  );
};

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function RecentOrders() {
  return (
    <Table
      columns={[
        {
          title: "title",
          dataIndex: "title",
        },
        {
          title: "Quantity",
          dataIndex: "Quantity",
        },
        {
          title: "Price",
          dataIndex: "discountedPrice",
        },
      ]}
    ></Table>
  );
}

export default Dashboard;
