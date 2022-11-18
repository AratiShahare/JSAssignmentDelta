// Q1. get a variable and increase/decrease it by one using unary operator
 let x=10
     x++
     document.write("<br>"+x)

 let a=35
     a--
   document.write("<br>"+a)    

// Q2. proove the prefix and postfix unary operator by a program output.
// a.prefix
let c=65
    b=c++
    document.write("<br>"+b)

// b.postfix
let d=32
    e=++d
    document.write("<br>"+d)

// Q3. get two variable and do some arithmatic operation with the values using arithmatic operator.
num1=86
num2=9

addition=num1+num2
document.write("<br>"+"addition",addition);

substraction=num1-num2
document.write("<br>"+"substraction",substraction);

multiplication=num1*num2
document.write("<br>"+"multiplication",multiplication);

moduleOperator=num1%num2
document.write("<br>"+"moduleOperator",moduleOperator);

exponentiation=num1**num2
document.write("<br>"+"exponentiation", exponentiation);

// Q4. get a variable name career infotech and defined the 100 now assign this value to the next variable infotech.
let career=100
let infotech=career
document.write("<br>"+infotech)

// Q5. get two variable name ci and info assign the numerical value to both and now compare the value using relational operator.
let ci=40
let info=79
document.write("<br>",ci>info)
document.write("<br>",ci<info)
document.write("<br>",ci==info)
document.write("<br>",ci===info)
document.write("<br>",ci>=info)
document.write("<br>",ci<=info)
document.write("<br>",ci!=info)

//  Q6. create a result (pass or failed) using ternory operator and use logical operator in that.
// a. ternary operator
 mark=40
 result1=mark>35 ? "you are pass":"you are fail"
 result2=mark<35 ? "you are pass":"you are fail"
 document.write("<br>"+result1)
 document.write("<br>"+result2)

// b. logical operator
//  1. && (and)
 let n="arati"
     m=12
 let p=n=="arati" && m==12
 document.write("<br>"+p)

 //  2. || (or)
 let q="arati"
     r=12
 let s=q=="arati" || r==55
 document.write("<br>"+s)