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

    it.each(sentences)(`Should be return true to "%s"`, (sentence) => {
      const isPalindrome = palindrome(sentence);

      expect(isPalindrome).toBeTruthy();
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

    it.each(sentences)(`Should be return false to "%s"`, (sentence) => {
      const isPalindrome = palindrome(sentence);

      expect(isPalindrome).toBeFalsy();
    });
  });
});
