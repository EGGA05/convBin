function db(){
    var num=document.getElementById("numero").value;
    num=parseInt(num);
    var bu=num;
    if(num==0){
        return window.alert("0");
    }else if(num==1){
        return window.alert("1");
    }else{
        var pot=0;
        var arr=[];
        do{
            if(num>=Math.pow(2,pot)){
                pot++;
            }else{
                num=num-Math.pow(2,pot-1);
                arr.unshift(pot-1);    
                pot=0;
            }
        }while(num!=0);
        var pos=0;
        var i=0;
        var ans="";
        var cont=0;
        do{
            if(i<arr[pos]){
                ans+="0";
                i++;
            }else{
                ans+="1";
                i++;
                pos++;
                cont++;
            }
        }while(cont<arr.length);
        ansf = ans.split("").reverse().join("");
        window.alert(`el numero ${bu} en codigo binario es "${ansf}"`);
    }
}
function bd(){
    var num = document.getElementById("numero").value;
    var ans = parseInt(num,2);
    window.alert(`el numero binario ${num} en sistema decimal es "${ans}"`);
}
function opt(){
    var op=document.getElementById("cmb").value;
    switch (op){
        case "binADec":
            bd();
        break;
        case "decABin":
            db();
        break;
    }
}
