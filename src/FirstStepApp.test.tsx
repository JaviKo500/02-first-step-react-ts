import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { FirstStepsApp } from './FirstStepApp';
describe('FirstStepApp.test', () => {
  test( 'should match with snapshot', () => {
    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();
  });
});