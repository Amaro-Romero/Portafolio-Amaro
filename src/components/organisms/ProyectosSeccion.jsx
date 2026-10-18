import React from 'react';
import { Card, Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

export const ProyectosSeccion = ({ proyectos }) => {
  return (
    <section id="proyectos" style={{ padding: '60px 20px', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
          PROYECTOS
        </Title>
        <Row gutter={[24, 24]}>
          {proyectos.map((proj) => (
            <Col xs={24} md={12} key={proj.id}>
              <Card
                title={proj.nombre}
                hoverable
                style={{
                  height: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}
              >
                <Paragraph style={{ margin: 0, fontSize: '15px' }}>{proj.descripcion}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};