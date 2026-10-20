import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TitleSection } from './TitleSection';

describe('TitleSection Atom', () => {
  it('debe renderizar el título de la sección correctamente', () => {
    render(<TitleSection>SOBRE MÍ</TitleSection>);
    
    const titulo = screen.getByText('SOBRE MÍ');
    expect(titulo).toBeInTheDocument();
    expect(titulo).toBeVisible();
  });
});