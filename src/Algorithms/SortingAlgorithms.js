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
    if (array.length <= 1) return array;
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
        // Comparing elements with the pivot
        animations.push({ comparison: [i, end] });

        if (array[i] < pivotValue) {
            // Swapping elements if condition is met
            animations.push({ swap: [i, array[pivotIndex]] });
            animations.push({ swap: [pivotIndex, array[i]] });

            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
            pivotIndex++;
        }
    }

    // Swapping pivot element to its correct position
    animations.push({ comparison: [pivotIndex, end] });
    animations.push({ swap: [pivotIndex, array[end]] });
    animations.push({ swap: [end, array[pivotIndex]] });

    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
    return pivotIndex;
}


// Insertion Sort
export function insertionSort(array) {
    const animations = [];
    if (array.length <= 1) return animations;  // Ensure an empty array is returned for 1 or less elements

    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        const key = array[i];

        animations.push({ comparison: [i, j], swap: [] });  // Adding a swap array even if not used immediately

        while (j >= 0 && array[j] > key) {
            animations.push({ comparison: [j, j + 1], swap: [j + 1, array[j]] });
            array[j + 1] = array[j];
            j--;
        }
        animations.push({ comparison: [], swap: [j + 1, key] });
        array[j + 1] = key;
    }

    return animations;
}

// Selection Sort
export function selectionSort(array) {
    const animations = [];
    if (array.length <= 1) return animations;

    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            // Record the comparison between elements
            animations.push({ comparison: [j, minIndex], swap: [] });

            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element
        if (minIndex !== i) {
            animations.push({ comparison: [], swap: [i, array[minIndex]] });
            animations.push({ comparison: [], swap: [minIndex, array[i]] });

            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }
    return animations;
}

// Bubble Sort
export function bubbleSort(array) {
    const animations = [];
    if (array.length <= 1) return animations;
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Comparing adjacent elements
            animations.push({ comparison: [j, j + 1] });

            if (array[j] > array[j + 1]) {
                // Swapping elements if out of order
                animations.push({ swap: [j, array[j + 1]] });
                animations.push({ swap: [j + 1, array[j]] });

                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }

    return animations;
}

// Heap Sort
export function heapSort(array) {
    const animations = [];
    if (array.length <= 1) return animations;

    const n = array.length;

    // Build the max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i, animations);
    }

    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        animations.push({ swap: [0, array[i]] });
        animations.push({ swap: [i, array[0]] });
        [array[0], array[i]] = [array[i], array[0]];

        // Call max heapify on the reduced heap
        heapify(array, i, 0, animations);
    }

    return animations;
}

function heapify(array, n, i, animations) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // Check if left child is larger than root
    if (left < n && array[left] > array[largest]) {
        animations.push({ comparison: [left, i] });
        largest = left;
    } else if (left < n) {
        animations.push({ comparison: [left, i] });
    }

    // Check if right child is larger than largest
    if (right < n && array[right] > array[largest]) {
        animations.push({ comparison: [right, i] });
        largest = right;
    } else if (right < n) {
        animations.push({ comparison: [right, i] });
    }

    // If largest is not root
    if (largest !== i) {
        animations.push({ swap: [i, array[largest]] });
        animations.push({ swap: [largest, array[i]] });
        [array[i], array[largest]] = [array[largest], array[i]];

        // Recursively heapify the affected subtree
        heapify(array, n, largest, animations);
    }
}


