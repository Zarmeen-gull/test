// alert("hellow")

// start loop \

// var  tableNum = document.querySelector("#tableNum");


 
function tableValue(tableNum){

    // varibles defined
    
    var  display = document.querySelector("#display");
    var tableNum = document.querySelector("#number").value;
    var rBtn=document.querySelector("#back");

    var tbl="";
    for(let i=0; i<=10; i++){
     

      console.log(tableNum + " x" +  i + "=" + tableNum * i );
      let j = tableNum + " x" +  i + "=" + tableNum * i + "<br>";
      display.innerHTML += j;

    }
   
} 

