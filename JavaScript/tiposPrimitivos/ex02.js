function isTruthy(v) {
    if (v) {
        return "truthy";
    } else {
        return "falsy";
    }
}

console.log(isTruthy(0));        
console.log(isTruthy(""));       
console.log(isTruthy("0"));     
console.log(isTruthy([]));
