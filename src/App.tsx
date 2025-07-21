import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Financials from "./pages/Financials";
import DataManagement from "./pages/DataManagement";
import Maps from "./pages/Maps";
import Timeline from "./pages/Timeline";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="financials" element={<Financials />} />
            <Route path="data" element={<DataManagement />} />
            <Route path="maps" element={<Maps />} />
            <Route path="proformas" element={<Dashboard />} />
            <Route path="climatology" element={<Dashboard />} />
            <Route path="scr" element={<Dashboard />} />
            <Route path="interventions" element={<Dashboard />} />
            <Route path="timeline" element={<Timeline />} />
            <Route path="media" element={<Dashboard />} />
            <Route path="miscellaneous" element={<Dashboard />} />
            <Route path="results" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
