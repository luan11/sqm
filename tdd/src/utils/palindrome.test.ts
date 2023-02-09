import palindrome from './palindrome';

describe(`Palindrome`, () => {
  describe(`With valid sentences`, () => {
    const sentences = [
      `Rotator`,
      `bob`,
      `madam`,
      `mAlAyAlam`,
      `1`,
      `Able was I, ere I saw Elba`,
      `Madam I'm Adam`,
      `Step on no pets.`,
      `Top spot!`,
      `02/02/2020`,
      `Socorram-me subi no ônibus em marrocos`,
    ];

    it(`Should return true`, () => {
      sentences.forEach((sentence) => {
        expect(palindrome(sentence)).toBeTruthy();
      });
    });
  });

  describe(`With invalid sentences`, () => {
    const sentences = [
      `xyz`,
      `elephant`,
      `Country`,
      `Top . post!`,
      `Wonderful-fool`,
      `Wild imagination!`,
    ];

    it(`Should return false`, () => {
      sentences.forEach((sentence) => {
        expect(palindrome(sentence)).toBeFalsy();
      });
    });
  });
});
