export default class PalindromeChecker {
  // eslint-disable-next-line class-methods-use-this
  isAPalindrome(str: string): boolean {
    const lowerCase = str
      .toLocaleLowerCase()
      .split("")
      .filter((c) => c !== " ")
      .join("");
    const reversed = lowerCase.split("").reverse().join("");
    return reversed === lowerCase;
  }
}
