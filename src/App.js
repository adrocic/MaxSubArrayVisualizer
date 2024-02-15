import "./styles.css";
import MaxSubArrayVisualizer from "./MaxSubArrayVisualizer";

export default function App() {
  return (
    <div className="App">
      <MaxSubArrayVisualizer
        inputArray={[1, -100, 3, -1, 7, -10000, 9, 10, -15, 16, -1000, 10001]}
      />
    </div>
  );
}
