import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ButtonSocial } from './ButtonSocial';

describe('ButtonSocial Atom', () => {
  it('debe mostrar el botón con el texto correspondiente', () => {
    render(<ButtonSocial href="https://linkedin.com">LinkedIn</ButtonSocial>);
    
    const boton = screen.getByText('LinkedIn');
    expect(boton).toBeInTheDocument();
  });
});