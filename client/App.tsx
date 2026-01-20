import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Memories from "./pages/Memories";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<SiteLayout />}>
            <Route path="/home" element={<Index />} />
            <Route path="/memories" element={<Memories />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container #root not found");
}

declare global {
  interface Window {
    __fusionAppRoot?: ReturnType<typeof createRoot>;
  }
}

const existing = (window as any).__fusionAppRoot as
  | ReturnType<typeof createRoot>
  | undefined;
const root = existing ?? createRoot(container);
(window as any).__fusionAppRoot = root;
root.render(<App />);
