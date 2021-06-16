import "./Primary.css";
import { Row, Col, Button, Image } from "antd";
import suitcase from "../../assets/image/Group 4.png";
function Primary() {
  return (
    <div className="primary">
      <Row>
        <Col span={8} offset={4}>
          <h1 className="recommended">Loved by users,</h1>
          <h1>recommended by experts</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <Button
            size="large"
            type="primary"
            role="button"
            className="button__CTA"
          >
            Primary CTA
          </Button>
        </Col>
        <Col span={8} offset={3}>
          <Image width={250} src={suitcase} />
        </Col>
      </Row>
    </div>
  );
}

export default Primary;
