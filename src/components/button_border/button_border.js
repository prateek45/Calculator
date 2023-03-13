import "./button_border.css";
import {Col} from 'antd';
import React from "react";
import {Row} from "antd";

const ButtonBorder = ({children }) => {
  return (
    <Col span={6}>{children}</Col>
  );
};

export default ButtonBorder;