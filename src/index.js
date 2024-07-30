const ones = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
    'eighteen', 'nineteen'
];
  
const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

//999 99

module.exports = function toReadable (number) {
  let result = '';

  if(number === 0) return 'zero';

  while(number > 0) {
    if(number >= 100) {
        result += `${ones[Math.floor(number / 100).toString()]} hundred `;
        number %= 100;
    }
    else if(number > 10) {
        if(number < 20) {
            result += `${ones[Math.floor(number)]} `;
            break;
        }
        
        result += `${tens[Math.floor(number / 10)]} `;

        if(number % 10 === 0) {
            break;
        }

        number %= 10;
    }
    else {
        result += `${ones[Math.floor(number)]}`;
        number = 0;
    }
  }

  return result.replace(/\s+/g, ' ').trim();
}
