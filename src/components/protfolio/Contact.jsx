import React from 'react';
import { Button, Input, Space } from 'antd';
import { MailOutlined } from '@ant-design/icons'; // Import the email icon

const Contact = () => (
  <div style={{ width: '100%' }}>
    {/* Contact Heading at the top aligned to the left */}
    <h2 className="text-left mb-1 text-4xl  mx-auto">Contact</h2>
    
    {/* Contact Form */}
    <Space
      direction="vertical"
      size="middle"
      style={{
        width: '100%',
        padding: '20px', // Adds padding around the component
        backgroundColor: '#f0f2f5', // Background color for the whole container
      }}
    >
      <Space.Compact
        style={{
          width: '100%',
          border: '1px solid #d9d9d9', // Border around the input and button
          padding: '10px', // Padding inside the input/button container
          borderRadius: '5px', // Rounded corners
          backgroundColor: '#ffffff', // White background for the input and button
        }}
      >
        <Input
          placeholder="Enter your email"
          prefix={<MailOutlined />} // Adding the email icon as the prefix
          style={{
            flex: 1, // Makes the input take available space
            marginRight: '10px', // Adds space between input and button
            borderRadius: '5px', // Rounded corners for the input
          }}
        />
        <Button
          type="primary"
          style={{
            borderRadius: '5px', // Rounded corners for the button
            backgroundColor: '#4CAF50', // Custom button color
            borderColor: '#4CAF50', // Button border color
            color: 'white', // Text color
          }}
        >
          Submit
        </Button>
      </Space.Compact>
    </Space>
  </div>
);

export default Contact;
