function calculateNumber(type, a, b) {
    const anum = Math.round(a);
    const bnum = Math.round(b);
    switch (type) {
      case 'SUM':
        return anum + bnum;
      case 'SUBTRACT':
        return anum - bnum;
      case 'DIVIDE':
        if (bnum === 0) {
          return 'Error';
        }
        return anum / bnum;
      default:
        return 'Invalid type';
    }
  }
  
  module.exports = calculateNumber;
