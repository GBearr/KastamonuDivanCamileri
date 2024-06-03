import React from "react";
import { Routes, Route } from "react-router-dom";
import AppBarComponent from "./components/AppBarComponent";
import { ProjectComponent } from "./components/ProjectComponent";
import { MainPage } from "./components/MainPage";
import { RiskAnalysisComponent } from "./components/RiskAnalysisComponent";
import { CommunicationComponent } from "./components/CommunicationComponent";
import { ValueAnalysis } from "./components/ValueAnalysis";
import { DigitalInventory } from "./components/DigitalInventory";

function App() {
  return (
    <div>
      <AppBarComponent />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project" element={<ProjectComponent />} />
        <Route path="/risk" element={<RiskAnalysisComponent />} />
        <Route path="/communication" element={<CommunicationComponent />} />
        <Route path="/value" element={<ValueAnalysis />} />
        <Route path="/digitalInventory" element={<DigitalInventory />} />
      </Routes>
    </div>
  );
}

export default App;
