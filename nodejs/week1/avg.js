//console.log(process.argv);

const myArgs = process.argv.slice(2)
const sum  = myArgs.reduce((a,b) => {
    return Number(a)+ Number(b)
 }, 0);

 console.log('Average of given numbers  :' + sum / myArgs.length );

 
//console.log('myArgs: ', myArgs);


/*const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

switch (myArgs[0]) {
  case 'insult':
    console.log(myArgs[1], 'smells quite badly.');
    break;
  case 'compliment':
    console.log(myArgs[1], 'is really cool.');
    break;
  default:
    console.log('Sorry, that is not something I know how to do.');
}*/


/*const yargs = require('yargs');

const argv = yargs
  .command('lyr', 'Tells whether an year is leap year or not', {
    year: {
      description: 'the year to check for',
      alias: 'y',
      type: 'number'
    }
  })
  .option('time', {
    alias: 't',
    description: 'Tell the present Time',
    type: 'boolean'
  })
  .help()
  .alias('help', 'h').argv;
//@ts-ignore
if (argv.time) {
  console.log('The current time is: ', new Date().toLocaleTimeString());
}
// @ts-ignore
if (argv._.includes('lyr')) {
    // @ts-ignore
  const year = argv.year || new Date().getFullYear();
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(`${year} is a Leap Year`);
  } else {
    console.log(`${year} is NOT a Leap Year`);
  }
}

console.log(argv); */ 

