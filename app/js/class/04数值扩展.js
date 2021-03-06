{
    console.log('-----------------'); 
}
{
    console.log(Math.cbrt(8)); //2
    console.log(Math.cbrt(4));

    console.log('-----------------'); 
}
{
    console.log(Math.sign(-5)); // -1
    console.log(Math.sign(5));  // 1
    console.log(Math.sign(0));  // 0
    console.log(Math.sign(-0));  // -0
    console.log(Math.sign("40"));  // 1
    console.log(Math.sign("hello")); //NaN 
    console.log('-----------------'); 

}
{
    console.log(Math.trunc(4.5)); // 4
}
{
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.MIN_SAFE_INTEGER);
    console.log(Number.isSafeInteger(10));

}
{
    console.log(Number.isInteger(1)); //true
    console.log(Number.isInteger(1.0)); //true
    console.log(Number.isInteger('1')); //false
    console.log(Number.isInteger(1.2)); //false
    console.log('--------Number.isInteger---------');
}
{
    console.log(Number.isNaN(1)); //false
    console.log(Number.isNaN(NaN)); //true
    console.log(Number.isNaN('1')); //false
    console.log('--------Number.isNaN()---------');
}
{
    console.log(Number.isFinite(12)); // true
    console.log(Number.isFinite(NaN)); // false

}
{
    //二进制
    console.log(0b11111);
    //八进制
    console.log(0o011111);
    
}