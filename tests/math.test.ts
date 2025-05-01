import { add } from '../src/services/math.js';

describe('MathService', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should return a number', () => {
    const result = add(1, 2);
    expect(typeof result).toBe('number');
  });
});
