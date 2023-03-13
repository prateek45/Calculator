import React from "react";
import { Card } from "antd";

const Border = ({ children }) => {
    return (
    <div className="border">
        <Card title="Calculator" bordered={false} style={{ width: 340, textAlign: "center"}}>
            {children}
        </Card>
    </div>
        );
  };
  
  export default Border;