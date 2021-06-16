import React from "react";
import { Row, Col, Button, Image } from "antd";
import "./main.css";
import main_image from "../../assets/image/earth-globe-1964579-1661871.png";
const Main = () => {
  return (
    <div className="main">
      <Row>
        <Col span={8} offset={4}>
          <h1 className="heading">
            Looking for a <br />
            lollipop alternative?{" "}
          </h1>
          <p className="sample__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <p>
            <Button
              size="large"
              type="primary"
              role="button"
              className="button__CTA"
            >
              Primary CTA
            </Button>
            <Button type="default" size="large" className="button__CTA">
              Learn more
            </Button>
          </p>
        </Col>
        <Col span={8} offset={2}>
          <Image width={339} src={main_image} />
        </Col>
      </Row>
    </div>
  );
};

export default Main;
