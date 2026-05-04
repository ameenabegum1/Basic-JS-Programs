let a = 0;
let b = 1;
for (let i = 0; i < 10; i++) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
  }  
