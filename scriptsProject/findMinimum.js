function findMinimum(arr) {
    if (arr.length === 0) {
        return null;
    }

    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

let numbers = [2, 1, 3, 1, 9, 9, 2, 6, 5];
let smallestNumber = findMinimum(numbers);
console.log(smallestNumber);
