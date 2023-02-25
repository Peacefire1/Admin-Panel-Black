import { Badge, Image, Space, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import React from "react";

const Header = () => {
  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://cdn-icons-png.flaticon.com/512/1819/1819863.png"
      ></Image>
      <Typography.Title>DashBoard</Typography.Title>
      <Space>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
};

export default Header;
