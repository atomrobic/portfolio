import React, { useState } from 'react';
import { Button, Drawer, Radio, Space, Popover } from 'antd';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  // Function to generate share URLs
  const generateShareLinks = (postTitle) => {
    const encodedTitle = encodeURIComponent(postTitle);
    const encodedURL = encodeURIComponent(window.location.href); // Or you can use a specific blog post URL
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}&quote=${encodedTitle}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedURL}&title=${encodedTitle}`,
    };
  };

  return (
    <>
      <Space>
        <Radio.Group value={placement} onChange={onChange}>
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>

        {/* Share Button Section */}
        <div style={{ marginTop: 20 }}>
          <h4>Share this blog post:</h4>
          <Popover
            content={
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button
                  type="link"
                  icon={<FacebookOutlined />}
                  href={generateShareLinks('Blog Post Title').facebook}
                  target="_blank"
                />
                <Button
                  type="link"
                  icon={<TwitterOutlined />}
                  href={generateShareLinks('Blog Post Title').twitter}
                  target="_blank"
                />
                <Button
                  type="link"
                  icon={<LinkedinOutlined />}
                  href={generateShareLinks('Blog Post Title').linkedin}
                  target="_blank"
                />
              </div>
            }
            title="Share on"
            trigger="click"
          >
            <Button type="primary">Share</Button>
          </Popover>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
