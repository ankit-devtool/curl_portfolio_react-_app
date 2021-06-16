import "./Serving.css";
import { Row, Col } from "antd";

const Serving = ({ serve }) => {
  console.log(serve);
  const { heading, price, serving, last } = serve;
  return (
    <div className="serving__container">
      <Row>
        <Col span={24}>
          <h3>{heading}</h3>
        </Col>
        <Col
          span={24}
          className={`serving__per__month ${last ? "serving__last" : ""}`}
        >
          <p> {price}</p>
          <span>&nbsp; Per month</span>
        </Col>
        <Col span={24}>
          <p className="per__serving"> {serving}</p>
        </Col>
      </Row>
    </div>
  );
};

export default Serving;
