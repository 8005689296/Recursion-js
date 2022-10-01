// Write a JavaScript program to get the integers in range (x, y) using recursion.

function rangeOfNumber(startnum,endnum){
            if(startnum === endnum){
                        return [endnum];
            }else {
             return [startnum].concat(rangeOfNumber(++startnum,endnum));
            }
}
const y = rangeOfNumber(1,4);
console.log(y);
