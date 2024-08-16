const algorithmComplexities = {
    quickSort: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n^2)",
        space: "O(log n)"
    },
    mergeSort: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n log n)",
        space: "O(n)"
    },
    heapSort: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n log n)",
        space: "O(1)"
    },
    insertionSort: {
        best: "O(n)",
        average: "O(n^2)",
        worst: "O(n^2)",
        space: "O(1)"
    },
    selectionSort: {
        best: "O(n^2)",
        average: "O(n^2)",
        worst: "O(n^2)",
        space: "O(1)"
    },
    bubbleSort: {
        best: "O(n)",
        average: "O(n^2)",
        worst: "O(n^2)",
        space: "O(1)"
    }
};

export default algorithmComplexities;