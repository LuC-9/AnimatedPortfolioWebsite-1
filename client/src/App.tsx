
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import BackgroundBlob from "./components/background-blob";

function Router() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <Home />
      </Route>
      <Route path="/projects">
        <Home />
      </Route>
      <Route path="/experience">
        <Home />
      </Route>
      <Route path="/education">
        <Home />
      </Route>
      <Route path="/skills">
        <Home />
      </Route>
      <Route path="/contact">
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen">
        <BackgroundBlob />
        <Router />
      </main>
      <Toaster />
      <Analytics />
    </QueryClientProvider>
  );
}

export default App;
