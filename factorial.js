let num = 5;
if (num < 0) {
    console.log("Factorial is not defined for negative numbers.");
}   
else if (num === 0 || num === 1) {
    console.log("Factorial of " + num + " is 1.");
}   
else {
    let factorial = 1;  
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }   
    console.log("Factorial of " + num + " is " + factorial + ".");
}