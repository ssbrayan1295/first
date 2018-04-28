var a =1;
var b=2;
function suma(a,b){
    return a+b;
}
function resta(a,b){
    return a-b;
}
function multiplicacion(a,b){
    return a*b;
}
function division(a,b){
    if(b==0){
        return -1;
    }
    return a/b;
    
    
}
function potencia(a,b){
    var pot=1;
    while(b>=0){
        pot*=a;
        b--;
    }
    return pot;
}