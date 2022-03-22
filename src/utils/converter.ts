export function convertNumberToCommaNumber(income: number): string {
  return String(income)
    .split('')
    .reverse()
    .reduce((acc, cur, index) => {
      if (index && index % 3 === 0) {
        return `${cur},${acc}`;
      }
      return cur + acc;
    }, '');
}
