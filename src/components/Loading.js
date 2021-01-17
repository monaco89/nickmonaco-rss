import React from 'react';
import { Loader, Nav } from 'rsuite';

const Loading = () => (
  <Nav.Item>
    <Loader content="loading..." center size="md" />
  </Nav.Item>
);

export default Loading;
