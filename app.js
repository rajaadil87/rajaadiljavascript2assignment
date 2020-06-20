

//chapter 21-25 task 1

// var a=prompt("Enter YOur First Name");
// var b=prompt("Enter YOur Last Name");
// var fullName= a + b;
// alert(fullName)

//chapter 21-25 task 2

// var a=prompt("Enter you favourite mobile Brand");

// document.write("My Favourite phone is ;  " + a + "<br>" + a.length)

//chapter 21-25 task 3

// var a= "pakistani";
// var i= a.indexOf("n")

// document.write("String :" + a  +  "<br>" + "String of " + " 'n' = " + i);

//chapter 21-25 task 4

// var a = "Hello world";
// var i= a.lastIndexOf("l");

// document.write("String :" + a  +  "<br>" + "Last index of " + " 'I' : " + i)

//chapter 21-25 task 5

// var a="Pakistani"
// var i= a.charAt(3);

// document.write("String :" + a  +  "<br>" + "Character at index 3 :" + i)


//chapter 21-25 task 6

// var a=prompt("Enter Your First Name");
// var b=prompt("Enter YOur Last Name");

// alert( a + b);

//chapter 21-25 task 7

// var a = "Hyderabad";
// var i= a.replace("Hyder","Islam")


// document.write("City :" + a + "<br>" + "After Replacement : " +  i);


//chapter 21-25 task 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var i=message.replace(/and/g,"&");

// document.write ( message + "<br>" + "After Replacement : " +  i);


//chapter 21-25 task 9

// var a= "472";

// document.write("Value :" + a + "<br>" + "Type" + "String" + "<br>")

// var a= "472";

// document.write("Value :" + +a + "<br>" + "Type" + "Number")

//chapter 21-25 task 10


// var a=prompt("Pleas Enter the word","abcdefgh");

// var i= a.toUpperCase();

// document.write(i)


//chapter 21-25 task 11

// var input=prompt("Enter the letter");

// var output= input.charAt(0).toUpperCase() + input.slice(1);

// document.write("User Input ;" + input + " <br>" + "User Output :" + output)

//chapter 21-25 task 12

// var num = 35.36;
// var num2= num*100

// document.write("Number :" + num + "<br>" + "Result :" + num2 )

//chapter 21-25 task 13// this is incomplete

// var input=prompt("Please Enter your Name");

// if ( input == "!"){
//     alert ("please enter a valid name")
// }else {
//     alert("the user name is ok")
// }



//chapter 21-25 task 14
// var a=prompt("Welcome to the ABC Bakery what you want");
// a=a.toLowerCase();
// var b=["cake","applepie", "cookie" , "chips","patties"];


// for( i=0 ; i < b.length; i++ ){
//     if(b[i] === a ){
//         alert( b[i] + " is avaiable at index"+ " " + b.indexOf(a)  + " in our Bakery")
//         break
//     }
// }   
//      if( b[i] !== a){
//          alert("we are sorry " + a + " is not avaiable in our Bakery ")
//     }   

//chapter 21-25 task 15

// var input=prompt("Please enter the password");
// var max_chars = 6;


// if(input.length < max_chars || input.charAt(0) !== "1"){
//     alert("Password is not upto stanadard")
// }
// // else if(input.charAt(0) == "1"){
// //     alert("password should not start with number")
// // }
// else{
//     alert("password is ok")
// }



//chapter 21-25 task 16


// var uni = "University of Karachi";

// var uniNew = uni.split("").join("<br/>");

// document.write( uniNew);

//chapter 21-25 task 17

// var input=prompt("please Enter the word");

// var last=input.charAt(input.length-1)

// document.write("The User Input :" + input + "<br>" + "The Last Character of Input :" + last)

//chapter 21-25 task 18

// var a = "the quick brown fox jumps over the lazy dog";
// var count = (a.match(/the/g)).length;
// document.write("Text : "+ a +"<br>"+ "There are " +count + " "+ "Occurence of word 'the'");

//chapter 26-30 task 1

// var a = 3.45214;
// var round=Math.round(a);
// var flr=Math.floor(a);
// var ceil=Math.ceil(a)

// document.write("Numbers : "  +a+ "<br>" +"round of Value : "  + round + "<br>" + "floor Value : "  + flr + "<br>"+ "Ceil Value : "   + ceil);

//chapter 26-30 task 2

// var a=prompt("Please enter the number with negative value","-2.67847");
// var round=Math.round(a);
// var flr=Math.floor(a);
// var ceil=Math.ceil(a);

// document.write("Number: " + a + "<br>" + "Round of value: " + round + "<br>" + "Floor value: " + flr + "<br>" + "Ceil value: " + ceil  );


//chapter 26-30 task 3

// var a = prompt("Enter the - value");

// var absVal =Math.abs(a);

// document.write("Absolute value  :" + absVal);

//chapter 26-30 task 4

// var a=(Math.random() * 10);

// var b=Math.round(a);

// document.write("Random Dice Value :" + b)


//chapter 26-30 task 5

// var Head = (Math.random() * 2);
// var Tail= (Math.random() * 2);


// var a=Math.ceil(Head);
// var b=Math.ceil(Tail);

// document.write(a +" <br>" + "The Random Coin value is : Head"+ "<br>" + b + " <br>" + "The Random Coin value is : Tail");

//chapter 26-30 task 6

// var a= (Math.random()* 100);
// var b=Math.round(a);

// document.write("The random Number between 1 to 100 :" + b);

//chapter 26-30 task 7

// var weight=+prompt("Please Enter your weight");

// var a = Math.round(weight);
// var b=Math.floor(weight);
// var c=Math.ceil(weight);



// document.write("The weight of user is " + weight  + "Kilograms" + "<br>"  + "The weight of user is " + a  + "Kilograms" )

//chapter 26-30 task 8


// var sec=+prompt("Please enter a secret number");

// var a=(Math.random(sec) * 10);
// var b =Math.round(a);


// if( b === sec){
//     alert("Congratulation you guess the right number")
// }else{
//     alert("Sorry Try again")
// }

//chapter 31-34 task 1

// var a= new Date();

// document.write(a);

//chapter 31-34 task 2

// var i = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

// var a= new Date();

// var c=a.getMonth();

// document.write("The current month is :" + i[c]);

//chapter 31-34 task 3
// var a= new Date();

// var b=a.toString();

// var c=b.slice(0,3);

// document.write(b +"<br>" +c)

//chapter 31-34 task 4

// var a = new Date();

// var b=a.toString();

// var c = b.slice(0,3);

// if( c === "Sun" && c === "Sat"){
//     alert( "this is a fun day")
// }else{
//     alert(c + " This is not a fun day")
// }

//chapter 31-34 task 5

// var a= new Date();
// var c=a.getDate();

// if(c <= 16 ){
//     alert("First fifteen Days of the Month")
// }else{
//     ("Last Days of the Month")
// }
//chapter 31-34 task 6

// var a= new Date();

// var b= a.getTime();

// var c= b/(1000*3600)

// document.write("Current date :" + a + "<br>" + " Elapsed milliseconds since 1 january 1970 :" + b + "<br>" + " Elapsed minutes since 1 january 1970 :" +c)

//chapter 31-34 task 7

// var a=new Date();

// var hr = a.getHours();

// if( hr > 12){
//     alert("its PM Now");
// }else if (hr < 12){
//     alert("its Am Now")
// }

//chapter 31-34 task 8

// var laterDate= new Date("May 31,2020");

// document.write(laterDate);

//chapter 31-34 task 9

// var firstRamzan= new Date("April 25 ,2020");

// var a = firstRamzan.getTime();


// var today=new Date();

// var b=today.getTime();


// var diff=b - a;

// var days = diff/(1000*3600*24);

// alert(Math.ceil(days));

//chapter 31-34 task 10


// var startDate= new Date("jan 01,2020");

// var a=startDate.getTime();

// var todayDate=new Date();

// var b=todayDate.getTime();

// var diff = b - a;

// var result=diff/(1000*60)

// document.write("On reference Date " + startDate+ "<br> " + Math.floor(result) + " seconds has been passed");

//chapter 31-34 task 10
// var n=new Date();

// var time = new Date();
// time.setHours(21);

// document.write("Current time :" + n +"<br>" +"Time one hour ago,It was :" +time);

//chapter 31-34 task 11
// var a = new Date()
// a.setFullYear(1920);

// var b=new Date();

// alert("Current Date : " + b + " 100 Years back,it was " + a);

//chapter 31-34 task 12

// var dateOfBirth=new Date (prompt("Enter your Date of Birth", 'Dec 24,1987'));
// var i=dateOfBirth.getTime();

// var dob = new Date();
// var b=dob.getTime();


// var diff= b -i;

// var age=diff/(1000*60*60*24*30*12);

// document.write("Your Age is : " + Math.floor(age) + " <br>" );

//chapter 31-34 task 13


// var name="Raja Muhammad Adil";
// var i= ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
// var a= new Date();
// var c=a.getMonth();
// var nou=+prompt("Please enter the units")
// const cou=16;

// var nap=nou*cou;

// const lps=350;

// var gap=nap+lps;


// document.write("<h4>"+"K-ELECTRIC BILL"+"<h4>"+"Customer name = " + name+  "<br>" + "Current Month : "+ i[c] +"<br>" +"Number of Units" + nou +"<br>" +"Charges per unit " + cou +"<br>" +"Net Amount payable" + nap+ "<br>" + "Late payment Surcharge" + lps+ "<br>" + "Gross Amount Payable" + gap )


//chapter 35-38 task 1

// function date(){
//     var a= new Date();
//     return a;
// }
// document.write(date());
// //chapter 35-38 task 2
// function name(){
//  var firstName=prompt("Please Enter your First Name");
//  var secondName=prompt("Please Enter your Last Name");
//  var fullName=firstName + secondName;
//  return fullName;

// }
// alert("Hello welcome " + name());

//chapter 35-38 task 3

// function add(){
// var a=+prompt("Please Enter first number");
// var b=+prompt("Please Enter first number");
// var result=a+b;
// return result
// }

// alert (add());

//chapter 35-38 task 4

// function calculator(){
//     var num1=+prompt("Please enter first number");
//     var operator=prompt("Please enter opr");
//     var num2=+prompt("Please enter second number");
//     if( operator === "+"){
//         result1= num1 + num2
//         return result1
//     }else if(operator === "-"){
//         result2=num1 - num2
//         return result2
//     }else if(operator ==="*"){
//         result3=num1*num2
//         return result3
//     }else{
//         return("wrong operator")
//     }
    
// }

// alert(calculator());

//chapter 35-38 task 5

// function sqr(){

//     var a=+prompt("please enter the number you want to square");
//     return a*a
// }
// alert(sqr())

//chapter 35-38 task 6

// function factorial(){

//     var n = +prompt("Please enter the number you want factorial");
//     var a=1;              
//     for (var i = 2; i <= n; i++) 
//         a = a * i; 
//     return a; 
// }
// alert(factorial())

//chapter 35-38 task 7

// function counting(){
//     var a=+prompt("Enter first number");
//     var b=+prompt("Enter last number");
   

//     for(i = a; i <= b; i++){
//         document.write(i + "<br>")
//     }
    
// }
// counting();

 //chapter 35-38 task 8

// function hypotenuse(){
//     var base=+prompt("please enter the base amount");
//     var perpendicular=+prompt("PLease enter the perpendicular");

//    var a=Math.pow(base,2);
//    var b=Math.pow(perpendicular,2);
    
//    var hypo= a + b;

//     var hypotenuse=Math.sqrt(hypo);

//       return hypotenuse;


// }
// document.write("The hypotenuse is " + hypotenuse())

 //chapter 35-38 task 9

//  function area(){

//     var width=+prompt("please enter the width");
//     var height=+prompt("please enter the width");


//     var area = width*height;

//     return area

//  }

//  alert("The area of rectaangle is : " + area());

 //chapter 35-38 task 10

//  function palindrome(){

//     var a =prompt("Please enter the word");
//     var b=a.charAt(0);  
//    var i=a.length;
   
//     var c=a.charAt(i-1);
   
//        if( b === c){
//         //    alert ("the word is palindrome")
//            return ("the word is palindrome")
//        }else{
//            return ("the word is not palindrome")
//        }

//  }

//  alert(palindrome());

//chapter 35-38 task 11

// function capitalize(input) { 
//     var input=prompt("please enter sentence") 
//     return input.toLowerCase().split(' ').map(a => a.charAt(0).toUpperCase() + a.substring(1)).join(' ');  
// }  

// alert(capitalize())

//chapter 35-38 task 12

// function longestWord() {
//     var input=prompt("enter the sentence")
//     var a = input.split(' ')
//     var length = 0
//     var result = ''

//     for (var i = 0; i < a.length; i++) {
//         if (a[i].length > length) {
//             length = a[i].length
//             result = a[i]
//         }
//     }
//     return result
// }
// alert(longestWord())
//chapter 35-38 task 13
// function occurenceofspecifiedletter(){
//     var a=prompt("please enter the word");
//     var b=prompt("please enter the word you want to know the number of occurence");
//     var count=0;


//     for( i = 0; i < a.length; i++){
//         if(a[i] === b){
//          count++;
//         }
//     }
//     return count++;
// }

// alert(occurenceofspecifiedletter())

//chapter 35-38 task 14

// var radius=+prompt("please enter radius");
// var circumference= 2*3.142*radius;
// var area=3.142 * (radius*radius);

// function calcCircumference(){ 
// return circumference;

// }
// alert("Circumference of circle is "+ calcCircumference())

// function calcArea(){
// return area;
// }
// alert("Area of circle is "+ calcArea())



  
