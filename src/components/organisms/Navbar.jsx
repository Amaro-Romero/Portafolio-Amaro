import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export const Navbar = () => {
  const items = [
    { key: 'personal', label: <a href="#personal">Perfil</a> },
    { key: 'experiencia', label: <a href="#experiencia">Experiencia</a> },
    { key: 'estudios', label: <a href="#estudios">Estudios</a> },
    { key: 'proyectos', label: <a href="#proyectos">Proyectos</a> },
    { key: 'contacto', label: <a href="#contacto">Contacto</a> },
  ];

  return (
    <Header style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%', display: 'flex', alignItems: 'center' }}>
      <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px', marginRight: '30px' }}>
        Portafolio
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['personal']} items={items} style={{ flex: 1 }} />
    </Header>
  );
};