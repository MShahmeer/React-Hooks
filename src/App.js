import { BrowserRouter, Routes, Route } from "react-router-dom";

import UseEffectExample1 from "./UseEffectHook/UseEffectExample1";
import UseEffectHook from "./UseEffectHook/UseEffectHook";
import PropDrillingProblem from "./UseContextHook/PropDrillingProblem";
import Home from "./Home";
import UseContextHook from "./UseContextHook/UseContextHook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useEffect/Example" element={<UseEffectExample1 />} />
        <Route path="/useEffect" element={<UseEffectHook />} />
        <Route path="/PropDrilling" element={<PropDrillingProblem />} />
        <Route path="/useContext" element={<UseContextHook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
