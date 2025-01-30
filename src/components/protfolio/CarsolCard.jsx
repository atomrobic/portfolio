import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

// Carousel card component
const CarsolCard = () => {
  return (
    <div>
      <h1>Navigation</h1>
    </div>
  );
};

// Menu items
const items = [
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      {
        key: 'g1',
        label: 'web development ',
        type: 'group',
        children: [
          {
            key: '1',
            label: 'Option 1',
          },
          {
            key: '2',
            label: 'Option 2',
          },
        ],
      },
      {
        key: 'g2',
        label: 'Item 2',
        type: 'group',
        children: [
          {
            key: '3',
            label: 'Option 3',
          },
          {
            key: '4',
            label: 'Option 4',
          },
        ],
      },
    ],
  },
];

const Carsolcard = () => {
  const [collapsed, setCollapsed] = useState(false); // State to handle collapse
  const [openKeys, setOpenKeys] = useState([]); // State to manage open submenus
  
  const onClick = (e) => {
    console.log('click ', e);
  };

  // Handles opening and closing submenus
  const onOpenChange = (keys) => {
    setOpenKeys(keys.length > 0 ? [keys[keys.length - 1]] : []);
  };

  // Toggles collapse for smaller screens
  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <div>
      <CarsolCard /> {/* Rendering the CarsolCard component */}
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
        inlineCollapsed={collapsed} // Collapse on smaller screens
        openKeys={openKeys} // Only one submenu can be opened at a time
        onOpenChange={onOpenChange} // Handles opening/closing of submenus
      />
      <button onClick={toggleCollapse}>
      </button>
    </div>
  );
};

export default Carsolcard;
