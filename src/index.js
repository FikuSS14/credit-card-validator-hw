import './style.css';
import visaLogo from './assets/visa.png';
import mastercardLogo from './assets/mastercard.png';
import mirLogo from './assets/mir.png';
import amexLogo from './assets/amex.png';
import jcbLogo from './assets/jcb.png';
import dinersLogo from './assets/diners.png';

import { validateCardNumber } from './utils/validateCard.js';
import { getCardType } from './utils/getCardType.js';

const cardLogos = {
  visa: visaLogo,
  mastercard: mastercardLogo,
  mir: mirLogo,
  amex: amexLogo,
  jcb: jcbLogo,
  diners: dinersLogo,
};

document.addEventListener('DOMContentLoaded', () => {
  const cardInput = document.getElementById('card-number');
  const validateBtn = document.getElementById('validate-btn');
  const resultDiv = document.getElementById('result');

  const logos = document.querySelectorAll('.logo');
  logos[0].src = visaLogo;
  logos[1].src = mastercardLogo;
  logos[2].src = mirLogo;
  logos[3].src = amexLogo;
  logos[4].src = jcbLogo;
  logos[5].src = dinersLogo;

  validateBtn.addEventListener('click', () => {
    const cardNumber = cardInput.value.trim();

    if (!cardNumber) {
      resultDiv.innerHTML = '<p style="color:red;">Please enter a card number.</p>';
      return;
    }

    const isValid = validateCardNumber(cardNumber);
    const cardType = getCardType(cardNumber);

    if (isValid) {
      const logoSrc = cardLogos[cardType] || '';
      resultDiv.innerHTML = `
        <p style="color:green;">✅ Valid card!</p>
        <p>Type: ${cardType}</p>
        ${logoSrc ? `<img src="${logoSrc}" alt="${cardType}" style="width: 50px; height: 30px;">` : ''}
      `;
    } else {
      resultDiv.innerHTML = '<p style="color:red;">❌ Invalid card number.</p>';
    }
  });
});