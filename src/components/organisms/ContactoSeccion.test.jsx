import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ContactoSeccion } from './ContactoSeccion';

describe('ContactoSeccion Organism', () => {
  it('debe renderizar el botón para enviar mensaje', () => {
    render(<ContactoSeccion />);
    
    const botonEnviar = screen.getByRole('button', { name: /enviar mensaje/i });
    expect(botonEnviar).toBeInTheDocument();
  });
});