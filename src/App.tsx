import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import Financials from "./pages/Financials";
import DataManagement from "./pages/DataManagement";
import Maps from "./pages/Maps";
import Timeline from "./pages/Timeline";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }>
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
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
