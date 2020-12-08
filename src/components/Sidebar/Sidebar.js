import React, { useState } from 'react';
import { Sidenav, Nav, Icon, Dropdown } from 'rsuite';
import { useQuery } from '@apollo/client';
import FEEDS_QUERY from '../../graphql/queries/Feeds';
import Loading from '../Loading';
import FeedsDropdown from './FeedsDropdown';
import AddFormModal from './AddFeedFormModal';
import useSession from '../../utils/hooks/useSession';

const Sidebar = () => {
  const session = useSession();
  const [activeKey, setActiveKey] = useState('3');
  const [expanded, toggleExpand] = useState(true);
  const [showAddFeedForm, toggleAddFeedForm] = useState(false);
  const { loading, data, error, refetch } = useQuery(FEEDS_QUERY);

  if (loading) return <Loading />;

  return (
    <div>
      {toggleAddFeedForm && (
        <AddFormModal
          showAddFeedForm={showAddFeedForm}
          toggleAddFeedForm={toggleAddFeedForm}
          refetch={refetch}
        />
      )}
      <Sidenav
        expanded={expanded}
        defaultOpenKeys={['3']}
        activeKey={activeKey}
        onSelect={(key) => setActiveKey(key)}
        style={{ backgroundColor: 'white', borderRadius: '6px' }}
      >
        <Sidenav.Body>
          <Nav>
            <FeedsDropdown feeds={data?.feeds} refetch={refetch} />
            <Dropdown
              eventKey="4"
              title="Podcasts"
              icon={<Icon icon="podcast" />}
              disabled
            />
            <Nav.Item
              eventKey="1"
              icon={<Icon icon="plus" />}
              onClick={() => toggleAddFeedForm(true)}
              disabled={!!error || !session?.me}
            >
              Add Feed
            </Nav.Item>
            <Nav.Item
              icon={
                expanded ? (
                  <Icon icon="angle-double-left" />
                ) : (
                  <Icon icon="angle-double-right" />
                )
              }
              onClick={() => toggleExpand(!expanded)}
            >
              {expanded ? 'Hide' : 'Show'}
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Sidebar;
