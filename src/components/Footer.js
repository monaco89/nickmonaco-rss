import React from 'react';
import { Icon, Nav, Row, Col } from 'rsuite';

const Footer = () => (
  <Row>
    <Col md={4} xs={24}>
      <Nav vertical>
        <Nav.Item href="https://www.nickmonaco.me" target="_blank">
          NickMonaco.me
        </Nav.Item>
        <Nav.Item
          href="https://github.com/monaco89/nickmonaco-rss"
          icon={<Icon icon="github-alt" />}
          target="_blank"
        >
          View on Github
        </Nav.Item>
        <Nav.Item
          href="https://github.com/monaco89/nickmonaco-rss-api"
          icon={<Icon icon="github-alt" />}
          target="_blank"
        >
          <Icon name="github" />
          View API on Github
        </Nav.Item>
      </Nav>
    </Col>
  </Row>
);

export default Footer;
