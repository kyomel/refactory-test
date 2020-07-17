'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countSwaps function below.
function countSwaps(a) {
    let newArr = a.slice().sort(function (a, b) { return a - b; })
    let count = 0;
    for (let i = a.length-1; i >0; i--) { 
        if (a[i] != newArr[i]) { 
            let index = a.indexOf(newArr[i]);
            a.splice(index,1)
            a.push(a[i])
            count += i - index;           
        }
    }
    console.log('Array is sorted in ' + count + ' swaps.');
    console.log('First Element: ' + Math.min(...newArr));
    console.log('Last Element: ' + Math.max(...newArr));

}

function main() {
    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(a);
}
