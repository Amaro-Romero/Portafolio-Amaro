import React from 'react';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';
import { ButtonSocial } from '../atoms/ButtonSocial';

export const SocialLinks = ({ linkedin, github, email }) => {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {linkedin && (
        <ButtonSocial type="primary" icon={<LinkedinOutlined />} href={linkedin}>
          LinkedIn
        </ButtonSocial>
      )}
      {github && (
        <ButtonSocial icon={<GithubOutlined />} href={github}>
          GitHub
        </ButtonSocial>
      )}
      {email && (
        <ButtonSocial type="default" danger icon={<MailOutlined />} href={`mailto:${email}`}>
          {email}
        </ButtonSocial>
      )}
    </div>
  );
};