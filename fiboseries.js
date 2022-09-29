function fibbo(n){
            if(n===10){
                        return n;            
}else {
            return n + fibbo(n+1);

}
}
const result = fibbo(0);
console.log(result);