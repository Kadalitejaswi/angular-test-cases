export function add(num1,num2){
    return num1+num2;
}


export function sub(num1,num2){
    if(num1>num2)
        return   num1-num2
    else if(num2>num1)
        return num2-num1;
    else if(num1=num2)
        return 0;
    else
    return "Operation not found"
}
export function IncCounter(number){
    if(number<0)
       return 0;
    return number+1

}