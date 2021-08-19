function findDanishLetter(danishString) {
    const dasnishLetters = ['æ', 'ø', 'å'];

    danishString = danishString.toLowerCase();
    var countÅ = danishString.split('å').length - 1;
    var countØ = danishString.split('ø').length - 1;
    var countÆ = danishString.split('æ').length - 1;
    let total = countÆ + countÅ + countØ;
    console.log('Total:' + total + '  Å:' + countÅ + '  Ø:' + countØ + '  Æ:' + countÆ);
}
//const danishString = "Jeg Ø har en blÅ bil"; 

const danishString = "Blå grød med røde bær";

findDanishLetter(danishString); // returns {total: 1, å: 1}

//notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}