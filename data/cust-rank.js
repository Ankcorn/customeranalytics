const brain = require('brain.js');

/*
data cols
date,customer_id,customer_group,bank_balance,number_of_purchases,location,number_calls,web_hits

bank_balance - 0 no money in bank, 1 lots of money in bank
number of purchases - 0 no purchases, 1 lots of purchases
location - deviation from main node - 0 no deviation, 1 lots of deviation
number_calls - amount of calls between customers - 0 no calls, 1 lots of calls
web_hits - visits to interesting web sites - 0 no hits, 1 lots of hits

values all normalised between 0 and 1
*/

const trainingData = [{input: { bank_bal: 1, num_purc: 1, loc: 0, num_calls: 1, web_hits: 1 }, output: { interesting: 1 }},
                      {input: { bank_bal: 0, num_purc: 0, loc: 1, num_calls: 0, web_hits: 0 }, output: { interesting: 0 }},
                      {input: { bank_bal: .5, num_purc: .5, loc: 0.5, num_calls: .5, web_hits: .5 }, output: { interesting: .5 }}];

var net = new brain.NeuralNetwork();

net.train(trainingData);

var cust1 = net.run({ bank_bal: 1, num_purc: 1, loc: 0, num_calls: 1, web_hits: 1 });
var cust2 = net.run({ bank_bal: .1, num_purc: .2, loc: 0.3, num_calls: .4, web_hits: .8 });

console.log('cust 1: Jane is ' + Math.floor((cust1.interesting)*100) + '% interesting');
console.log('cust 1: Dave is ' + Math.floor((cust2.interesting)*100) + '% interesting');