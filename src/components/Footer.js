import React from "react";
import { Icon, Nav, Row, Col } from "rsuite";

const Footer = () => (
  <Row>
    <Col md={4} xs={24}>
      <Nav vertical>
        <Nav.Item>
          <a href="https://www.nickmonaco.me" target="_blank">
            NickMonaco.me
          </a>
        </Nav.Item>
        <Nav.Item icon={<Icon icon="github-alt" />}>
          <a href="">View on Github</a>
        </Nav.Item>
        <Nav.Item icon={<Icon icon="github-alt" />}>
          <a href="">
            <Icon name="github" />
            View API on Github
          </a>
        </Nav.Item>
      </Nav>
    </Col>
    <Col md={20} xs={24}></Col>
  </Row>
);

export default Footer;
