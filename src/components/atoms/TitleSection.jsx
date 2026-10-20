import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

export const TitleSection = ({ children }) => {
  return (
    <Title
      level={2}
      style={{
        textAlign: 'center',
        marginBottom: '40px',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textTransform: 'uppercase'
      }}
    >
      {children}
    </Title>
  );
};