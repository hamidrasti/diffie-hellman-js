/**
 * Check if variable isset
 *
 * @param variable
 * @returns {boolean}
 */
export const isset = (variable) => {
  return Boolean(variable);
};

/**
 * Takes the number to the power exp modulo mod
 *
 * @param num
 * @param exp
 * @param mod
 * @returns {bigint}
 */
export const powMod = (num, exp, mod) => {
  return BigInt(num) ** BigInt(exp) % BigInt(mod);
};

export const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min + 1;
};

export const randomBigInt = (length = 448) => {
  let num = '';
  for (let i = 0; i < Math.round(length / 14); i++) {
    num += random(10000000000000, 100000000000000);
  }
  return BigInt(num);
};