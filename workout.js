
var buttonid = document.getElementById("btn");


function alt(){
    alert("hi")
}

alt();

function sayHi() {
  alert("Hi!-one");
} // named function




buttonid.addEventListener("click", sayHi);
buttonid.removeEventListener("click", sayHi);

