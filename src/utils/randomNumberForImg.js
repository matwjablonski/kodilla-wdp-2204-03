export const randomNumberForImg = () => {
  const random = parseInt(Math.floor(Math.random() * 5) + 1, 10);

  return random;
};
