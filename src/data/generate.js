import faker from 'faker';

const data = Array(20).fill(null).map(el=>({ 
    name: faker.name.findName(), 
    email: faker.internet.email(), 
    bitcoinAddress: faker.finance.bitcoinAddress(), 
    age: faker.random.number(100),
    model: { input: { 
        bank_bal: faker.random.number(100)/100, 
        num_purc: faker.random.number(100)/100, 
        loc: faker.random.number(100)/100, 
        num_calls: faker.random.number(100)/100, 
        web_hits: faker.random.number(100)/100,
    }}}));

export default data;