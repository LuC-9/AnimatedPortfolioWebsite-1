import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import BackgroundBlob from "./components/background-blob";
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={Home} />
      <Route path="/projects" component={Home} />
      <Route path="/experience" component={Home} />
      <Route path="/education" component={Home} />
      <Route path="/skills" component={Home} />
      <Route path="/contact" component={Home} />
      <Route path="/api/contact" component={Home} />
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
      <Analytics />
    </QueryClientProvider>
  );
}
export default App;
