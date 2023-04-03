import { medianElems } from "../mathFns";

describe('medianElems', () => {
  it('It should return single median value for odd number of values [Sorted]', () => {
    expect(medianElems([2, 3, 5, 7, 11], true)).toEqual([5]);
  });

  it('It should return single median value for odd number of values [Unsorted]', () => {
    expect(medianElems([2, 7, 11, 3, 5])).toEqual([5]);
  });

  it('It should return two median values for even number of values [Sorted]', () => {
    expect(medianElems([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37], true)).toEqual([13, 17]);
  });

  it('It should return two median values for even number of values [Unsorted]', () => {
    expect(medianElems([2, 3, 5, 19, 23, 29, 31, 37, 7, 11, 13, 17])).toEqual([13, 17]);
  });
});