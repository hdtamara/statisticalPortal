
// @ts-expect-error
const jStat = require('jstat');

console.log('Valores críticos t-Student con jstat:');
console.log('df=24, alpha=0.05 (una cola):', jStat.studentt.inv(0.95, 24));
console.log('df=24, alpha=0.025 (dos colas):', jStat.studentt.inv(0.975, 24));
console.log('df=15, alpha=0.05 (una cola):', jStat.studentt.inv(0.95, 15));
console.log('df=15, alpha=0.025 (dos colas):', jStat.studentt.inv(0.975, 15));

