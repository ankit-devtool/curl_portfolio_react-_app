import { Row, Col } from "antd";
import profileImg from "../../assets/image/1-intro-photo-final.jpg";
import "./Customer.css";
function Customer() {
  return (
    <div className="customer__container">
      <h1>Here's what our customer have to say</h1>
      <Row className="customer">
        <Col span={6} offset={5} className="profile__container">
          <img src={profileImg} alt="profile" />
        </Col>
        <Col span={7} className="profile__text">
          <blockquote className="profile__block">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </blockquote>
          <h2>Raja Ram</h2>
          <p>Tip World</p>
        </Col>
      </Row>
    </div>
  );
}

export default Customer;
