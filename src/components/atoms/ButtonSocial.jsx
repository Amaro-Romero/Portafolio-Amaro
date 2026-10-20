import React from 'react';
import { Button } from 'antd';

export const ButtonSocial = ({ icon, href, children, type = 'default', danger = false }) => {
  return (
    <Button
      type={type}
      danger={danger}
      icon={icon}
      href={href}
      target={href?.startsWith('http') ? '_blank' : '_self'}
      size="large"
    >
      {children}
    </Button>
  );
};