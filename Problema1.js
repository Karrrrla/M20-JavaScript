//Calcule o MDC (máximo divisor comum) entre dois números.

function mdc(a, b){
    if (b == 0)
    {
        return a
    }
    else
    {
        return mdc(b, (a % b))
    }
}
console.log(mdc(14, 24))