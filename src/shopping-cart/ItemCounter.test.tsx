import { fireEvent, render, screen } from '@testing-library/react';
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
    // screen.debug();
    expect( screen.getAllByText(quantity) ).toBeDefined();
  });
  test( 'should increase count in +1 button is pressed', () => {
    render(<ItemCounter productName={'test-item'} quantity={1}/>);
    const [, addButton] = screen.getAllByRole('button');
    fireEvent.click(addButton);
    expect( screen.getByText('2') ).toBeDefined();
  });
  test( 'should decrease count in -1 button is pressed', () => {
    render(<ItemCounter productName={'test-item'} quantity={2}/>);
    const [ minusButton ] = screen.getAllByRole('button');
    fireEvent.click(minusButton);
    expect( screen.getByText('1') ).toBeDefined();
  });
  test( 'should not decrease count when -1 button is pressed and count is 1', () => {
    render(<ItemCounter productName={'test-item'} quantity={1}/>);
    const [ minusButton ] = screen.getAllByRole('button');
    fireEvent.click(minusButton);
    expect( screen.getByText('1') ).toBeDefined();
  });
  test( 'should change to read when count is 1', () => {
    const quantity = 1;
    const prodName = 'Nintendo Switch';
    render(<ItemCounter productName={prodName} quantity={quantity}/>);
    let itemText = screen.getByText(prodName);
    expect( itemText.style.color ).toBe('red');
    const [, addButton] = screen.getAllByRole('button');
    fireEvent.click(addButton);
    itemText = screen.getByText(prodName);
    expect( itemText.style.color ).toBe('');
  });
});