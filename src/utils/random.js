export const randomChar = () => {
  const letters = "qwertyuioplkjhgfdsazcvbnm";
  return letters[Math.floor(Math.random() * letters.length)];
};
