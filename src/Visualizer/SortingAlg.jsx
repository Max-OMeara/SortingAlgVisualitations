import React from "react";
import "./SortingAlgStyles.css";
import { randomIntFromInterval } from './utils';

export default class SortingAlg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            selectedSort: null,
            sortName: '',
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 300; i++) {
            array.push(randomIntFromInterval(5, 500));
        }
        this.setState({ array });
    }

    quickSort() { console.log("Quick Sort called"); }

    mergeSort() { console.log("Merge Sort called"); }

    heapSort() { console.log("Heap Sort called"); }

    insertionSort() { console.log("Insertion Sort called"); }

    selectionSort() { console.log("Selection Sort called"); }

    bubbleSort() { console.log("Bubble Sort called"); }

    randomSortAlgo() {
        const n = randomIntFromInterval(0, 5);
        let sortName = '';

        switch (n) {
            case 0:
                this.quickSort();
                sortName = "Quick Sort";
                break;
            case 1:
                this.mergeSort();
                sortName = "Merge Sort";
                break;
            case 2:
                this.heapSort();
                sortName = "Heap Sort";
                break;
            case 3:
                this.bubbleSort();
                sortName = "Bubble Sort";
                break;
            case 4:
                this.insertionSort();
                sortName = "Insertion Sort";
                break;
            case 5:
                this.selectionSort();
                sortName = "Selection Sort";
                break;
            default:
                break;
        }

        this.setState({ selectedSort: n, sortName });
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
        const { array } = this.state;

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
                    <button className="sort-info" >Best Case:     </button>
                    <button className="sort-info" >Average Case:     </button>
                    <button className="sort-info" >Worst Case:    </button>
                    <button className="sort-info" >Space Complexity:    </button>
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
