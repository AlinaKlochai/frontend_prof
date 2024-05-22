const arr1: number[] = [2, 4, 6, 8, 10];

let doubleNumbers: number[] = [];

for (let i = 0; i < arr1.length; i++) {
    doubleNumbers.push(arr1[i] * 2);
}


console.log(doubleNumbers);

//
const arr2: number[] = [11, 22, 33, 44, 55];
const lastIndex: number = arr2.length - 1;
console.log(lastIndex);

for (let i: number = 0; i < arr2.length / 2; i++) {
    
    const temp: number = arr2[i];
    
    arr2[i] = arr2[lastIndex - i];
    
    arr2[lastIndex - i] = temp;
}

console.log(arr2);

const arr3: number[] = [1, 2, 5, 4, 6, 7, 3];
let element: boolean = false;
for (let i: number = 0; i < arr3.length; i++) {
    if (arr3[i] === 5) {
        element = true;
        break;
    }
}

if (element) {
    console.log("5 was found");
} else {
    console.log("5 not found");
}

//
const arr4: number[] = [10, 15, 20, 25, 30];

function avarage(arr4: number[]): number {
    let sum: number = 0;
    for (let i: number = 0; i < arr4.length; i++) {
        sum += arr4[i];

    }
    return sum / arr4.length;
}

console.log('The arithmetic mean of a given array: ',avarage(arr4));