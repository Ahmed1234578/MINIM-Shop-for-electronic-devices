function AddFun(){
    var emails=false;
    var fnames=false;
    var lnames=false;
    
    var passwords=false;
    var addresss=false;
    var phonenumbers=false;
    let sepChar= /[#.?!@$%^&*-]/g;
    let mailFormat = /^[A-Za-z0-9 ]+$/;
    let nameformat = /^[A-Za-z]+$/;
    let numberformat= /[0-9]/g;
    var numberformat2=/^\d{11}$/;
    let FName=document.getElementById("FNI").value;
    let LName=document.getElementById("LNI").value;
    let Email=document.getElementById("EmI").value;
    let Password=document.getElementById("PI").value;
    let PNumber=document.getElementById("PNI").value;
    let Address=document.getElementById("AI").value;
    let f=Email.charAt(0);
    var EmailSize=0;
    var ec=0;
    let emaildomain="";
    if(FName==""){
        document.getElementById("FNV").innerHTML="The first name must not be empty."
        document.getElementById("FNI").style.backgroundColor="#ffe6e6";
        document.getElementById("FNI").style.borderColor="red";
    }
    else {
        document.getElementById("FNV").innerHTML="";
        document.getElementById("FNI").style.backgroundColor="white";
        document.getElementById("FNI").style.borderColor="black";
        if(!FName.match(nameformat)){
            document.getElementById("FNV").innerHTML="Invalid first name."
        document.getElementById("FNI").style.backgroundColor="#ffe6e6";
        document.getElementById("FNI").style.borderColor="red";
        }else {
            fnames=true;
        }
    }
    if(LName==""){
        document.getElementById("LNV").innerHTML="The last name must not be empty."
        document.getElementById("LNI").style.backgroundColor="#ffe6e6";
        document.getElementById("LNI").style.borderColor="red";
    }
    else {
        document.getElementById("LNV").innerHTML="";
        document.getElementById("LNI").style.backgroundColor="white";
        document.getElementById("LNI").style.borderColor="black";
        if(!LName.match(nameformat)){
            document.getElementById("LNV").innerHTML="Invalid last name."
        document.getElementById("LNI").style.backgroundColor="#ffe6e6";
        document.getElementById("LNI").style.borderColor="red";
        }else {
            lnames=true;
        }
    }
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
      
        document.getElementById("EV").innerHTML="The email must not be empty."
        document.getElementById("EmI").style.backgroundColor="#ffe6e6";
        document.getElementById("EmI").style.borderColor="red";
       }
       else{
           
           document.getElementById("EV").innerHTML="";
           document.getElementById("EmI").style.backgroundColor="white";
           document.getElementById("EmI").style.borderColor="black";
           if(!Email.includes("@")){
               document.getElementById("EV").innerHTML="Include an '@' in the email."
               document.getElementById("EmI").style.backgroundColor="#ffe6e6";
               document.getElementById("EmI").style.borderColor="red";
           }else {
                if(!f.match(mailFormat)){
                   document.getElementById("EV").innerHTML="Invalid mail prefix."
                   document.getElementById("EmI").style.backgroundColor="#ffe6e6";
                   document.getElementById("EmI").style.borderColor="red";
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
                    if(!Email.includes(".admin")){
                        document.getElementById("EV").innerHTML="The email of the admin must contain '.admin'."
                        document.getElementById("EmI").style.backgroundColor="#ffe6e6";
                        document.getElementById("EmI").style.borderColor="red";
                     }else{
                        emails=true;
                     }
                   }else {
                       document.getElementById("EV").innerHTML="Invalid mail domain."
                           document.getElementById("EmI").style.backgroundColor="#ffe6e6";
                           document.getElementById("EmI").style.borderColor="red";
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
        if(fnames==true&&lnames==true&&emails==true&&passwords==true&&phonenumbers==true&&addresss==true){
            location.replace("../../views/admin/AdminPage.html");
        }
    }
function CanFun(){
    location.replace("../../views/admin/AdminPage.html");
}