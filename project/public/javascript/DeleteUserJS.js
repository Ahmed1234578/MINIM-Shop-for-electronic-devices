function DelFun() {
let fnames=false;
let lnames =false;
let fnamefound=true;
let lnamefound=true;
 let nameformat = /^[A-Za-z]+$/;
  let fname=document.getElementById("FNI").value;
  let lname=document.getElementById("LNI").value;
  if (fname==""){
    document.getElementById("FNV").innerHTML="First name must not be empty."
    document.getElementById("FNI").style.backgroundColor="#ffe6e6";
    document.getElementById("FNI").style.borderColor="red";
  }else {
    document.getElementById("FNV").innerHTML="";
    document.getElementById("FNI").style.backgroundColor="white";
    document.getElementById("FNI").style.borderColor="black";
    if(!fname.match(nameformat)){
        fnamefound=false;
    }else {
        fnames=true;
    }
  }
  if (lname==""){
    document.getElementById("LNV").innerHTML="Last name must not be empty."
    document.getElementById("LNI").style.backgroundColor="#ffe6e6";
    document.getElementById("LNI").style.borderColor="red";
  }else {
    document.getElementById("LNV").innerHTML="";
    document.getElementById("LNI").style.backgroundColor="white";
    document.getElementById("LNI").style.borderColor="black";
    if(!lname.match(nameformat)){
        lnamefound=false;
    }else {
        lnames=true;
    }
  }
if((fnamefound==false&&lnamefound==false)||((fnamefound==true&&lnamefound==false)||fnamefound==false&& lnamefound==true)&&(fname!=""&&lname!=="")){
  alert ("User "+fname+" "+lname+ " is not found.");
}
if(fnames==true&&lnames==true){
  location.replace("AdminPage.html")
}
  }
  function CanFun() {
    location.replace("AdminPage.html")
  }