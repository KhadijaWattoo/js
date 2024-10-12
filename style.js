/*
let a = prompt("enter a number");
console.log("check output",a)
 
  
 a1 = (a / 100)%10;      
 a2 = (a / 10) % 10;  
 a3 = a % 10;    

 console.log(a1);
 console.log(a2);
 console.log(a3);
 
let a = prompt("Enter the 1st number");
let b = prompt("Enter the 2nd number");
let c = prompt("Enter the 3rd number");
let d = prompt("Enter the 4th number");
let e = prompt("Enter the 5th number");
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
if (a > b )    {
    if (a > c )   {
      
        if (a > d) {
            if (a > e) {
                console.log("greater" ,a) ;
            }

         }
    }
    else{
         if (c > d) {
            if (c > e) {
                console.log("greater" ,c) ;
            }
            else 
            {
                console.log("greater",e);
            }

         }
         
    }
}
else{
     if(b > a){
 if (b > c){
    if (b > d){
if (b > e){
    console.log("greater" ,b) ;
}
    }
   
    
 }
 else{
    console.log("error");
}
     }
}
 */
let a= prompt ("Enter the num1");
let b= prompt ("Enter the num2");
let k=0;
  let c= prompt ("Enter the num3");
 let d= prompt ("Enter the num4");
let e= prompt ("Enter the num5");
console.log("a is : ",a);
console.log("b is : ",b);
console.log("c is : ",c);
console.log("d is : ",d);
console.log("e is : ",e);
 /*if (a > b && a > c && a > d && a > e) {
    console.log("greater is",a);
}
else  if ( b > a && b > c && b > d && b > e) {
    console.log("greater is",b);
}
else  if (c > a && c > b && c > d && c > e) {
    console.log("greater is",c);
}
else  if (d > a && d > b && d > c && d > e) {
    console.log("greater is",d);
}
else  if (e > a && e > b && e > c && e > d) {
   
    console.log("greater is",e);
}
 
  if (a < b && a < c && a < d && a < e) {
    console.log("smaller is",a);
}
else  if ( b <   a && b < c && b  < d && b  < e) {
    console.log("smaller is",b);
}
else  if (c  < a && c  < b && c  < d && c  <e) {
    console.log("smaller is",c);
}
else  if (d  < a && d  < b && d  < c && d  < e) {
    console.log("smaller is",d);
}
else  if (e  < a && e  < b && e < c && e  < d) {
   
    console.log("smaller is",e);
}
    */
 
 
   if(a>b){
    k=a;
    a=b;
    b=k;
   }
  if(b>c){
    k=b;
    b=c;
    c=k;
 }
  if(c>d){
    k=c;
    c=d;
    d=k;
  }
if(d>e){
    k=d;
    d=e;
    e=k;
}
if(a>b){
    k=a;
    a=b;
    b=k;
   }
  if(b>c){
    k=b;
    b=c;
    c=k;
 }
  if(c>d){
    k=c;
    c=d;
    d=k;
  }
  if(a>b){
    k=a;
    a=b;
    b=k;
   }
  if(b>c){
    k=b;
    b=c;
    c=k;
 }
 if(a>b){
    k=a;
    a=b;
    b=k;
   }
 console.log(a,b,c,d,e);

  