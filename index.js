var input = document.getElementById("input");
var button = document.getElementById("button");
button.addEventListener("click",function(){
  hi();
})
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        hi();
    }
})
function hi(){
  var value = input.value;
  if(value.length==0){
    alert("You have not entered anything!! Please enter something to add to your list!!");
  }
  else{
  var element = document.createElement("h1");
  var bE = document.createElement("button");
  bE.setAttribute("id","rb");
  element.setAttribute("class","display"); 
  element.innerText=value;
  input.value="";
  bE.innerText="x";
  parents.appendChild(element);
  element.appendChild(bE);
  bE.addEventListener("click",function(){
    bE.remove();
    element.remove();
  })
  }
}