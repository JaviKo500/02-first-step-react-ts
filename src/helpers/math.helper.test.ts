import { describe, expect, test } from 'vitest';
import { add } from './math.helper';
describe('Math.helper.test', () => {
  test( 'should add two positive numbers', () => {
    // ! 1 Arrange
    const a = 1;
    const b = 1;
    // ! 2 act
    const result = add( a,b );
    // ! 3 Assert
    expect( result ).toBe( 2 );
  });
});