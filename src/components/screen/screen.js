import { Card } from "antd";
import { Textfit } from "react-textfit";
import React from "react";
import "./screen.css";

const gridStyle = {
    width: '100%',
    marginBottom: '3%',
    backgroundColor: '#4357692d',
    textAlign: 'Center',
    alignItems: 'Center',
  };

const Screen = ({ value }) => {

  return (
    <Card style={gridStyle} >
        <Textfit className="screen" mode="single" max={70}>
            {value}
        </Textfit>
    </Card>
  );
};

export default Screen;