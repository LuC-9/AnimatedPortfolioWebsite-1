import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

// Dummy BackgroundBlob component - needs actual implementation
function BackgroundBlob() {
  return <div>/* Background blob implementation would go here */</div>;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
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
    </QueryClientProvider>
  );
}

export default App;