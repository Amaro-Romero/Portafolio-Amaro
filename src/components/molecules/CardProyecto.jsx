import React from 'react';
import { Card, Typography } from 'antd';

const { Paragraph } = Typography;

export const CardProyecto = ({ nombre, descripcion }) => {
  return (
    <Card
      title={nombre}
      hoverable
      style={{
        height: '100%',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
      }}
    >
      <Paragraph style={{ margin: 0, fontSize: '15px' }}>{descripcion}</Paragraph>
    </Card>
  );
};