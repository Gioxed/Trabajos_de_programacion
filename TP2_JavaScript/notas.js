let nota=prompt("ingresa una nota");

if(nota>90 && nota<100 ){
    alert("A");
}else if(nota>=80 && nota<89){
    alert("B");
}else if(nota>=70 && nota<79){
    alert("C");
}else if(nota>60 && nota<69){
    alert("D");
}else if(nota<60){
    alert("F");
}else{
    alert("error");
}