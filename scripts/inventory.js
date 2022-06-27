

var data1=JSON.parse(localStorage.getItem("data"));

data1.forEach(function(el,index)
{
    var brand=el.Brand;
    var Name=el.Name;
    var Price=el.Price;
    var image=el.image;

    var images=document.createElement("img");
    images.setAttribute("src",el.image);
    images.style.height="200px";
    images.style.width="120px";
    var p1=document.createElement("p");
    p1.innerText=Name;
    var p2=document.createElement("p");
    p2.innerText=Price;
    var p3=document.createElement("p");
    p3.innerText=brand;
    var div=document.createElement("div");
    div.style.height="370px";
    div.style.width="130px";
    div.style.border="1px solid red";
    var btn=document.createElement("button");
    btn.innerText="Remove";
    btn.setAttribute("id","remove_product");
    btn.addEventListener("click" ,function(){
        remove(index)
    });
    
    div.append(images,p1,p2,p3,btn)
    document.querySelector("#products_data").append(div)
});
function remove(index)
{

  
  var data2=JSON.parse(localStorage.getItem("data"))||[];
  var newdata=data2.filter(function(el,i){
     return i !==index;
  })
  event.target.parentNode.remove()

 localStorage.setItem("data",JSON.stringify(newdata))
  
}