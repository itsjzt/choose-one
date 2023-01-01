// min is inclusive, max is exclusive
export function getRandomInRange(max: number, min = 0) {
  const distance = max - min;
  const seed = Math.random();

  return min + Math.floor(seed * distance);
}
