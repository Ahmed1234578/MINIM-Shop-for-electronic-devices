function EditPFun() {
    var emails=false;
   
    
    var passwords=false;
    var addresss=false;
    var phonenumbers=false;
    let mailFormat = /^[A-Za-z0-9 ]+$/;
  
    var numberformat2=/^\d{11}$/;
    let Email=document.getElementById("EI").value;
    let Password=document.getElementById("PI").value;
    let PNumber=document.getElementById("PNI").value;
    let Address=document.getElementById("AI").value;
    let f=Email.charAt(0);
    var EmailSize=0;
    var ec=0;
    let emaildomain="";
   
    let PhonenumberP0erfix=PNumber.slice(0,3);
    if(PNumber==""){
        document.getElementById("PNV").innerHTML="Phone number must not be empty."
        document.getElementById("PNI").style.backgroundColor="#ffe6e6";
        document.getElementById("PNI").style.borderColor="red";
    }
    else {
        document.getElementById("PNV").innerHTML=""
        document.getElementById("PNI").style.backgroundColor="white";
        document.getElementById("PNI").style.borderColor="black";
        if(!PNumber.match(numberformat2)){
            document.getElementById("PNV").innerHTML="Invalid phone number."
        document.getElementById("PNI").style.backgroundColor="#ffe6e6";
        document.getElementById("PNI").style.borderColor="red";
        } 
        else {
            if(PhonenumberP0erfix=="010"||PhonenumberP0erfix=="011"||PhonenumberP0erfix=="012"||PhonenumberP0erfix=="015"){
            document.getElementById("PNV").innerHTML=""
            document.getElementById("PNI").style.backgroundColor="white";
            document.getElementById("PNI").style.borderColor="black";
            phonenumbers=true;
             }
             else {
            document.getElementById("PNV").innerHTML="Invalid phone number";
            document.getElementById("PNI").style.backgroundColor="#ffe6e6";
            document.getElementById("PNI").style.borderColor="red";
        }
    }
    }
    if(Email==""){
        // window.location.replace("AdminPage.html");
        document.getElementById("EV").innerHTML="The email must not be empty."
        document.getElementById("EI").style.backgroundColor="#ffe6e6";
        document.getElementById("EI").style.borderColor="red";
       }
       else{
           // window.location.replace("AdminPage.html");
           document.getElementById("EV").innerHTML="";
           document.getElementById("EI").style.backgroundColor="white";
           document.getElementById("EI").style.borderColor="black";
           if(!Email.includes("@")){
               document.getElementById("EV").innerHTML="Include an '@' in the email.";
               document.getElementById("EI").style.backgroundColor="#ffe6e6";
               document.getElementById("EI").style.borderColor="red";
           }else {
                if(!f.match(mailFormat)){
                   document.getElementById("EV").innerHTML="Invalid mail prefix."
                   document.getElementById("EI").style.backgroundColor="#ffe6e6";
                   document.getElementById("EI").style.borderColor="red";
                }else {
                   for (let i=0;i<Email.length; i++){
                       if(Email[i]=='@'){
                           EmailSize=Email.length;
                           ec=i+1;
                           break;
                       }
                   }
                   emaildomain=Email.slice(ec,EmailSize);
                   if(emaildomain=="gmail.com"||emaildomain=="yahoo.com"||emaildomain=="hotmail.com"||emaildomain=="outlook.com"||emaildomain=="web.de"||emaildomain=="gmx.net"){
                    if(Email.includes(".admin")){
                        document.getElementById("EV").innerHTML="Invalid email."
                        document.getElementById("EI").style.backgroundColor="#ffe6e6";
                        document.getElementById("EI").style.borderColor="red";
                     }else{
                        emails=true;
                     }
                   }else {
                       document.getElementById("EV").innerHTML="Invalid mail domain."
                           document.getElementById("EI").style.backgroundColor="#ffe6e6";
                           document.getElementById("EI").style.borderColor="red";
                   }
   
                }
           }
          }
          if(Address==""){
            document.getElementById("AV").innerHTML="The address must not be empty."
         document.getElementById("AI").style.backgroundColor="#ffe6e6";
         document.getElementById("AI").style.borderColor="red";
          }else {
            document.getElementById("AV").innerHTML="";
         document.getElementById("AI").style.backgroundColor="white";
         document.getElementById("AI").style.borderColor="black";
            addresss=true;
          }
          if(Password!="") {
            document.getElementById("PV").innerHTML="";
         document.getElementById("PI").style.backgroundColor="white";
         document.getElementById("PI").style.borderColor="black";
           }
        if(Password=="") {
            document.getElementById("PV").innerHTML="The password must not be empty."
            document.getElementById("PI").style.backgroundColor="#ffe6e6";
            document.getElementById("PI").style.borderColor="red";
            document.getElementById("PV1").innerHTML=""
            document.getElementById("PV2").innerHTML=""
            document.getElementById("PV3").innerHTML=""
        }
        if(Password!=""){
        if(Password.length<8&& Password!=""){
            document.getElementById("PV").innerHTML="The password must be at least 8 characters long.";
            document.getElementById("PI").style.backgroundColor="#ffe6e6";
            document.getElementById("PI").style.borderColor="red";
        }else {
            let capital = /[A-Z]/g;
            let small=  /[a-z]/g;
            let number= /[0-9]/g;
            let sepChar= /[#.?!@$%^&*-]/g;
            let fistchar=Password.charAt(0);
            if(fistchar.match(capital)&&Password.match(small)&&Password.match(number)&&Password.match(sepChar)){
                passwords=true;
            }
            if(fistchar.match(capital)){
                document.getElementById("PV").innerHTML="";
            document.getElementById("PI").style.backgroundColor="white";
            document.getElementById("PI").style.borderColor="black";
            } if(Password.match(small)){
                document.getElementById("PV1").innerHTML="";
                document.getElementById("PI").style.backgroundColor="white";
                document.getElementById("PI").style.borderColor="black";
            } if(Password.match(number)){
                document.getElementById("PV2").innerHTML="";
                document.getElementById("PI").style.backgroundColor="white";
                document.getElementById("PI").style.borderColor="black";
            } if(Password.match(sepChar)){
                document.getElementById("PV3").innerHTML="";
                document.getElementById("PI").style.backgroundColor="white";
                document.getElementById("PI").style.borderColor="black";
            }
            if(!fistchar.match(capital)){
                document.getElementById("PV").innerHTML="The first letter of the password must be capital.";
            document.getElementById("PI").style.backgroundColor="#ffe6e6";
            document.getElementById("PI").style.borderColor="red";
            } if(!Password.match(small)){
                document.getElementById("PV1").innerHTML="The password must contain at least one lowercase letter.";
                document.getElementById("PI").style.backgroundColor="#ffe6e6";
                document.getElementById("PI").style.borderColor="red";
            } if(!Password.match(number)){
                document.getElementById("PV2").innerHTML="The password must contain at least one number.";
                document.getElementById("PI").style.backgroundColor="#ffe6e6";
                document.getElementById("PI").style.borderColor="red";
            } if(!Password.match(sepChar)){
                document.getElementById("PV3").innerHTML="The password must contain at least one special char.";
                document.getElementById("PI").style.backgroundColor="#ffe6e6";
                document.getElementById("PI").style.borderColor="red";
            }
           
    
        }
    }
        if(emails==true&&passwords==true&&phonenumbers==true&&addresss==true){
          
            location.replace("UserPage.html");
          
         
        }
    }
  
    function CanFun() {
     
      location.replace("UserPage.html");
    }