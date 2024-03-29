import { Navigate, Route, Routes } from "react-router-dom";
import Quiz from "./pages/Quiz/Quiz";
import EmailPage from "./pages/Email/EmailPage";
import LoaderPage from "./pages/Loader/LoaderPage";
import Thankyou from "./pages/ThankyouPage/Thankyou";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/quiz/1" replace />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/loader" element={<LoaderPage />} />
        <Route path="/email" element={<EmailPage />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="*" element={<Navigate to="/quiz/1" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
