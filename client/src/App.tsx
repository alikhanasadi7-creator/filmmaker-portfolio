import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Showreel from "./pages/Showreel";
import RedirectHome from "./pages/RedirectHome";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Work} />
      <Route path="/showreel" component={Showreel} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      {/* All unknown URLs redirect to homepage */}
      <Route component={RedirectHome} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <Router />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
