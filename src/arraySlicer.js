export default function arraySlicer(array) {
    const result = [];
    const length = 7;
    while(array.length) result.push(array.splice(0,length));
    return result;
}
