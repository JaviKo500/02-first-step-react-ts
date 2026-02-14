import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ItemCounter } from './ItemCounter';
describe('ItemCounter.test', () => {
  test( 'should render with defaults values', () => {
    const prodName = 'test-item';
    render(<ItemCounter productName={prodName}/>);
    // screen.debug();
    expect( screen.getByText(prodName) ).not.toBeNull();
  });
  test( 'should render with custom quantity', () => {
    const prodName = 'Nintendo Switch';
    const quantity = 2;
    render(<ItemCounter productName={prodName} quantity={quantity}/>);
    screen.debug();
    expect( screen.getAllByText(quantity) ).toBeDefined();
  });
});