import { pluralizeWords } from "./coding-challenge-1";

describe('coding-challenge-1 tests', () => {
  
  test('is word in words Jereme', () => {
    expect(pluralizeWords(['apple', 'orange', 'Jereme'])).toStrictEqual(['apples', 'oranges', "Jereme's"]);
    expect(pluralizeWords(['apple', 'orange', 'jereme'])).toStrictEqual(['apples', 'oranges', "Jereme's"]);
    expect(pluralizeWords(['apple', 'orange', 'Nikhil'])).toStrictEqual(['apples', 'oranges', 'Nikhils']);
  });
  
})
