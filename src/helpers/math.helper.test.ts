import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';
describe('Math.helper.test add', () => {
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

describe('Math.helper.test subtract', () => {
  test( 'should subtract two positive numbers', () => {
    // ! 1 Arrange
    const a = 1;
    const b = 1;
    // ! 2 act
    const result = subtract( a,b );
    // ! 3 Assert
    expect( result ).toBe( 0 );
  });

  test( 'should return a negative number ', () => {
    // ! 1 Arrange
    const a = 1;
    const b =  5;
    // ! 2 act
    const result = subtract( a,b );
    // ! 3 Assert
    expect( result ).toBe( -4 );
  });
});

describe('Math.helper.test multiply', () => {
  test( 'Should return 4', () => {
    // ! Arrange
    const a = 2;
    const b = 2;
    // ! Act
    const result = multiply( a,b );
    // ! Assert
    expect( result ).toBe( 4 );
  });
  test( 'Should return -4', () => {
    // ! Arrange
    const a = 2;
    const b = -2;
    // ! Act
    const result = multiply( a,b );
    // ! Assert
    expect( result ).toBe( -4 );
  });

  test( 'should divide two positives numbers', () => {
    // ! Arrange
    const a = 2;
    const b = 2;
    // ! Act
    const result = divide( a,b );
    // ! Assert
    expect( result ).toBe( 1 );
  });
});