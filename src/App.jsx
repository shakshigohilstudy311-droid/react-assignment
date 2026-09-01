import { useState } from "react";
import StudentCard from "./StudentCard.jsx";
import TextAnalyzer from "./TextAnalyser.jsx";
import "./App.css";

function App() {
  const [showAnalyzer, setShowAnalyzer] = useState(false);

  return (
    <div>
      <h1>Student Profile</h1>
      <button onClick={() => setShowAnalyzer(!showAnalyzer)}>
        Text Analyser
      </button>

      {showAnalyzer ? (
        <TextAnalyzer />
      ) : (
        <>
          <StudentCard name="shakshi gohil" course="BCA" email="tanmaysir@gmail.com" semester="4" />
          <StudentCard name="Neha" course="BBA" email="kush@gmail.com" semester="3" />
          <StudentCard name="het gohil" course="BCA" email="shakshi@example.com" semester="5th" />
        </>
      )}
    </div>
  );
}
export default App;