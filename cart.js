mydata=JSON.parse(localStorage.getItem("cart-item"));


Displaydata(mydata);

function Displaydata(data){
    data.map((ele) => {
        let x =document.createElement("div");
        h2=document.createElement("h2");
        h2.innerText=ele.title;
        img=document.createElement("img");
        img.setAttribute("src",ele.image);
        h3=document.createElement("h3");
        h3.innerText="Rs."+ele.price;
        h4=document.createElement("h5");
        h4.innerText=ele.brand;
    

        x.append(h2,img,h3,h4);
        document.querySelector("#items").append(x);
    });
        
}