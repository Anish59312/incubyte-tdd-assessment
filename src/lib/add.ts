export default function add(numbers: string): number {

    if(!numbers || numbers.trim() == '')
        return 0;

    let [a=0,b=0] = numbers
    .split(',', 2)
    .map((x) => {
        x = x.trim()
        if(x == '' || isNaN(parseInt(x)))
            return 0
        return parseInt(x)
    })

    return a + b;
}