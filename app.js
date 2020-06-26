

function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = "";
}


function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value); 
}
function back(){
    var str = document.getElementById("result").value;
    
   str = str.substr(0,str.length-1);
   document.getElementById("result").value = str;
}
