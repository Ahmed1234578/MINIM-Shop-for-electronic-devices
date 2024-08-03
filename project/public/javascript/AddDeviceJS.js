function AddFun() {
  var names=false;
  var prices=false;
  var hdds=false;
  var rams =false;
  var screen_space_s=false;
  var photos=false;
  let number= /[0-9]/g;
  let nameformat = /^[A-Za-z]+$/;
  let sepChar= /[#.?!@$%^&*-]/g;
  var numberformat2=/^\d$/;
  let name=document.getElementById("NI").value;
  let price=document.getElementById("PI").value;
  let hdd=document.getElementById("HDDI").value;
  let ram=document.getElementById("RAMI").value;
  let screen_space=document.getElementById("SPI").value;
  let photo=document.getElementById("PhI").value;
  if (name==""){
    document.getElementById("NV").innerHTML="Name must not be empty."
    document.getElementById("NI").style.backgroundColor="#ffe6e6";
    document.getElementById("NI").style.borderColor="red";
  }else {
    document.getElementById("NV").innerHTML=""
    document.getElementById("NI").style.backgroundColor="white";
    document.getElementById("NI").style.borderColor="black";
    names=true;
  }
    if(price==""){
      document.getElementById("PV").innerHTML="Price must not be empty."
    document.getElementById("PI").style.backgroundColor="#ffe6e6";
    document.getElementById("PI").style.borderColor="red";
    }else {
      document.getElementById("PV").innerHTML=""
        document.getElementById("PI").style.backgroundColor="white";
        document.getElementById("PI").style.borderColor="black";
      if(isNaN(price)){
        document.getElementById("PV").innerHTML="Invalid price."
    document.getElementById("PI").style.backgroundColor="#ffe6e6";
    document.getElementById("PI").style.borderColor="red";
      }else {
        if(price<=0){
          document.getElementById("PV").innerHTML="Invalid price."
    document.getElementById("PI").style.backgroundColor="#ffe6e6";
    document.getElementById("PI").style.borderColor="red";
        }else {

        
        document.getElementById("PV").innerHTML=""
        document.getElementById("PI").style.backgroundColor="white";
        document.getElementById("PI").style.borderColor="black";
        prices=true;
        }
      }
    }
    if(hdd==""){
      document.getElementById("HV").innerHTML="HDD size must not be empty."
    document.getElementById("HDDI").style.backgroundColor="#ffe6e6";
    document.getElementById("HDDI").style.borderColor="red";
    }else {
      document.getElementById("HV").innerHTML=""
        document.getElementById("HDDI").style.backgroundColor="white";
        document.getElementById("HDDI").style.borderColor="black";
      if(isNaN(hdd)){
        document.getElementById("HV").innerHTML="Invalid value."
    document.getElementById("HDDI").style.backgroundColor="#ffe6e6";
    document.getElementById("HDDI").style.borderColor="red";
      }else {
        if(hdd<=0){
          document.getElementById("HV").innerHTML="Invalid value."
    document.getElementById("HDDI").style.backgroundColor="#ffe6e6";
    document.getElementById("HDDI").style.borderColor="red";
        }else {

        
        document.getElementById("HV").innerHTML=""
        document.getElementById("HDDI").style.backgroundColor="white";
        document.getElementById("HDDI").style.borderColor="black";
        hdds=true;
        }
      }
    }
    if(ram==""){
      document.getElementById("RV").innerHTML="RAM size must not be empty."
    document.getElementById("RAMI").style.backgroundColor="#ffe6e6";
    document.getElementById("RAMI").style.borderColor="red";
    }else {
      document.getElementById("RV").innerHTML=""
        document.getElementById("RAMI").style.backgroundColor="white";
        document.getElementById("RAMI").style.borderColor="black";
      if(isNaN(ram)){
        document.getElementById("RV").innerHTML="Invalid value."
    document.getElementById("RAMI").style.backgroundColor="#ffe6e6";
    document.getElementById("RAMI").style.borderColor="red";
      }else {
        if(ram<=0){
          document.getElementById("RV").innerHTML="Invalid value."
    document.getElementById("RAMI").style.backgroundColor="#ffe6e6";
    document.getElementById("RAMI").style.borderColor="red";
        }else {

         
        document.getElementById("RV").innerHTML=""
        document.getElementById("RAMI").style.backgroundColor="white";
        document.getElementById("RAMI").style.borderColor="black";
        rams=true;
        }
      }
    }
    if(screen_space==""){
      document.getElementById("SPV").innerHTML="Screen space must not be empty."
    document.getElementById("SPI").style.backgroundColor="#ffe6e6";
    document.getElementById("SPI").style.borderColor="red";
    }else {
      document.getElementById("SPV").innerHTML=""
        document.getElementById("SPI").style.backgroundColor="white";
        document.getElementById("SPI").style.borderColor="black";
      if(isNaN(screen_space)){
        document.getElementById("SPV").innerHTML="Invalid space."
    document.getElementById("SPI").style.backgroundColor="#ffe6e6";
    document.getElementById("SPI").style.borderColor="red";
      }else {
        if(screen_space<=0){
          document.getElementById("SPV").innerHTML="Invalid space."
    document.getElementById("SPI").style.backgroundColor="#ffe6e6";
    document.getElementById("SPI").style.borderColor="red";
        }else {

         
        document.getElementById("SPV").innerHTML=""
        document.getElementById("SPI").style.backgroundColor="white";
        document.getElementById("SPI").style.borderColor="black";
        screen_space_s=true;
        }
      }
    }
    if(photo==""){
      document.getElementById("PHV").innerHTML="The photo is required"
    }else {
       document.getElementById("PHV").innerHTML=""
       photos=true;
    }
    if(names==true&&prices==true&&hdds==true&&rams==true&&screen_space_s==true&&photos==true){
      location.replace("AdminPage.html")
    }
  }
  function CanFun() {
    location.replace("AdminPage.html")
  }