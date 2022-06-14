let displayxyz=document.getElementById("display");
let buttonsxyz=document.getElementsByClassName("btn");
console.log(buttonsxyz);

function isOpxyz(opxyz){
  if(opxyz==="+"||opxyz==='-'||opxyz==='/'||opxyz==="*"){
    return true;
  }
  return false;
}

function clickingxyz(clickedxyz){
  if(displayxyz.innerText===""){
    if(clickedxyz!="0"){
      displayxyz.innerText=displayxyz.innerText+clickedxyz;
    }
  }
  else{
    if(isOpxyz(clickedxyz)&&isOpxyz(displayxyz.innerText[displayxyz.innerText.length-1])){
        displayxyz.innerText=displayxyz.innerText.slice(0,-1);
    }
    displayxyz.innerText=displayxyz.innerText+clickedxyz;
  }
}
function evalxyz(){
  try{
    displayxyz.innerText=eval(displayxyz.innerText);
  }
  catch(err){
    displayxyz.innerText="Error";
  }
}
function clearxyz(){
  displayxyz.innerText="";
}
function backxyz(){
  displayxyz.innerText=displayxyz.innerText.slice(0,-1);
}