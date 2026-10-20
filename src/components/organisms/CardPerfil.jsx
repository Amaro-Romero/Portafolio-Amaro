import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { TitleSection } from '../atoms/TitleSection';
import { AvatarPerfil } from '../atoms/AvatarPerfil';
import { SocialLinks } from '../molecules/SocialLinks';

const { Title, Paragraph, Text } = Typography;

export const CardPerfil = ({ personal }) => {
  return (
    <section id="personal" style={{ padding: '60px 20px', backgroundColor: '#f0f2f5' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <TitleSection>SOBRE MÍ</TitleSection>
        <Card style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={8} style={{ textAlign: 'center' }}>
              <AvatarPerfil src={personal.avatar} alt={personal.nombre} />
            </Col>
            <Col xs={24} md={16}>
              <Title level={2}>{personal.nombre}</Title>
              <Title level={4} type="secondary">{personal.titulo}</Title>
              <Text type="secondary" style={{ display: 'block', marginBottom: '12px', fontWeight: 'bold' }}>
                {personal.institucion}
              </Text>
              <Paragraph style={{ fontSize: '16px' }}>{personal.descripcion}</Paragraph>
              <SocialLinks 
                linkedin={personal.linkedin} 
                github={personal.github} 
                email={personal.email} 
              />
            </Col>
          </Row>
        </Card>
      </div>
    </section>
  );
};