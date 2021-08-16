export const naiveFibonacci = (n) => {
    if(n<=2){
        return 1;
    }
    return naiveFibonacci(n-1) + naiveFibonacci(n-2);
};

export const memoFibonacci = (n) => {
    let array = [];
    function recurse(n){
        if(array.length > n){
            return array[n];
        }
        if(n<=2){
            array.push(0);
            array.push(1);
            array.push(1);
            return array[n];
        }
        let val = recurse(n-1) + recurse(n-2);
        array.push(val);
        return array[n];
    }
    return recurse(n);
};

export const bottomUpFibonacci = (n) => {
    if(n<=2){
        return n;
    }
    let a = 1;
    let b = 1;
    let c;
    for(let i=3; i<=n; i++){
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

