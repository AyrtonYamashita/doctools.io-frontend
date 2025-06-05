import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./auth.routes";
import { PdfRoutes } from "./pdf.routes";

export function Routes() {
  return (
    <BrowserRouter>
      {/* <AuthRoutes /> */}
      <PdfRoutes />
    </BrowserRouter>
  );
}
