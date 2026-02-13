import { describe, test } from 'vitest';
import { MyAwesomeApp } from './MyAwesomeApp';
import { render, screen } from '@testing-library/react';
describe('MyAwesomeApp.test', () => {
  test( 'should render first name and last name', () => {
    render(<MyAwesomeApp />);
    screen.debug();
    console.log('<--------------- JK MyAwesomeApp.test --------------->');
    // console.log(container.innerHTML);
  });
});