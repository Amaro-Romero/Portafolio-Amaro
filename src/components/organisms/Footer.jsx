import React from 'react';
import { Layout, Typography } from 'antd';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <AntFooter style={{ textAlign: 'center', backgroundColor: '#001529', color: '#fff', padding: '20px' }}>
      <Text style={{ color: '#fff' }}>© {year} Amaro Romero. Todos los derechos reservados.</Text>
    </AntFooter>
  );
};