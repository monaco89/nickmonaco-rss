import React from "react";
import { Nav } from "rsuite";

const TabMenu = ({ activeTab, setActiveTab }) => (
  <Nav
    appearance="subtle"
    activeKey={activeTab}
    onSelect={(activeKey) => setActiveTab(activeKey)}
  >
    <Nav.Item eventKey="articles">Articles</Nav.Item>
    <Nav.Item disabled eventKey="podcasts">
      Podcasts
    </Nav.Item>
    <Nav.Item eventKey="edit">Edit List</Nav.Item>
  </Nav>
);

export default TabMenu;
