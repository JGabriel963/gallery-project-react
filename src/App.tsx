import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageComponent from "./pages/page-components";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";
import PagePhotoDetails from "./pages/page-photo-details";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <BrowserRouter>
          <Routes>
            <Route element={<LayoutMain />}>
              <Route index element={<PageHome />} />
              <Route path="/fotos/:id" element={<PagePhotoDetails />} />

              <Route path="/components" element={<PageComponent />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NuqsAdapter>
    </QueryClientProvider>
  );
}
