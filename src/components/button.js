import React from "react";
import { Row, Button, Col, ConfigProvider } from "antd";


const ButtonKey = ({ className, value,resetClickHandler,invertClickHandler,percentClickHandler,equalsClickHandler,signClickHandler,commaClickHandler,numClickHandler }) => {
    return (
        <ConfigProvider>
        <Row gutter ={[16,16]}justify={"center"} align={"middle"} style={{margin: 2, marginTop: 4}}>
            {
            value.map((item,id) => {
                return (<Col xl = {5} lg={5} md={4} sm= {2} span={6} style={{margin: 2}}>
                    <Button type="primary" key={id} style={{height: 50, width: 50}} value ={item} 
                    onClick= {() => {item === "C" ? resetClickHandler() :
                    item === "+-" ? invertClickHandler() : 
                    item === "%" ? percentClickHandler() : 
                    item === "=" ? equalsClickHandler() : 
                    item === "/" || item === "X" || item === "-" || item === "+" ? signClickHandler(item) : 
                    item === "." ? commaClickHandler(item): numClickHandler(item)}}
                    >
                        {item}
                    </Button>
                </Col>
                );
        })}
        </Row>
        </ConfigProvider>
    );
  };
  
export default ButtonKey;