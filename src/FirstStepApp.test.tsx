import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { FirstStepsApp } from './FirstStepApp';

const mockItemCounter = vi.fn( () =>  {
  return <div>Mocked ItemCounter</div>;
});

vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter:( props: unknown ) => mockItemCounter(props as any),
}));

// vi.mock('./shopping-cart/ItemCounter', () => ({
//   ItemCounter: ( props: unknown ) => 
//     <div data-testid="mocked-item-counter" name= {props.productName} quantity={props.quantity}>
//       Mocked ItemCounter
//     </div>,
// }));

describe('FirstStepApp.test', () => {

  afterEach( () => {
    vi.clearAllMocks();
  } )

  test( 'should match with snapshot', () => {
    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();
  });

  test( 'should render the correct number of ItemCounter component', () => {
    render(<FirstStepsApp />);
    expect( screen.getAllByText('Mocked ItemCounter') ).toHaveLength(3);
  });

  test( 'should render ItemCounter with correct params', () => {
    render(<FirstStepsApp />);
    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenCalledWith({ productName: 'Plays station 5', quantity: 1 });
    expect(mockItemCounter).toHaveBeenCalledWith({ productName: 'Xbox one', quantity: 1 });
    expect(mockItemCounter).toHaveBeenCalledWith({ productName: 'Azus Rog', quantity: 1 });
  });
});