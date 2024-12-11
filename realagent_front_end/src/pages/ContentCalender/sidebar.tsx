import React from 'react';
import { Card, Text, Divider, Flex } from '@mantine/core';

const Sidebar: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        background: '#f9f9f9',
        width: '240px',
      }}
    >
      {/* Bot Viewer Container */}
      <div
        style={{
          padding: '16px',
          background: '#f9f9f9',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center', // Align logo and text in a row
        }}
      >
        <img
          src="/public/Activities.png" // Replace with the actual image path
          alt="bot viewer icon"
          style={{ width: '18px', height: '18px', marginRight: '8px' }} // Add margin to space the text from the logo
        />
        <Text size="sm" fw="bold" style={{ color: '#007BFF' }}>
          Bot Viewer
        </Text>
      </div>

      {/* Sidebar Content Container */}
      <div
        style={{
          flexGrow: 1,
          background: '#f9f9f9',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
          overflowY: 'auto',
        }}
      >
        <Card
          padding="16px"
          radius="lg"
          style={{
            height: '100%',
            background: 'transparent',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Social Media Bot Header */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 0',
              marginBottom: '16px',
            }}
          >
            {/* Social Media Bot Icon */}
            <img
              src="/public/Frame 1000005666.png" // Replace with the actual path for the icon
              alt="Social Media Bot Icon"
              style={{ width: '40px', height: '40px' }} // Adjust the size as needed
            />
            {/* Social Media Bot Text */}
            <Text fw="bold" size="md" style={{ color: '#292929' }}>
              Social Media Bot
            </Text>
          </div>

          <Divider my="sm" label="Discover" labelPosition="center" />

          {/* Navigation Links */}
          <Flex direction="column" gap="12px">
            {/* Publish */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                color: '#495057',
                padding: '10px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                background: 'transparent',
                transition: 'background 0.2s',
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#edf2f7';
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  'transparent';
              }}
            >
              {/* Replace IconEdit with image */}
              <img
                src="/public/Component 56.png" // Replace with the actual image path
                alt="Publish Icon"
                style={{ width: '18px', height: '18px' }}
              />
              <span>Publish</span>
            </div>

            {/* Activities */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                color: '#4c6ef5', // Highlighted link
                padding: '10px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                background: '#edf2f7', // Highlighted background
                fontWeight: 'bold',
              }}
            >
              {/* Replace IconActivity with image */}
              <img
                src="/public/Vector.png" // Replace with the actual image path
                alt="Activities Icon"
                style={{ width: '18px', height: '18px' }}
              />
              <span>Activities</span>
            </div>

            {/* Brand Setup */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                color: '#495057',
                padding: '10px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                background: 'transparent',
                transition: 'background 0.2s',
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#edf2f7';
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  'transparent';
              }}
            >
              {/* Replace IconSettings with image */}
              <img
                src="/public/Component 58.png" // Replace with the actual image path
                alt="Brand Setup Icon"
                style={{ width: '18px', height: '18px' }}
              />
              <span>Brand Setup</span>
            </div>

            {/* Create Poster */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                color: '#495057',
                padding: '10px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                background: 'transparent',
                transition: 'background 0.2s',
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#edf2f7';
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  'transparent';
              }}
            >
              {/* Replace IconBrush with image */}
              <img
                src="/public/Component 57.png" // Replace with the actual image path
                alt="Create Poster Icon"
                style={{ width: '18px', height: '18px' }}
              />
              <span>Create Poster</span>
            </div>
          </Flex>
        </Card>
      </div>
    </div>
  );
};

export default Sidebar;
