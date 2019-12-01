import { DiffieHellman } from '../DiffieHellman';

describe('diffie-hellman key exchange', () => {
  it('should generate shared keys', () => {

    const aliceOptions = {
      prime: '563',
      generator: '5',
      private: '9'
    };
    const bobOptions = {
      prime: '563',
      generator: '5',
      private: '14'
    };

    const alice = new DiffieHellman(aliceOptions.prime, aliceOptions.generator, aliceOptions.private);
    const bob = new DiffieHellman(bobOptions.prime, bobOptions.generator, bobOptions.private);

    alice.generateKeys();
    bob.generateKeys();

    expect(alice.getPublicKey()).toBe('78');
    expect(bob.getPublicKey()).toBe('534');

    const aliceSecretKey = alice.computeSecretKey(bob.getPublicKey());
    const bobSecretKey = bob.computeSecretKey(alice.getPublicKey());

    // both Alice and Bob should now have the same secret key
    expect(aliceSecretKey).toBe('117');
    expect(bobSecretKey).toBe('117');

  });
});