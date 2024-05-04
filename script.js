const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter total amount to invest: ', (totalInput) => {
  const total = parseFloat(totalInput);

  rl.question('Enter lowest odds in satta: ', (oddInput) => {
    const odd = parseFloat(oddInput);

    rl.question('Enter highest odds in satta: ', (evenInput) => {
      const even = parseFloat(evenInput);

      const team2 = total * (odd / (odd + even));
      const team1 = total - team2;

      console.log(`kam vale team p itna lgana h: ${team1}`);
      console.log(`jyda vale team p itna lgana h: ${team2}`);

      const maxreturn = team1 * odd + team2 * even;
      const maxloss = team2 * even - total;
      const maxprofit = maxreturn - total;

      console.log(`maximum return: ${maxreturn}`);
      console.log(`maximum loss: ${maxloss}`);
      console.log(`maximum profit: ${maxprofit}`);



      rl.close();
    });
  });
});

function calulator(){
    // const total = parseFloat(totalInput);
    let total = document.querySelector(".amount").innerHTML;
    
}
