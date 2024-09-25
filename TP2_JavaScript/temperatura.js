let temp=prompt("ingresa una temperatura");

if(temp<0 ){
    alert("frio");
}else if(temp>=0 && temp<15){
    alert("fresco");
}else if(temp>=16 && temp<25){
    alert("templado");
}else if(temp>25){
    alert("caliente");
}