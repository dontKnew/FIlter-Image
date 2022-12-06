alert("Note : Each Filter at once time working..\n\n\n\nHappy Life Barbad Coding... :) ")

window.onload = function(){


}


function filter(){
   let  mom = document.querySelector("#mom");
    let sepia = document.querySelector(".sepia").value;
   let  hue = document.querySelector(".hue").value;
  let  saturate = document.querySelector(".saturate").value;
  let  invert = document.querySelector(".invert").value;
  let   opacity  = document.querySelector(".opacity").value
  let grayscale = document.querySelector(".grayscale").value;
    let  blur = document.querySelector(".blur").value;
   let ok = mom.style.filter = "sepia("+sepia+"%) hue-rotate("+hue+"deg)saturate("+saturate+"%) invert("+invert+"%) opacity("+opacity+"%)  grayscale("+grayscale+"%)  blur("+blur+"px)";
         
    document.getElementById("enter").innerHTML = "fillter : " + ok +"!";
     
}



reset = () =>{
    let  mom = document.querySelector("#mom");
    mom.style.filter = "";
}



/*
function hue(){
     mom = document.querySelector("#mom");
     percentage = document.querySelector(".hue").value;
oh =  mom.style.filter = "hue-rotate("+percentage+"deg)";
    percentage = document.querySelector(".invert").value;
    document.getElementById("enter").innerHTML = oh;
}

function invert(){
    
     mom = document.querySelector("#mom");
     
    oh =  mom.style.filter = """invert("+percentage+"%)";
document.getElementById("enter").innerHTML = oh;
}

function saturate(){
    
     mom = document.querySelector("#mom");
  ;
     oh = mom.style.filter = "saturate("+percentage+"%)";
     document.getElementById("enter").innerHTML = oh;
}



function opacity(){
    
     mom = document.querySelector("#mom");
  ;
     oh = mom.style.filter = "opacity("+percentage+"%)";
     document.getElementById("enter").innerHTML = oh;
     
}


function grayscale(){
    
     mom = document.querySelector("#mom");
     
   oh =  mom.style.filter = "grayscale("+percentage+"%)";
         document.getElementById("enter").innerHTML = oh;
     
}


function blur1(){
     mom = document.querySelector("#mom");
     percentage = document.querySelector(".blur").value;
   oh = mom.style.filter = "blur("+percentage+"px)";
     document.getElementById("enter").innerHTML = oh;
     
}



*/
    

