import { Col, Image, Row } from "react-bootstrap";

export default function MainPage() {
  return (
    <Row>
      <Col xs={12} className="text-center">
        <h1>Сайт ежей!</h1>
      </Col>
      <Col xs={12} className="text-center">
        <Image src="/images/ezhi.jpg" />
      </Col>
    </Row>
  );
}
