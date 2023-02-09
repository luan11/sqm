const palindrome = (sentence: string): boolean => {
  const sanitizerRegExp = /\W+/g;
  const parsedSentence = sentence.replace(sanitizerRegExp, ``);
  const reversedSentence = parsedSentence.split(``).reverse().join(``);

  return parsedSentence.toLowerCase() === reversedSentence.toLowerCase();
};

export default palindrome;
