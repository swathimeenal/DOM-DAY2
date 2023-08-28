//getElementbyId
/*const res = document.getElementById("container");
console.log(res);
//getElementByClassName
const res1 = document.getElementsByClassName("main");
console.log(res1);
//getElementByTagName
const res2 = document.getElementsByTagName("p");
console.log(res2);
//Query selectorAll
const res4 = document.querySelectorAll("div");
console.log(res4);
//Query selector
const res5 = document.querySelector("div");
console.log(res5);
*/
//onclick function
/*function foo(){
    const result = document.getElementById("email").value;
console.log(result);
}
*/
/* function Check(){
    const name = document.getElementById("email").value;
    console.log(name)
       if(name==swathimeenal1994@gmail.com)
       {
        console.log("Valid-User")
       }
       else{
        console.log("InValid-User")
       };
}
*/
function calculateAge(){
    const dob =new Date(document.getElementById("dob").value);
    const today = new Date();

    if(isNaN (dob.getTime())){
        document.getElementById("output").innerHTML="Please Enter the Valid Date";
        return error;
    }
    let age = today.getFullYear()- dob.getFullYear();
    const monthDiff = today.getMonth()-dob.getMonth();
    if(monthDiff<0||(monthDiff===0 && today.getDate() < dob.getDate()))
    {
        age--;
    }
    document.getElementById("output").innerHtml="you are"+ age+ " Years Old.";
}