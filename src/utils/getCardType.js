export function getCardType(cardNumber) {
    const cleaned = cardNumber.replace(/\s+/g, '').replace(/-/g, '');
  
    if (/^4\d{12}(\d{3})?$/.test(cleaned)) return 'visa';
    if (/^(5[1-5]\d{14}|2(22[1-9]|2[3-9]\d|[3-6]\d{2}|7[0-1]\d|720)\d{12})$/.test(cleaned)) return 'mastercard';
    if (/^3[47]\d{13}$/.test(cleaned)) return 'amex';
    if (/^35[2-8]\d{14}$/.test(cleaned)) return 'jcb';
    if (/^(30[0-5]\d{11}|3[68]\d{12})$/.test(cleaned)) return 'diners';
    if (/^220[0-4]\d{12}$/.test(cleaned)) return 'mir';
  
    return 'unknown';
  }