import React from 'react';
import { Menu, Layout, ConfigProvider } from 'antd';

const { Header } = Layout;

export const Navbar = () => {
  const items = [
    { label: <a href="#personal">Sobre Mí</a>, key: 'personal' },
    { label: <a href="#experiencia">Experiencia</a>, key: 'experiencia' },
    { label: <a href="#estudios">Estudios</a>, key: 'estudios' },
    { label: <a href="#proyectos">Proyectos</a>, key: 'proyectos' },
    { label: <a href="#contacto">Contacto</a>, key: 'contacto' },
  ];

  return (
    <Header style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%', display: 'flex', alignItems: 'center', backgroundColor: '#001529' }}>
      <div style={{ color: '#52c41a', fontSize: '20px', fontWeight: 'bold', marginRight: '40px' }}>
        Portafolio
      </div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#52c41a', // Cambia el selector activo del menú a verde
          },
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['personal']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </ConfigProvider>
    </Header>
  );
};