// Merge Sort

export function mergeSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxArray, animations);
    return animations;
}

function mergeSortHelper(array,
    start,
    end,
    auxArray,
    animations
) {
    if (start === end) return;
    const middle = Math.floor((start + end) / 2);
    mergeSortHelper(auxArray, start, middle, array, animations);
    mergeSortHelper(auxArray, middle + 1, end, array, animations);
    merge(array, start, middle, end, auxArray, animations);
}

function merge(array, start, middle, end, auxArray, animations) {
    let k = start;
    let i = start;
    let j = middle + 1;

    while (i <= middle && j <= end) {
        const animation = {};
        animation.comparison = [i, j];
        if (auxArray[i] <= auxArray[j]) {
            animation.swap = [k, auxArray[i]];
            array[k++] = auxArray[i++];
        } else {
            animation.swap = [k, auxArray[j]];
            array[k++] = auxArray[j++];
        }
        animations.push(animation);
    }

    while (i <= middle) {
        animations.push({
            comparison: [i, i],
            swap: [k, auxArray[i]]
        });
        array[k++] = auxArray[i++];
    }

    while (j <= end) {
        animations.push({
            comparison: [j, j],
            swap: [k, auxArray[j]]
        });
        array[k++] = auxArray[j++];
    }
}

// Quick Sort
export function quickSort(array) {
    const animations = [];
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
}

function quickSortHelper(array, start, end, animations) {
    if (start < end) {
        const pivotIndex = partition(array, start, end, animations);
        quickSortHelper(array, start, pivotIndex - 1, animations);
        quickSortHelper(array, pivotIndex + 1, end, animations);
    }
}

function partition(array, start, end, animations) {
    const pivotValue = array[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        animations.push({ comparison: [i, end], swap: null });

        if (array[i] <= pivotValue) {
            animations.push({ comparison: [i, pivotIndex], swap: [i, pivotIndex] });
            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
            pivotIndex++;
        }
    }

    animations.push({ comparison: [pivotIndex, end], swap: [pivotIndex, end] });
    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];

    return pivotIndex;
}

