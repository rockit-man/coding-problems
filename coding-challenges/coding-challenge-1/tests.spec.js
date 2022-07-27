import { pluralizeWords } from "./coding-challenge-1";

describe('coding-challenge-1 tests', () => {
  
  test('is word in words Jereme', () => {
    expect(pluralizeWords(['apple', 'orange', 'Jereme'])).toBeTruthy();
    expect(pluralizeWords(['apple', 'orange'])).toBeFalsy();
  });
  
})
