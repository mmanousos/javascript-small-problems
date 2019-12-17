function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
  let months = 0;
  let savings = 0;
  while (startPriceOld + savings < startPriceNew) {
    savings += savingperMonth;
    if (months % 2 === 1) percentLossByMonth += .5;
    startPriceOld -= startPriceOld * (percentLossByMonth / 100);
    startPriceNew -= startPriceNew * (percentLossByMonth / 100);
    months += 1;
  }
  return [months, Math.round(startPriceOld + savings - startPriceNew)];
}

console.log(nbMonths(2000, 8000, 1000, 1.5)); // [6, 766]
console.log(nbMonths(12000, 8000, 1000, 1.5)); // [0, 4000]
console.log(nbMonths(8000, 8000, 1000, 1.5)); // [0, 0]