import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AvatarPerfil } from './AvatarPerfil';

describe('AvatarPerfil Atom', () => {
  it('debe renderizar la imagen de perfil con el texto alternativo', () => {
    render(<AvatarPerfil src="/foto.jpg" alt="Foto de Amaro" />);
    
    const imagen = screen.getByRole('img');
    expect(imagen).toBeInTheDocument();
  });
});