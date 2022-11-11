

document.querySelector("button").addEventListener("click",function(){
    let name=document.querySelector("#name").value;
    let mail=document.querySelector("#gmail").value;
    let mobile=document.querySelector("#mobile").value;
    let pswd=document.querySelector("#pswd").value;

    let obj={
        name,
        mail,
        mobile,
        pswd
    };
    if(name==""||mail==""||mobile==""||pswd==""){
        alert("Please fill all details");
    }else{
        alert("signin successfully")
        localStorage.setItem("signin_data",JSON.stringify(obj));
    }


 
})