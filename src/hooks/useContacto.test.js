import { renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useContacto } from './useContacto';

describe('useContacto Hook', () => {
  it('debe inicializar el estado del formulario de contacto', () => {
    const { result } = renderHook(() => useContacto());
    expect(result.current).toBeDefined();
  });
});