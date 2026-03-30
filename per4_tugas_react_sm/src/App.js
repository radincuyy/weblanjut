import React from "react";
import { CatatanProvider } from "./context/CatatanContext";
import TambahCatatan from "./components/TambahCatatan";
import DaftarCatatan from "./components/DaftarCatatan";
import JumlahCatatan from "./components/JumlahCatatan";
import HapusSemua from "./components/HapusSemua";
import CariCatatan from "./components/CariCatatan";

function App() {
  return (
    <CatatanProvider>
      <div>
        <h1>Catatan Sederhana - React + Context API</h1>
        <TambahCatatan />
        <CariCatatan />
        <JumlahCatatan />
        <HapusSemua />
        <DaftarCatatan />
      </div>
    </CatatanProvider>
  );
}

export default App;
