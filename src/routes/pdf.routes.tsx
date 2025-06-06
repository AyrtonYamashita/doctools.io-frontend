import { Route, Routes } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { ExtractPDF } from "../pages/ExtractPDF";
import { NotFound } from "../pages/NotFound";
import { ViewExtract } from "../pages/ViewExtract";
import { ViewLayout } from "../components/ViewLayout";

export function PdfRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<ExtractPDF />} />
      </Route>
      <Route path="/" element={<ViewLayout />}>
        <Route path="/view" element={<ViewExtract />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
