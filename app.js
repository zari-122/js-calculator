function myClick(a){

myform.display.value+=a;





}


function equalTo (){


    myform.display.value=eval(myform.display.value)
}



function ac(){
myform.display.value="0"


}


function backspace(){
var prevalue=myform.display.value;
myform.display.value=prevalue.substr(0,prevalue.length-1);


}