// let isLoading: boolean;
// isLoading = true;
// isLoading = false;

// //isLoading = 42;

// let num: number | string  = 42;
// num = 'hello'

// const str = 'hello world';
// console.log(str);

// //work with array
// let primes1 = [2,3,5,7];
// const primes2 = [11,13,17,19];

// primes2.push(123)
// primes2.forEach((e, i) => console.log(e));

// //FUNCTION
// const sum = (a: number ,b: number):number => a + b;
// console.log(sum(10,5));

// OBJECT & INTERFACES
interface IObj{
    name: string;
    age: number;
    address?: IAdress;   //?- говорит либо буулет указано это поле либо его не будет
};

interface IAdress {
    city: string;
    street: string;
    house: number;
};

const obj2: IObj = {
    address: {
        city: 'Berlin',
        street: 'Alexanderplatz',
        house: 10
    },
    age: 58,
    name: 'Tigran'
};

const obj: IObj = {
    name: 'John',
    age: 35,
    address:  {
        city: 'NY',
        street: 'Street',
        house: 111
    },
};



