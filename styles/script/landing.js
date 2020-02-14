var box=document.querySelector("#change");
var arr=["Absolutely loves what he does","Is available for freelance or hire","Enjoys working as much as playing"];

var i=0;
var j = 0;

var elem = document.getElementById("myBar");
var width = 1;
    var id = setInterval(frame, 20);
function frame() {
      if (width >= 100) {
        clearInterval(id);
        j = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }


setInterval(function(){ 
box.innerHTML = arr[i];
++i;
if(i>=arr.length)
{
	i=0;
}

  if (j == 0) {
    j = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        j = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
 }, 4000);




