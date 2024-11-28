import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../ui/NavBar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <Container>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
