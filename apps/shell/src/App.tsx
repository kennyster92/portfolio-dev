import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { CvPage } from "./pages/CvPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectPage } from "./pages/ProjectPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cv" element={<CvPage />} />
          {/* Splat so each remote can own its nested routes. */}
          <Route path="projects/:projectId/*" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
