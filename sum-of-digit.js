function sum_digits(n){
            if(n<10){
                        return n;            
}else {
            return n%10 + sum_digits(n/10);

}
}
const result = sum_digits(1254);
console.log(result);