


//Borrowed from W3Schools
filterProject("all");

function filterProject(className){
    var projects = document.getElementsByClassName("project");
    if (className==="all"){
        className= "";
    }
    for (var i = 0; i < projects.length; i++){
//        console.log(i + " PROJ: " + projects[i]);
        removeClass(projects[i], "display");
        if(projects[i].className.indexOf(className) > -1){
            addClass(projects[i], "display");
        }
    }
}


// Show filtered elements
function addClass(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  for (var i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("buttons");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


//Handles the project sizing when the page is resized
//make sure to change the dates and other formatting in here too
window.addEventListener("resize", function(){
    var width = document.documentElement.clientWidth;
    var masonry = document.getElementById("projectdiv").style;
    var rightAlign = document.querySelectorAll(".rightAlign");
    var left = document.querySelectorAll(".left");
    if(width < 700){
        masonry.columnCount = "1";
        resizeText(rightAlign, "none");
        resizeText(left, "block");
    }
    else{
        masonry.columnCount = "2";
        resizeText(rightAlign, "block");
        resizeText(left, "none");
    }

});


function resizeText(align, displayType){
    for (var i = 0; i < align.length; i++){
        align[i].style.display = displayType;
    }

}
