console.log("hi")

// factorial number
function amit(no)
{
    let fact = 1;
    for(let i=no ; i>1 ; i-- )
    {
        fact = fact*i;
    }
    console.log(fact);
    
}

let no = 5;
amit(no);


// reverse string


function reverseString(str)
{
let reverse =" ";
for(let i = str.length-1 ;i>=0; i-- )
{
     reverse=reverse+str.charAt(i);
}
console.log(reverse);

}
let str = "java script"
reverseString(str)

// reverse given number

function reverseNumber(num){
let reverse = 0;
while(num!=0)
{
    let rem = num%10;
    reverse = (reverse*10)+ rem;
    num = Math.floor(num/10);
}
console.log(reverse);

}
let num = 123456;
reverseNumber(num);


// check palindrome or not;

function  checkPalindrome(str1)
{
let reverse="";
for(let i = str1.length-1;i>=0 ; i--)
{
    reverse+=str1.charAt(i);
}
return reverse;


}
let str1 = "levEl";
     let revStr=checkPalindrome(str1)
if(str1.toLowerCase()===revStr.toLowerCase())
{
    console.log("palindrome");

}
else{
    console.log("not palindrome");
}



// Merge two arrays

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9];

let arr =[];
let j=0;

for(let i = 0 ; i<arr1.length;i++)
{
    arr[j] = arr1[i];
    j++
}

for(let i = 0 ; i<arr2.length;i++)
{
    arr[j] = arr2[i];
    j++
}

for(let i = 0 ; i<arr.length ; i++)
{
    // console.log(arr[i]);
}



let bubbleShort = [1,4,5,8,3];

for(let i = 0 ; i <bubbleShort.length ; i++)
{
for(let j = 0 ; j<bubbleShort.length-1-i ; j++){
if(bubbleShort[j]>bubbleShort[j+1])
{
    let temp = bubbleShort[j];
bubbleShort[j] =bubbleShort[j+1];
bubbleShort[j+1] = temp;
}


}

}
console.log(bubbleShort)




//Sum of given number

function sumNumber(Sumno)
{
let sum = 0;
while(Sumno!=0)
{
    let rem = Sumno%10;
    sum = sum+rem;
    Sumno = Math.floor(Sumno/10);
}
console.log(sum);
}
let Sumno = 5655;
sumNumber(Sumno);



// sum of given multiple number


function mulNumber(mulN)
{
let mul = 1;
while(mulN!=0)
{
    let rem = mulN%10;
    mul = mul*rem;
mulN= Math.floor(mulN/10);
}
console.log(mul);

}
let mulN =555
mulNumber(mulN)











