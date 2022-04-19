function validation(){
    var email=document.getElementById('logininputemail').value;
    var pass=document.getElementById('logininputpass').value;

    var emailc=/^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var passc=/^[A-Za-z0-9]{5,15}@/;

    if (emailc.test(email)){
        document.getElementById('erroremaillog').innerHTML="";
    }
    else{
        document.getElementById('erroremaillog').innerHTML="INVALID EMAIL";
        return false;
    }

    if (passc.test(pass)){
        document.getElementById('erroepasslog').innerHTML="";
    }
    else{
        document.getElementById('erroepasslog').innerHTML="INVALID PASSWORD";
        return false;
    }
}



function validation1(){
    var sname=document.getElementById('signinputname').value;
    var semail=document.getElementById('signinputemail').value;
    var spass=document.getElementById('signinputpass').value;
    var scpass=document.getElementById('signinputcpass').value;
   

    var snamec=/^[A-Za-z]{3,50}$/;
    var semailc=/^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var spassc=/^[A-Za-z0-9]{5,15}@/;
    var scpassc=/^[A-Za-z0-9]{5,15}@/;
    
    if (snamec.test(sname)){
        document.getElementById('errornamesign').innerHTML="";
    }
    else{
        document.getElementById('errornamesign').innerHTML="INVALID NAME";
        return false;
    }

    if (semailc.test(semail)){
        document.getElementById('erroremailsign').innerHTML="";
    }
    else{
        document.getElementById('erroremailsign').innerHTML="INVALID EMAIL";
        return false;
    }

    if (spassc.test(spass)){
        document.getElementById('errorpasssign').innerHTML="";
    }
    else{
        document.getElementById('errorpasssign').innerHTML="INVALID PASSWORD";
        return false;
    }

    if (scpassc.match(spass)){
        document.getElementById('errorcpasssign').innerHTML="";
    }
    else{
        document.getElementById('errorcpasssign').innerHTML="INVALID PASSWORD";
        return false;
    }

}


function validation2(){
    var aname=document.getElementById('addinputname').value;
    var aadd=document.getElementById('addinputadd').value;
    var aph=document.getElementById('addkinputph').value;
    var apro=document.getElementById('product').value;
    var aqua=document.getElementById('quantity').value;

    var anamec=/^[A-Za-z]{3,50}$/;
    var aaddc=/^[A-Za-z0-9,.]{10,100}$/;
    var aphc=/^[6789][0-9]{9}$/;
    var aaproc=/^[A-Za-z0-9]{3,50}$/;
    var aquac=/^[0-9]{1,}$/;

    if (anamec.test(aname)){
        document.getElementById('errornameadd').innerHTML="";
    }
    else{
        document.getElementById('errornameadd').innerHTML="INVALID NAME";
        return false;
    }

    if (aaddc.test(aadd)){
        document.getElementById('erroraddadd').innerHTML="";
    }
    else{
        document.getElementById('erroraddadd').innerHTML="INVALID ADDRESS";
        return false;
    }

    if (aproc.test(apro)){
        document.getElementById('errorpro').innerHTML="";
    }
    else{
        document.getElementById('errorpro').innerHTML="INVALID NAME";
        return false;
    }
    if (aquac.test(aqua)){
        document.getElementById('errorqua').innerHTML="";
    }
    else{
        document.getElementById('errorqua').innerHTML="INVALID NUMBER";
        return false;
    }
    
}


