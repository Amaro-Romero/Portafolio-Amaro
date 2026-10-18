import React from 'react';
import { Card, Row, Col, Typography, Button, Avatar } from 'antd';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export const CardPerfil = ({ personal }) => {
  return (
    <section id="personal" style={{ padding: '60px 20px', backgroundColor: '#f0f2f5' }}>
      <Card style={{ maxWidth: '900px', margin: '0 auto', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={8} style={{ textAlign: 'center' }}>
            <Avatar size={160} src={personal.avatar} />
          </Col>
          <Col xs={24} md={16}>
            <Title level={2}>{personal.nombre}</Title>
            <Title level={4} type="secondary">{personal.titulo}</Title>
            <Text type="secondary" style={{ display: 'block', marginBottom: '12px', fontWeight: 'bold' }}>
              {personal.institucion}
            </Text>
            <Paragraph style={{ fontSize: '16px' }}>{personal.descripcion}</Paragraph>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button type="primary" icon={<LinkedinOutlined />} href={personal.linkedin} target="_blank" size="large">
                LinkedIn
              </Button>
              <Button icon={<GithubOutlined />} href={personal.github} target="_blank" size="large">
                GitHub
              </Button>
              <Button type="default" danger icon={<MailOutlined />} href={`mailto:${personal.email}`} size="large">
                {personal.email}
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </section>
  );
};