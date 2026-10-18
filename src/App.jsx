import React from 'react';
import { Layout } from 'antd';
import { portafolioData } from './data/portafolioData';
import { Navbar } from './components/organisms/Navbar';
import { CardPerfil } from './components/organisms/CardPerfil';
import { ContactoSeccion } from './components/organisms/ContactoSeccion';
import { Footer } from './components/organisms/Footer';

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Content>
        <CardPerfil personal={portafolioData.personal} />
        <ContactoSeccion />
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;