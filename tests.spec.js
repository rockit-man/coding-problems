 import { isAnagram, stringSplit, isAnagramWithSplit } from "./isAnagram";

 describe('coding problem tests', () => {

  test('is anagram', () => {
    expect(isAnagram('elbow', 'below')).toBeTruthy();
    expect(isAnagram('ellbow', 'below')).toBeFalsy();
  });

  test('is string split', () => {
    expect(stringSplit('elbow')).toStrictEqual(['e', 'l', 'b', 'o', 'w']);
    expect(stringSplit('elbow t')).toStrictEqual(['e', 'l', 'b', 'o', 'w', ' ', 't'])
    expect(stringSplit('')).toBeFalsy();
    expect(stringSplit(32323)).toBeFalsy()
  });

  test('is Anagram with Split', () => {
    expect(isAnagramWithSplit('elbow', 'below')).toBeTruthy();
    expect(isAnagramWithSplit('eLbow', 'Below')).toBeTruthy();
    expect(isAnagramWithSplit('ellbow', 'below')).toBeFalsy();
    expect(isAnagramWithSplit('Motherin Law', 'Hitler Woman')).toBeTruthy();

  });


 })