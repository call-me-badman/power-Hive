// apps/learning/App.jsx
// function App() {
//   return <h1>Learning Zone</h1>;
// }
// import * as tf from "@tensorflow/tfjs";

// const model = tf.sequential();

// model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
// model.compile({
//   loss: "meanSquaredError",
//   optimizer: "sgd"
// });
import * as tf from "@tensorflow/tfjs";
import { useState } from "react";

function App() {
  const [output, setOutput] = useState(null);

  const predict = async () => {
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
    model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

    const prediction = model.predict(tf.tensor2d([5], [1, 1]));
    setOutput(prediction.dataSync()[0]);
  };

  return (
    <div>
      <button onClick={predict}>Predict</button>
      <p>Output: {output}</p>
    </div>
  );
}

export default App;
