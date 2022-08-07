import { pluralizeWords } from "./coding-challenge-1";
import { smolBirbs } from './coding-challenges/interview-challenge-1';
import { reverseStr } from './coding-challenges/interview-challenge-2';

describe('coding-challenge-1 tests', () => {
  
  test('is word in words Jereme', () => {
    expect(pluralizeWords(['apple', 'orange', 'Jereme'])).toStrictEqual(['apples', 'oranges', "Jereme's"]);
    expect(pluralizeWords(['apple', 'orange', 'jereme'])).toStrictEqual(['apples', 'oranges', "Jereme's"]);
    expect(pluralizeWords(['apple', 'orange', 'Nikhil'])).toStrictEqual(['apples', 'oranges', 'Nikhils']);
  });

  test('does word in words have any whitespace', () => {
    expect(pluralizeWords(['apple', 'orange', 'Jereme'])).toStrictEqual(['apples', 'oranges', "Jereme's"]);
    expect(pluralizeWords(['white grape', 'oranges', 'Jereme'])).toStrictEqual(['white grapes', 'oranges', "Jereme's"]);
  });

  test('does word in words have an s on the end already', () => {
    expect(pluralizeWords(['apples', 'oranges', 'Jereme'])).toStrictEqual(['apples', 'oranges', "Jereme's"]);
  });

  test('does the name in words have white space', () => {
    expect(pluralizeWords(['apple', 'oranges', 'Metta Sandiford-Artest'])).toStrictEqual(['apples', 'oranges', "Metta Sandiford-Artest"]);
  });
  
  test('whether words return all lowercase', () => {
    expect(smolBirbs(['Northern Cardinal', 'Gray catbird', 'cAROLINA wREN'])).toStrictEqual(['northern cardinal', 'gray catbird', 'carolina wren'])
  });
   
  test('whether array being passed in is empty or not', () => {
    expect(smolBirbs(['Northern Cardinal'])).toStrictEqual(['northern cardinal']);
    expect(smolBirbs([])).toStrictEqual([]);
    expect(smolBirbs(null)).toStrictEqual('Sorry. No birb array being passed in. Try again.');
    expect(smolBirbs(undefined)).toStrictEqual('Sorry. No birb array being passed in. Try again.');
  });

  test('whether string is reversed', () => {
    [
      { string: 'jereme', expectedResult: 'emerej' },
      { string: 'formula1', expectedResult: '1alumrof' },
      { string: '', expectedResult: '' },
      { string: null, expectedResult: '' }].
      
      forEach(test => {
        expect(reverseStr(test.string)).toBe(test.expectedResult)
      })
  });

});
