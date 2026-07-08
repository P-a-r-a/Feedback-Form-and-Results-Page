import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FeedbackForm } from "@/components/FeedbackForm";
import { ResultsPage } from "@/pages/ResultsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public link - give this one to visitors/customers */}
        <Route path="/" element={<FeedbackForm />} />
        {/* Private link - only share this with your team, never link to it from the form */}
        <Route path="/company-dashboard" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
