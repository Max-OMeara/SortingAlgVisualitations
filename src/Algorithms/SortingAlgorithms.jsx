export const mergeSort = (array) => {
    if (array.length <= 1) return array;
    const middleIndx = Math.floor(array.length / 2);
    const leftArray = mergeSort(array.slice(0, middleIndx));
    const rightArray = mergeSort(array.slice(middleIndx));
    const sortedArray = [];
    let i = 0, j = 0;
    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            sortedArray.push(leftArray[i++]);
        } else {
            sortedArray.push(rightArray[j++]);
        }
    }
    while (i < leftArray.length) sortedArray.push(leftArray[i++]);
    while (j < rightArray.length) sortedArray.push(rightArray[j++]);
    return sortedArray;
}