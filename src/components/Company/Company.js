import React, { useCallback, useState, useEffect } from "react";
import { Row, Col, Radio, Button, Switch, Card } from "antd";
import Serving from "./Serving/Serving";
import "./company.css";
const Company = () => {
  // set the initial serving state
  const [servingData, setServingData] = useState([
    {
      heading: "lollipop",
      price: "$100",
      serving: "For 100 serving",
      monthly: 1,
      annual: 0.5,
      price_number: 0,
    },
    {
      heading: "Ice candy",
      price: "$200",
      serving: "For 100 serving",
      monthly: 2,
      annual: 1,
      price_number: 0,
    },
  ]);

  /**
   * @description duration to set like @argument Annual and Monthly
   */
  const [duration, setDuration] = useState({ label: "Annual" });

  // serving current is the data which is selected
  const [servingCurrent, setServingCurrent] = useState(100);

  // serving data + diff data as third tab data merge , initial data is serving data
  const [servingWithDiff, setServingWithDiff] = useState(servingData);

  /**
   * @description the change serving data of company serving
   */
  const onChangeServing = useCallback((e) => {
    setServingCurrent(e.target.value);
  }, []);

  /**
   * make effect of card data serving data of card and different card data
   * @changeDetect servingCurrent, duration, servingData
   * @function getServingAndDuration() to detect and run the function and calculate the price of serving data.
   */
  useEffect(() => {
    function getServingAndDuration() {
      let newSetServing = [];
      newSetServing = servingData.map((data) => {
        return {
          ...data,
          price: `$${data[duration.label.toLowerCase()] * servingCurrent}`,
          serving: `For ${servingCurrent} serving`,
          price_number: data[duration.label.toLowerCase()] * servingCurrent,
        };
      });
      setServingWithDiff([
        ...newSetServing,
        {
          heading: "Your saving with lollipop",
          price: `$${
            newSetServing[1].price_number - newSetServing[0].price_number
          }`,
          serving: "",
          last: true,
        },
      ]);
    }
    getServingAndDuration();
  }, [servingCurrent, duration, servingData]);

  /**
   * @description the change duration data of company serving
   * @argument true & false
   */
  const onChangeDuration = useCallback((e) => {
    if (e) {
      setDuration({ label: "Annual" });
    } else {
      setDuration({ label: "Monthly" });
    }
  }, []);

  return (
    <div>
      <section>
        <Row>
          <Col span={24}>
            <h2 className="company__pricing">Compare pricing today !</h2>
          </Col>
          <Col span={24} className="lorem__heading">
            Lorem Ipsum is simply dummy text of the printing and
            <Button type="link">typesetting.</Button>
          </Col>
        </Row>
      </section>
      <section className="radio__tab">
        <Row>
          <Col span={24}>
            <Radio.Group onChange={onChangeServing} defaultValue="100">
              <Radio.Button value="25">25 Serving</Radio.Button>
              <Radio.Button value="50">50 Serving</Radio.Button>
              <Radio.Button value="100">100 Serving</Radio.Button>
              <Radio.Button value="200">200 Serving</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
      </section>
      <section className="discount__section">
        <Row>
          <Col span={2} offset={10}>
            <p className="subscription">{duration.label}</p>
            {duration.label === "Monthly" ? null : <span>50% off</span>}
          </Col>
          <Col span={1}>
            <div className="toggle">
              <Switch defaultChecked onChange={onChangeDuration} />
            </div>
          </Col>
          <Col span={1} className="toggle_month">
            {duration.label}
          </Col>
        </Row>
      </section>

      <section className="card__section">
        <Row>
          <Col className="card__container" span={12} offset={6}>
            {servingWithDiff.map((serve, i) => {
              return (
                <Card
                  bordered="false"
                  className={`card__serving ${
                    serve.hasOwnProperty("last") ? "card__last_css" : ""
                  }`}
                  key={serve.heading + i}
                >
                  <Serving serve={serve} />
                </Card>
              );
            })}
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Company;
