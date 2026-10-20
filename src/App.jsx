import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import { portafolioData } from './data/portafolioData';
import { Navbar } from './components/organisms/Navbar';
import { CardPerfil } from './components/organisms/CardPerfil';
import { ExperienciaSeccion, EstudiosSeccion } from './components/organisms/ExperienciaSeccion';
import { ProyectosSeccion } from './components/organisms/ProyectosSeccion';
import { ContactoSeccion } from './components/organisms/ContactoSeccion';
import { Footer } from './components/organisms/Footer';

const { Content } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#52c41a', // Verde principal de Ant Design (puedes cambiarlo por #2e7d32 o #10b981 si prefieres otro tono)
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Navbar />
        <Content>
          <CardPerfil personal={portafolioData.personal} />
          <ExperienciaSeccion experiencia={portafolioData.experiencia} />
          <EstudiosSeccion estudios={portafolioData.estudios} />
          <ProyectosSeccion proyectos={portafolioData.proyectos} />
          <ContactoSeccion />
        </Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;