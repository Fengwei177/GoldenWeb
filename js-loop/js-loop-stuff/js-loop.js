for (let i = 0; i < 6; i++) {
    console.log(`Fengwei ${i} !`)
}
console.log('\n\n');

let numStr = '';
let numCount = 0;
while(numCount < 15) {
    numStr+=numCount;

    console.log(numStr);
    numCount++
}
console.log('\n\n');


let PlusMinus ='';
for(let i = 0; i < 15; i++) {
    if(i % 2 == 0) {
        PlusMinus+= '+';
    }
    else {
        PlusMinus+= '-';
    }
}
console.log(PlusMinus);
console.log('\n\n');


