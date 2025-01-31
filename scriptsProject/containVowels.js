function containsVowels(str) {
    return /[aeiouAEIOU]/.test(str);
  }

  console.log(containsVowels("Hello"));
  console.log(containsVowels("12kim"));
