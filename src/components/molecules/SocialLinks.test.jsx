import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SocialLinks } from './SocialLinks';

describe('SocialLinks Molecule', () => {
  it('debe mostrar los enlaces sociales recibidos', () => {
    render(
      <SocialLinks
        linkedin="https://linkedin.com"
        github="https://github.com"
        email="amar.romero@duocuc.cl"
      />
    );
    
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('amar.romero@duocuc.cl')).toBeInTheDocument();
  });
});