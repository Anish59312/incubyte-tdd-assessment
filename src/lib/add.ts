export default function add(numbers: string): number {
    if(!numbers || numbers.trim() == '')
        return 0;
    return parseInt(numbers);
}