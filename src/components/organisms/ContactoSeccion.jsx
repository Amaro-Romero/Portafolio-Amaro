import React from 'react';
import { Card, Form, Input, Button, Typography, Alert } from 'antd';
import { useContacto } from '../../hooks/useContacto';

const { Title } = Typography;
const { TextArea } = Input;

export const ContactoSeccion = () => {
  const { enviado, handleSubmit } = useContacto();

  return (
    <section id="contacto" style={{ padding: '60px 20px', backgroundColor: '#f0f2f5' }}>
      <Card style={{ maxWidth: '600px', margin: '0 auto', borderRadius: '12px' }}>
        <Title level={3} style={{ textAlign: 'center', marginBottom: '24px' }}>Contacto</Title>
        
        {enviado && (
          <Alert message="¡Mensaje enviado con éxito!" type="success" showIcon style={{ marginBottom: '20px' }} />
        )}

        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Nombre" name="nombre" rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}>
            <Input placeholder="Tu nombre" size="large" />
          </Form.Item>

          <Form.Item 
            label="Correo Electrónico" 
            name="email" 
            rules={[
              { required: true, message: 'Por favor ingresa tu correo' },
              { type: 'email', message: 'Ingresa un correo válido' }
            ]}
          >
            <Input placeholder="tu@email.com" size="large" />
          </Form.Item>

          <Form.Item label="Mensaje" name="mensaje" rules={[{ required: true, message: 'Por favor escribe un mensaje' }]}>
            <TextArea rows={4} placeholder="Escribe tu mensaje aquí..." />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Enviar Mensaje
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </section>
  );
};