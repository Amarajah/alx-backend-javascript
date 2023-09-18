function calculateNumber(type, a, b) {
    const xa = Math.round(a);
    const xb = Math.round(b);
    let c = 0;
    switch (type) {
    case 'SUM':
	c = xa + xb;
	break;
    case 'SUBTRACT':
	c = xa - xb;
	break;
    case 'DIVIDE':
      if (xb === 0) {
            c = "Error";
      } else {
            c = xa / xb;
      }
      break;
    }
    return c;
}

module.exports = calculateNumber;
