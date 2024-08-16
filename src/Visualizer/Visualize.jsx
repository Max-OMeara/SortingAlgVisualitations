import React from "react";
import "./VisualizeStyles.css";
import { randomIntFromInterval } from './utils';
import { compareArrays } from './utils';
import * as sortingAlgorithms from '../Algorithms/SortingAlgorithms';
// import algorithmComplexities from '../Algorithms/Complexities'

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


export default class Visualize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            selectedSort: null,
            sortName: '',
            complexities: {
                best: "N/A",
                average: "N/A",
                worst: "N/A",
                space: "N/A"
            }
        };
        this.resetArray = this.resetArray.bind(this);
        this.quickSort = this.quickSort.bind(this);
        this.mergeSort = this.mergeSort.bind(this);
        this.heapSort = this.heapSort.bind(this);
        this.insertionSort = this.insertionSort.bind(this);
        this.selectionSort = this.selectionSort.bind(this);
        this.bubbleSort = this.bubbleSort.bind(this);
        this.randomSortAlgo = this.randomSortAlgo.bind(this);
    }


    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 30; i++) {
            array.push(randomIntFromInterval(5, 500));
        }
        this.setState({ array });
    }

    quickSort() {
        //Currently not working
        alert("Quick Sort is not working at the moment. Please try another sort algorithm.");
        //     const animations = sortingAlgorithms.quickSort(this.state.array);
        //     const newAnimations = [];
        //     for (const animation of animations) {
        //         newAnimations.push(animation.comparison);
        //         newAnimations.push(animation.comparison);
        //         newAnimations.push(animation.swap);
        //     }
        //     for (let i = 0; i < newAnimations.length; i++) {
        //         const arrayBars = document.getElementsByClassName('array-bar');
        //         const isColorChange = i % 3 !== 2;
        //         if (isColorChange) {
        //             const [barOneIdx, barTwoIdx] = newAnimations[i];
        //             const barOneStyle = arrayBars[barOneIdx].style;
        //             const barTwoStyle = arrayBars[barTwoIdx].style;
        //             const color = i % 3 === 0 ? 'red' : 'blue';
        //             setTimeout(() => {
        //                 barOneStyle.backgroundColor = color;
        //                 barTwoStyle.backgroundColor = color;
        //             }, i * 10);
        //         } else {
        //             setTimeout(() => {
        //                 const [barOneIdx, newHeight] = newAnimations[i];
        //                 const barOneStyle = arrayBars[barOneIdx].style;
        //                 barOneStyle.height = `${newHeight}px`;
        //             }, i * 10);
        //         }
        //     }
    }



    mergeSort() {
        const animations = sortingAlgorithms.mergeSort(this.state.array);
        const newAnimations = [];
        for (const animation of animations) {
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.swap);
        }
        for (let i = 0; i < newAnimations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = newAnimations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'blue';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 10);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = newAnimations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 10);
            }
        }
    }

    heapSort() {
        const animations = sortingAlgorithms.heapSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const { comparison, swap } = animations[i];
            if (comparison) {
                const [barOneIdx, barTwoIdx] = comparison;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 2 === 0 ? 'red' : 'blue';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 10);
            }
            if (swap) {
                setTimeout(() => {
                    const [barIdx, newHeight] = swap;
                    const barStyle = arrayBars[barIdx].style;
                    barStyle.height = `${newHeight}px`;
                }, i * 10);
            }
        }

        // Ensure all bars are set to blue after the last animation
        setTimeout(() => {
            const arrayBars = document.getElementsByClassName('array-bar');
            for (let i = 0; i < arrayBars.length; i++) {
                arrayBars[i].style.backgroundColor = 'blue';
            }
        }, animations.length * 10); // Timing matches the last animation step
    }

    insertionSort() {
        // Currently not working
        alert("Insertion Sort is not working at the moment. Please try another sort algorithm.");
        // const animations = sortingAlgorithms.insertionSort(this.state.array);
        // console.log('Animations:', animations); // Add this line to debug
        // if (!animations || animations.length === 0) {
        //     console.error('Animations array is empty or undefined.');
        //     return;
        // }
        // const newAnimations = [];
        // for (const animation of animations) {
        //     const { comparison, swap } = animation || {};
        //     if (comparison && comparison.length) {
        //         newAnimations.push(comparison);
        //         newAnimations.push(comparison);
        //     } else {
        //         newAnimations.push([]);
        //         newAnimations.push([]);
        //     }

        //     if (swap && swap.length) {
        //         newAnimations.push(swap);
        //     } else {
        //         newAnimations.push([]);
        //     }
        // }
        // for (let i = 0; i < newAnimations.length; i++) {
        //     const arrayBars = document.getElementsByClassName('array-bar');
        //     const isColorChange = i % 3 !== 2;
        //     if (isColorChange) {
        //         const [barOneIdx, barTwoIdx] = newAnimations[i];
        //         const barOneStyle = arrayBars[barOneIdx].style;
        //         const barTwoStyle = arrayBars[barTwoIdx].style;
        //         const color = i % 3 === 0 ? 'red' : 'blue';
        //         setTimeout(() => {
        //             barOneStyle.backgroundColor = color;
        //             barTwoStyle.backgroundColor = color;
        //         }, i * 10);
        //     } else {
        //         setTimeout(() => {
        //             const [barOneIdx, newHeight] = newAnimations[i];
        //             const barOneStyle = arrayBars[barOneIdx].style;
        //             barOneStyle.height = `${newHeight}px`;
        //         }, i * 10);
        //     }
        // }
    }

    selectionSort() {
        const animations = sortingAlgorithms.selectionSort(this.state.array);
        const newAnimations = [];
        for (const animation of animations) {
            const { comparison, swap } = animation || {};
            if (comparison && comparison.length) {
                newAnimations.push(comparison);
                newAnimations.push(comparison);
            } else {
                newAnimations.push([]);
                newAnimations.push([]);
            }

            if (swap && swap.length) {
                newAnimations.push(swap);
            } else {
                newAnimations.push([]);
            }
        }

        for (let i = 0; i < newAnimations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = newAnimations[i];
                const barOneStyle = arrayBars[barOneIdx]?.style;
                const barTwoStyle = arrayBars[barTwoIdx]?.style;
                const color = i % 3 === 0 ? 'red' : 'blue';
                setTimeout(() => {
                    if (barOneStyle && barTwoStyle) {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }
                }, i * 10);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = newAnimations[i];
                    const barOneStyle = arrayBars[barOneIdx]?.style;
                    if (barOneStyle) {
                        barOneStyle.height = `${newHeight}px`;
                    }
                }, i * 10);
            }
        }
    }

    bubbleSort() {
        console.log('Selected Sort Complexities:', this.state.complexities);
        const animations = sortingAlgorithms.bubbleSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const { comparison, swap } = animations[i];
            if (comparison) {
                const [barOneIdx, barTwoIdx] = comparison;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 2 === 0 ? 'red' : 'blue';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 10);
            }
            if (swap) {
                setTimeout(() => {
                    const [barIdx, newHeight] = swap;
                    const barStyle = arrayBars[barIdx].style;
                    barStyle.height = `${newHeight}px`;
                }, i * 10);
            }
        }

        // Ensure all bars are set to blue after the last animation
        setTimeout(() => {
            const arrayBars = document.getElementsByClassName('array-bar');
            for (let i = 0; i < arrayBars.length; i++) {
                arrayBars[i].style.backgroundColor = 'blue';
            }
        }, animations.length * 10); // Timing matches the last animation step
    }

    randomSortAlgo() {
        const n = randomIntFromInterval(0, 5);
        let sortName = '';
        let complexities = {};

        switch (n) {
            case 0:
                this.quickSort();
                sortName = "Quick Sort";
                complexities = algorithmComplexities.quickSort;
                break;
            case 1:
                this.mergeSort();
                sortName = "Merge Sort";
                complexities = algorithmComplexities.mergeSort;
                break;
            case 2:
                this.heapSort();
                sortName = "Heap Sort";
                complexities = algorithmComplexities.heapSort;
                break;
            case 3:
                this.bubbleSort();
                sortName = "Bubble Sort";
                complexities = algorithmComplexities.bubbleSort;
                break;
            case 4:
                this.insertionSort();
                sortName = "Insertion Sort";
                complexities = algorithmComplexities.insertionSort;
                break;
            case 5:
                this.selectionSort();
                sortName = "Selection Sort";
                complexities = algorithmComplexities.selectionSort;
                break;
            default:
                break;
        }

        this.setState({
            selectedSort: n,
            sortName,
            complexities
        }, () => {
            console.log('Updated Complexities in State:', this.state.complexities);
        });
    }


    checkAnswer(x) {
        const { selectedSort, sortName } = this.state;

        if (selectedSort === x) {
            alert("Correct!");
        } else {
            alert(`Incorrect! The answer was ${sortName}.`);
        }
    }

    render() {
        const { array, complexities } = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{ height: `${value}px` }}
                    ></div>
                ))}
                <div>
                    <button className="generate-button" onClick={() => this.resetArray()}>Generate New Array</button>
                    <button className="button" onClick={() => this.quickSort()}>Quick Sort</button>
                    <button className="button" onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button className="button" onClick={() => this.heapSort()}>Heap Sort</button>
                    <button className="button" onClick={() => this.insertionSort()}>Insertion Sort</button>
                    <button className="button" onClick={() => this.selectionSort()}>Selection Sort</button>
                    <button className="button" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button className="random-button" onClick={() => this.randomSortAlgo()}>Random Sort Algorithm</button>
                </div>
                <div>
                    <button className="sort-info">Best Case: {complexities?.best || "N/A"}</button>
                    <button className="sort-info">Average Case: {complexities?.average || "N/A"}</button>
                    <button className="sort-info">Worst Case: {complexities?.worst || "N/A"}</button>
                    <button className="sort-info">Space Complexity: {complexities?.space || "N/A"}</button>
                </div>
                <div>
                    <button className="lower-button" onClick={() => this.checkAnswer(0)}>Quick Sort</button>
                    <button className="lower-button" onClick={() => this.checkAnswer(1)}>Merge Sort</button>
                    <button className="lower-button" onClick={() => this.checkAnswer(2)}>Heap Sort</button>
                    <button className="lower-button" onClick={() => this.checkAnswer(3)}>Bubble Sort</button>
                    <button className="lower-button" onClick={() => this.checkAnswer(4)}>Insertion Sort</button>
                    <button className="lower-button" onClick={() => this.checkAnswer(5)}>Selection Sort</button>
                </div>
            </div>
        );
    }
}