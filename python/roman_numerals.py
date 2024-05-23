def to_roman(num):
    # write your code here!
    # list of the roman numeral in a dictionary
    roman_to_arabic = {
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
    
    roman_numeral = ""
    for numeral in roman_to_arabic:
        arabic_number = roman_to_arabic[numeral]
        times_repeated = num // arabic_number
        for time in range (0, times_repeated): 
            roman_numeral += numeral
            num -= arabic_number

    return roman_numeral

