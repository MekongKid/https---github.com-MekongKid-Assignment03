//Do While LOOP
// let coinFlip = (Math.round(Math.random()) +1)
// while (true) {
//     coinFlip = prompt('Enter 0 or 1');
//     if (coinFlip = 0 && coinFlip <= 10) {
//         console.log('Heads');
        
//     } else {
//         console.log ('Tails');
//     }
//     break;
// }


let coinFlip = 0 //(Math.round(Math.random()) +1);
do {
    prompt('Enter: 0 or 1')
    coinFlip++;
    document.write(`${coinFlip} = Heads <br>`);

}while ( coinFlip <= 1 );
    document.write(`${coinFlip} = Tails`);
