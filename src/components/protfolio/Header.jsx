import React from 'react';
import { DownOutlined, SettingOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
  {
    key: '1',
    label: 'skills',
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'HTML',
    extra: '⌘H',
  },
  {
    key: '3',
    label: 'CSS',
    extra: '⌘C',
  },
  {
    key: '4',
    label: 'BOOTSTRAP',
    extra: '⌘B',
  },
  {
    key: '3',
    label: 'Tailwind',
    extra: '⌘T',
  },
  {
    key: '4',
    label: 'JAVASCRIPT',
    extra: '⌘J',
  },
  {
    key: '3',
    label: 'REACT',
    extra: '⌘T',
  },
  {
    key: '4',
    label: 'DJANGO',
    extra: '⌘D',
  },
  {
    key: '3',
    label: 'PYTHON',
    extra: '⌘P',
  },
  {
    key: '4',
    label: 'PHOTOSHOP',
    extra: '⌘P',
  },
];

const Header = () => (
  <Dropdown
    menu={{
      items,
    }}
    placement="bottomRight"  // Position the dropdown to the right side
  >
   <button
  onClick={(e) => e.preventDefault()}
  className="bg-black-500 text-black py-2 px-2 rounded-full flex items-center justify-center space-x-2 hover:bg-blue-600 transition-all duration-200 
             mr-2 sm:mr-0 sm:w-60 sm:justify-end border-2 border-black hover:border-blue-600"
>
      <Space>
        skills
        <DownOutlined />
      </Space>
    </button>
  </Dropdown>
);

export default Header;
