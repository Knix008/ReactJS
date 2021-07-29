const fibo = (n) => {
    let result;

    if ((n == 0)||(n == 1)) {
        console.log(n);
        return n;
    }
    result =  fibo(n -2) + fibo(n-1);
    console.log(result);
    return result;
}

console.log(fibo(10));