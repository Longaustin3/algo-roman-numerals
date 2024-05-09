exports.toRoman = function (num) {
  const romanToArabic = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
  }

  let romanNumeral = ""
  for (let numeral in romanToArabic) {
    let arabicNum = romanToArabic[numeral]
    let timesRepeated = Math.floor(num / arabicNum)
    for (let i = 0; i < timesRepeated; i++) {
      romanNumeral += numeral
      num -= arabicNum
    }
  }
  return romanNumeral
};
