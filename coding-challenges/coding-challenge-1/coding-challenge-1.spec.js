import { pluralizeWords } from "./coding-challenge-1";

describe('coding-challenge-1 tests', () => {
  
test('is word in words Jereme', () => {
    expect(pluralizeWords(['apple', 'orange', 'Jereme'])).toStrictEqual(['apples', 'oranges', "Jereme's"]);
    expect(pluralizeWords(['apple', 'orange', 'jereme'])).toStrictEqual(['apples', 'oranges', "Jereme's"]);
    expect(pluralizeWords(['apple', 'orange', 'Nikhil'])).toStrictEqual(['apples', 'oranges', 'Nikhils']);
  });

  // test('does word in words have any whitespace', () => {
  //   expect(pluralizeWords(['apple', 'orange', 'Jereme'])).toStrictEqual(['apples', 'oranges', "Jereme's"]);
  //   expect(pluralizeWords(['white grape', 'oranges', 'Jereme'])).toStrictEqual(['white grapes', 'oranges', "Jereme's"]);
  // });

  // test('does word in words have an s on the end already', () => {
  //   expect(pluralizeWords(['apples', 'oranges', 'Jereme'])).toStrictEqual(['apples', 'oranges', "Jereme's"]);
  // });

  // test('does the name in words have white space', () => {
  //   expect(pluralizeWords(['apple', 'oranges', 'Metta Sandiford-Artest'])).toStrictEqual(['apples', 'oranges', "Metta Sandiford-Artest"]);
  // });
  
});
