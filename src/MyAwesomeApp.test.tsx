import { describe, expect, test } from 'vitest';
import { MyAwesomeApp } from './MyAwesomeApp';
import { render, screen } from '@testing-library/react';
describe('MyAwesomeApp.test', () => {
  test( 'should render first name and last name', () => {
    const { container } = render(<MyAwesomeApp />);
    screen.debug();

    const h1 = container.querySelector('h1');
    const h3  = container.querySelector('h3');

    expect(h1?.innerHTML).toContain('Javiko500');
    expect(h3?.innerHTML).toContain('Gutierrez');

  });

  test( 'should render first name and last name', () => {
    render(<MyAwesomeApp />);
    screen.debug();

    const h1 = screen.getByTestId('first-name-title', {});
    expect(h1?.innerHTML).toContain('Javiko500');
  });

  test( 'should match with snapshot', () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });

  test( 'should match with snapshot screen', () => {
    render(<MyAwesomeApp />);
    expect( screen.getByTestId('my-awesome-app') ).toMatchSnapshot();
  });
});