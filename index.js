// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        if (indexOfMin !== i) {
            let temp = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const centerIndex = Math.floor(arr.length / 2);
    const left = arr.slice(0, centerIndex);
    const right = arr.slice(centerIndex);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const res = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }

    return [...res, ...left, ...right];
}

module.exports = {bubbleSort, selectionSort, mergeSort, merge};
