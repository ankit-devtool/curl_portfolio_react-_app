import React from "react";
import "./table.css";
import { Row, Col } from "antd";
import tableImg from "../../assets/image/Group 6.png";

const Table = () => {
  return (
    <section className="table__container">
      <div className="table">
        <Row>
          <Col span={24}>
            <h1>This is Heading</h1>
          </Col>
          <Col span={24}>
            <h2>Line Two</h2>
          </Col>
          <Col span={12} offset={6}>
            <img src={tableImg} alt="table_image" className="img" />
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default Table;
