import { pluralizeWords } from "./coding-challenge-1";

describe('coding-challenge-1 tests', () => {
  
  test('is word in words Jereme', () => {
    expect(pluralizeWords(['apple', 'orange', 'Jereme'])).toStrictEqual(['apples', 'oranges', "Jereme's"]);
    expect(pluralizeWords(['apple', 'orange', 'jereme'])).toStrictEqual(['apples', 'oranges', "Jereme's"]);
    expect(pluralizeWords(['apple', 'orange', 'Nikhil'])).toStrictEqual(['apples', 'oranges', 'Nikhils']);
  });

  test('does word in words have any whitespace', () => {
    expect(pluralizeWords(['apple', 'orange', 'Jereme']).indexOf(' ')).toBeFalsy;
    expect(pluralizeWords(['appl e', 'oranges', 'Jereme']).indexOf(' ')).toBeTruthy;
  });

  // test('does word in words have an s on the end already', () => {

  // });

  // test('does the name in words have white space', () => {
  
  // });
  
});
