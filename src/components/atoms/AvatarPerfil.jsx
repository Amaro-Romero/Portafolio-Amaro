import React from 'react';
import { Avatar } from 'antd';

export const AvatarPerfil = ({ src, alt, size = 160 }) => {
  return <Avatar size={size} src={src} alt={alt} />;
};