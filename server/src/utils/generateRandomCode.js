const CHARACTERS =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const generateRandomCode = () => {
  let code = "";
  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * CHARACTERS.length - 1);
    code += CHARACTERS[randomIndex];
  }
  return code;
};
