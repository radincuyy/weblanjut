import React from "react";
import { CounterProvider } from "./context/HitungContext";
import CounterDisplay from "./components/HitungDisplay";
import CounterButton from "./components/HitungButton";
import ResetButton from "./components/ResetButton";
import HistoryList from "./components/HistoryList";

function App() {
  return (
    <CounterProvider>
      <h1>Dengan State Management (Context API)</h1>
      <CounterDisplay />
      <CounterButton />
      <ResetButton />
      <HistoryList />
    </CounterProvider>
 );
}

export default App;