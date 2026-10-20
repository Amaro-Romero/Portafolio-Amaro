import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CardPerfil } from './CardPerfil';

describe('CardPerfil Organism', () => {
  const datosMock = {
    nombre: 'AMARO ROMERO INFANTE',
    titulo: 'Analista Programador Computacional',
    institucion: 'Duoc UC Sede Maipú',
    descripcion: 'Estudiante de desarrollo software.',
    avatar: '/foto.jpg',
    email: 'amar.romero@duocuc.cl',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  };

  it('debe renderizar la información personal completa', () => {
    render(<CardPerfil personal={datosMock} />);
    
    expect(screen.getByText('AMARO ROMERO INFANTE')).toBeInTheDocument();
    expect(screen.getByText('Analista Programador Computacional')).toBeInTheDocument();
  });
});