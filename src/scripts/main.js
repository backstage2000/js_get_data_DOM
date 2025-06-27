'use strict';

const population = [...document.querySelectorAll('.population')];
const populationTotla = [];

for (const ch of population) {
  const num = Number(ch.textContent.replace(/,/g, ''));

  populationTotla.push(num);
}

const result = populationTotla.reduce((acc, value) => acc + value);

const totalSum = result / populationTotla.length;

const totalPopulation = document.querySelector('.total-population');

const averagePopulation = document.querySelector('.average-population');

const totalFormatted = totalSum.toLocaleString('en-US');
const averageFormatted = result.toLocaleString('en-US');

averagePopulation.textContent = totalFormatted;
totalPopulation.textContent = averageFormatted;
