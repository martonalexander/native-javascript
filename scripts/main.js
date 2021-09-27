function maxOfTwo(input1, input2){
    let result;
    if(input1 < input2){
        result = input2;
    }else{
        result = input1;
    }
    return result;
}

function brokenMultiplier(factor1, factor2){
    let product = 0;
    let i = 0;
    while(i < factor1){
        product = product + factor2;
        i = i + 1;
    }
    return product;
}

function minOfThree(input1, input2, input3){
    let result;
    if(input1 < input2){
        result = input1;
    }else{
        result = input2;
    }
    if(input3 < result){
        result = input3
    }
    return result;
}

function ticketMachine(age){
    let price;
    if(age < 18){
        price = 10;
    }else if(age > 65){
        price = 15;
    }else{
        price = 20;
    }
    return price;
}

function sumTo(num3){
    let sum = 0;
    let i = 0;
    while(i < num3){
        i = i + 1;
        sum = sum + i;
    }
    return sum;
}

function factorial(num4){
    let product = 1;
    let i = 0;
    while(i < num4){
        i = i + 1;
        product = product * i;
    }
    return product;
}

function fibonacci(fibseq){
    let i = 1;
    let sum = 1;
    let fib1 = 0;
    let fib2 = 1;
    while(i < fibseq){
        i = i + 1;
        sum = fib1 + fib2;
        fib1 = fib2;
        fib2 = sum;
    }
    return sum;
}

function collatz(num5){
    let i = 0;
    while(num5 !== 1){
        i = i + 1;
        if(num5 % 2 == 0){
            num5 = num5 / 2;
        }else{
            num5 = num5 * 3 + 1;
        }
    }
    return i;
}

function main(){
    const num1 = 100;
    const num2 = 1337;

    const max1 = maxOfTwo(60, -4);
    const max2 = maxOfTwo(num1, num2);

    const product1 = brokenMultiplier(6, 9);

    let input1 = 10;
    let input2 = 1;
    let input3 = 0;

    let min1 = minOfThree(input1, input2, input3);
    let min2 = minOfThree(1337, -1, 100);

    let age = 15;
    let price = ticketMachine(age);

    let num3 = 5;
    const sum1 = sumTo(num3);

    let num4 = 5;
    const product2 = factorial(num4)

    let fibseq = 8;
    const fibnum1 = fibonacci(fibseq);
    const fibnum2 = fibonacci(1);
    const fibnum3 = fibonacci(2);
    const fibnum4 = fibonacci(4);
    const fibnum5 = fibonacci(5);

    let num5 = 73;
    const i = collatz(num5);
}

main();