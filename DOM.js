var list = document.getElementsByTagName("li");

//grabs 1st element of the list and alerts the name
list[0].onclick = function () {
  alert(list[0].innerHTML);
}

//when clicking this item on the list it changes colors
list[3].onclick = function (){
  if (list[3].style.color === "red") {
    list[3].style.color = "black"}
  else {
    list[3].style.color = "red"
  }
}

//select an element in list and renaming it
var essentials = document.getElementById("essentials")
essentials.getElementsByTagName("li")[0].innerHTML = "Apple";

//
