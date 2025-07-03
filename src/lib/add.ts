export default function add(numbers: string): number {

    if(!numbers || numbers.trim() == '')
        return 0;

    let [a,b] = numbers.split(',', 2)

    console.log("a,b", a, b)
    let m,n;
    if(a == '' || isNaN(parseInt(a)) ) m = 0
    else m = parseInt(a)
    if(b == '' || isNaN(parseInt(b))) n = 0
    else n = parseInt(b)

    console.log("m,n", m, n);

    return m + n;
}