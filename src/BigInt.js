import BigInteger from 'big-integer';

const DEFAULT_ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const BigInt = (number, base = 10, alphabet = DEFAULT_ALPHABET, caseSensitive = true) => {
    return BigInteger(number, base, alphabet, caseSensitive);
};

export default BigInt;