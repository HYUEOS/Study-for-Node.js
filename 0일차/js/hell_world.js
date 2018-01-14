console.log("HELL WORLD!!!!!!!");
alert("HELL WORLD!!!!!");
var domPannel = document.getElementById('pannel');
domPannel.innerHTML = 'YOYOYOYYOYOYOYO<br>';
domPannel.style.color = "blue";

for(var i = 0; i < 10; i++){
   for(var j = 0; j <= i; j++) {
       domPannel.innerHTML += "*";
   }

    domPannel.innerHTML += "<br>";
}
