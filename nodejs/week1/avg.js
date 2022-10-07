//Find average of given arguments

const myArgs = process.argv.slice(2)
const sum  = myArgs.reduce((a,b) => {
    return Number(a)+ Number(b)
 }, 0);
if(isNaN(sum)){
  console.log('Please enter only numbers');
}
else{
 console.log('Average of given numbers  :' + sum / myArgs.length );
}

