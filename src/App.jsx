import { Navigate, Route, Routes } from "react-router-dom";
import Quiz from "./pages/Quiz/Quiz";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/quiz/1" replace />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="*" element={<Navigate to="/quiz/1" replace />} />
      </Routes>
    </>
  );
}

export default App;
