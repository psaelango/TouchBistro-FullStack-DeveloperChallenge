export const medianElems = (elems: number[], isSorted = false): number[] => {
  const mid = Math.floor(elems.length / 2);
  const sortedElems = isSorted ? [...elems] : [...elems].sort((a, b) => a - b);
  return sortedElems.length % 2 !== 0 ? [sortedElems[mid]] : [sortedElems[mid - 1] , sortedElems[mid]];
} 