var current_color;

function chooseColor(element){
  current_color = getComputedStyle(element, null).getPropertyValue("background-color");
}

function fillColor(element){
  if(current_color){
    element.style.backgroundColor = current_color;
  }
}