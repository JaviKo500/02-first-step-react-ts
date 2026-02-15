import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { FirstStepsApp } from './FirstStepApp';

vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: () => <div>Mocked ItemCounter</div>,
}));

describe('FirstStepApp.test', () => {
  test( 'should match with snapshot', () => {
    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();
  });

  test( 'should render the correct number of ItemCounter component', () => {
    render(<FirstStepsApp />);
    expect( screen.getAllByText('Mocked ItemCounter') ).toHaveLength(3);
  });
});