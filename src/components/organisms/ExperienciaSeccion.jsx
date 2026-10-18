import React from 'react';
import { Card, Timeline, Typography } from 'antd';

const { Title, Text } = Typography;

export const ExperienciaSeccion = ({ experiencia, estudios }) => {
  return (
    <section id="experiencia" style={{ padding: '60px 20px', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
          EXPERIENCIA LABORAL
        </Title>
        <Card style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <Timeline
            items={experiencia.map((exp) => ({
              children: (
                <div key={exp.id}>
                  <Text strong style={{ fontSize: '16px' }}>{exp.cargo}</Text>
                  <Text type="secondary" style={{ display: 'block' }}>
                    {exp.empresa} ({exp.periodo})
                  </Text>
                  <p style={{ marginTop: '8px' }}>{exp.descripcion}</p>
                </div>
              ),
            }))}
          />
        </Card>
      </div>
    </section>
  );
};

export const EstudiosSeccion = ({ estudios }) => {
  return (
    <section id="estudios" style={{ padding: '60px 20px', backgroundColor: '#f0f2f5' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
          ESTUDIOS
        </Title>
        <Card style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <Timeline
            items={estudios.map((est) => ({
              children: (
                <div key={est.id}>
                  <Text strong style={{ fontSize: '16px' }}>{est.titulo}</Text>
                  <Text type="secondary" style={{ display: 'block' }}>
                    {est.institucion} ({est.periodo})
                  </Text>
                </div>
              ),
            }))}
          />
        </Card>
      </div>
    </section>
  );
};