export default function add(numbers: string) {
    if(!numbers || numbers.trim() == '')
        return 0;
    return parseInt(numbers);
}