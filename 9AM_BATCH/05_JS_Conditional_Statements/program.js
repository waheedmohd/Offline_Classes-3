let result = '';
let i = 0;
while(i<=10 ){
    if(i <= 9){
        result += `${i} - `;
    }
    else{
        result += `${i}`;
    }
    i++;
}
console.log(result);