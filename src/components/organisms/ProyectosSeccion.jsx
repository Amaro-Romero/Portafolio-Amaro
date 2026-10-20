import React from 'react';
import { Row, Col } from 'antd';
import { TitleSection } from '../atoms/TitleSection';
import { CardProyecto } from '../molecules/CardProyecto';

export const ProyectosSeccion = ({ proyectos }) => {
  return (
    <section id="proyectos" style={{ padding: '60px 20px', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <TitleSection>PROYECTOS</TitleSection>
        <Row gutter={[24, 24]}>
          {proyectos.map((proj) => (
            <Col xs={24} md={12} key={proj.id}>
              <CardProyecto nombre={proj.nombre} descripcion={proj.descripcion} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};