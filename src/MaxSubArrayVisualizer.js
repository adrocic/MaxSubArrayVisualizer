import React, { useState, useEffect } from "react";
import "./MaxSubArrayVisualizer.css"; // Ensure you have the CSS for styling

const MaxSubArrayVisualizer = ({ inputArray }) => {
  const [currentArray] = useState(inputArray);
  const [currentMax, setCurrentMax] = useState([]);
  const [currentMaxSoFar, setCurrentMaxSoFar] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [maxSum, setMaxSum] = useState(0); // State to store the max sum

  useEffect(() => {
    findMaxSubArray(inputArray);
  }, [inputArray]);

  const findMaxSubArray = (arr) => {
    let maxSoFar = 0;
    let maxEndingHere = 0;
    let start = 0;
    let end = 0;
    let s = 0;

    for (let i = 0; i < arr.length; i++) {
      maxEndingHere += arr[i];

      if (maxSoFar < maxEndingHere) {
        maxSoFar = maxEndingHere;
        start = s;
        end = i;
        // Update maxSum state
        setMaxSum(maxSoFar);
      }

      if (maxEndingHere < 0) {
        maxEndingHere = 0;
        s = i + 1;
      }

      // Update the visualization with a delay
      ((index, currentMaxSoFar, currentStart, currentEnd) => {
        setTimeout(() => {
          setCurrentIndex(index);
          setCurrentMax(arr.slice(currentStart, currentEnd + 1));
          setCurrentMaxSoFar(currentMaxSoFar);
        }, 1000 * index); // Delay of 1 second per iteration for visualization
      })(i, maxSoFar, start, end);
    }
  };

  return (
    <div>
      <div className="max-sum-display">Max Sum: {maxSum}</div>
      <div className="array-display">Current Max So Far: {currentMaxSoFar}</div>
      <div className="array-container">
        {currentArray.map((item, index) => (
          <div
            key={index}
            className={`array-item ${
              currentIndex === index && currentIndex !== inputArray.length - 1
                ? "current"
                : ""
            } ${currentMax.includes(item) ? "max-subarray" : ""}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaxSubArrayVisualizer;
