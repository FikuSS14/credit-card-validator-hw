export function validateCardNumber(cardNumber) {
    const cleaned = cardNumber.replace(/\s+/g, '').replace(/-/g, '');
    if (!/^\d+$/.test(cleaned)) return false;
  
    let sum = 0;
    let shouldDouble = false;
  
    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned[i], 10);
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
  
    return sum % 10 === 0;
  }