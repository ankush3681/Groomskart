mydata=JSON.parse(localStorage.getItem("signin_data"));

document.querySelector("button").addEventListener("click",function(){
    let mobile=document.querySelector("#mobile").value;
    let pswd=document.querySelector("#pswd").value;

    if(mobile==mydata.mobile && pswd==mydata.pswd){
        alert("login successfull");
        document.querySelector("#profile").innerHTML=mydata.name;
    }else{
        alert("wrong credential");
    }
})
 