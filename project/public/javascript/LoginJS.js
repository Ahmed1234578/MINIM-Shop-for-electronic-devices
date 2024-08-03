function loginFun(){
    var emailType="";
    let mailFormat = /^[A-Za-z0-9 ]+$/;
    let Login_Email= document.getElementById("EmI").value;
    let Login_Password= document.getElementById("PI").value;
    let f=Login_Email.charAt(0);
    var EmailSize=0;
    var ec=0;
    let emaildomain="";
    if(Login_Email==""){
     // window.location.replace("AdminPage.html");
     document.getElementById("EV").innerHTML="The email must not be empty."
     document.getElementById("EmI").style.backgroundColor="#ffe6e6";
     document.getElementById("EmI").style.borderColor="red";
    }
    else{
        // window.location.replace("AdminPage.html");
        document.getElementById("EV").innerHTML="";
        document.getElementById("EmI").style.backgroundColor="white";
        document.getElementById("EmI").style.borderColor="black";
        if(!Login_Email.includes("@")){
            document.getElementById("EV").innerHTML="Include an '@' in the email."
            document.getElementById("EmI").style.backgroundColor="#ffe6e6";
            document.getElementById("EmI").style.borderColor="red";
        }else {
             if(!f.match(mailFormat)){
                document.getElementById("EV").innerHTML="Invalid mail prefix."
                document.getElementById("EmI").style.backgroundColor="#ffe6e6";
                document.getElementById("EmI").style.borderColor="red";
             }else {
                for (let i=0;i<Login_Email.length; i++){
                    if(Login_Email[i]=='@'){
                        EmailSize=Login_Email.length;
                        ec=i+1;
                        break;
                    }
                }
                emaildomain=Login_Email.slice(ec,EmailSize);
                if(emaildomain=="gmail.com"||emaildomain=="yahoo.com"||emaildomain=="hotmail.com"||emaildomain=="outlook.com"||emaildomain=="web.de"||emaildomain=="gmx.net"){
                     if(Login_Email.includes(".admin")){
                        emailType="admin";
                     }else{
                        emailType="user";
                     }
                }else {
                    document.getElementById("EV").innerHTML="Invalid mail domain."
                        document.getElementById("EmI").style.backgroundColor="#ffe6e6";
                        document.getElementById("EmI").style.borderColor="red";
                }

             }
        }
       }
       
       if(Login_Password!="") {
        document.getElementById("PV").innerHTML="";
     document.getElementById("PI").style.backgroundColor="white";
     document.getElementById("PI").style.borderColor="black";
       }
    if(Login_Password=="") {
        document.getElementById("PV").innerHTML="The password must not be empty."
     document.getElementById("PI").style.backgroundColor="#ffe6e6";
     document.getElementById("PI").style.borderColor="red";
    }
    if(Login_Password!=""){
    if(Login_Password.length<8&& Login_Password!=""){
        document.getElementById("PV").innerHTML="The password must be at least 8 characters long.";
        document.getElementById("PI").style.backgroundColor="#ffe6e6";
        document.getElementById("PI").style.borderColor="red";
    }else {
        let capital = /[A-Z]/g;
        let small=  /[a-z]/g;
        let number= /[0-9]/g;
        let sepChar= /[#.?!@$%^&*-]/g;
        let fistchar=Login_Password.charAt(0);
        if(fistchar.match(capital)){
            document.getElementById("PV").innerHTML="";
        document.getElementById("PI").style.backgroundColor="white";
        document.getElementById("PI").style.borderColor="black";
        } if(Login_Password.match(small)){
            document.getElementById("PV1").innerHTML="";
            document.getElementById("PI").style.backgroundColor="white";
            document.getElementById("PI").style.borderColor="black";
        } if(Login_Password.match(number)){
            document.getElementById("PV2").innerHTML="";
            document.getElementById("PI").style.backgroundColor="white";
            document.getElementById("PI").style.borderColor="black";
        } if(Login_Password.match(sepChar)){
            document.getElementById("PV3").innerHTML="";
            document.getElementById("PI").style.backgroundColor="white";
            document.getElementById("PI").style.borderColor="black";
        }
        if(!fistchar.match(capital)){
            document.getElementById("PV").innerHTML="The first letter of the password must be capital.";
        document.getElementById("PI").style.backgroundColor="#ffe6e6";
        document.getElementById("PI").style.borderColor="red";
        } if(!Login_Password.match(small)){
            document.getElementById("PV1").innerHTML="The password must contain at least one lowercase letter.";
            document.getElementById("PI").style.backgroundColor="#ffe6e6";
            document.getElementById("PI").style.borderColor="red";
        } if(!Login_Password.match(number)){
            document.getElementById("PV2").innerHTML="The password must contain at least one number.";
            document.getElementById("PI").style.backgroundColor="#ffe6e6";
            document.getElementById("PI").style.borderColor="red";
        } if(!Login_Password.match(sepChar)){
            document.getElementById("PV3").innerHTML="The password must contain at least one special char.";
            document.getElementById("PI").style.backgroundColor="#ffe6e6";
            document.getElementById("PI").style.borderColor="red";
        }
       if(fistchar.match(capital)&&Login_Password.match(small)&&Login_Password.match(number)&&Login_Password.match(sepChar)&&emailType=="admin"){
          location.replace("AdminPage.html");
       }else if(fistchar.match(capital)&&Login_Password.match(small)&&Login_Password.match(number)&&Login_Password.match(sepChar)&&emailType=="user"){
        location.replace("UserPage.html");
       }

    }
}
    
}