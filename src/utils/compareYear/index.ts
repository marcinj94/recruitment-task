export const compareYear = (timestamp: number, filterValue: string) => {
  const date = new Date(timestamp);
  const year = date.getFullYear().toString();
  return year === filterValue;
};
