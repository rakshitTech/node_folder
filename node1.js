//console.log(process.argv);
var sum=0, i;
for(i=2; i<process.argv.length;i++){
  if(process.argv[i]){
    sum += Number(process.argv[i]);
  }
  else {
    break;
  }
}
console.log(sum);
