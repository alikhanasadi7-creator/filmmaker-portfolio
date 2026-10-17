import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Commissions from "./pages/Work";
import Artworks from "./pages/Artworks";
import ArtworkDetail from "./pages/ArtworkDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Films from "./pages/Films";
import RedirectHome from "./pages/RedirectHome";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/commissions" component={Commissions} />
      <Route path="/artworks" component={Artworks} />
      <Route path="/artworks/:slug" component={ArtworkDetail} />
      <Route path="/films" component={Films} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      {/* Legacy URLs — redirect old links to their new home */}
      <Route path="/projects"><Redirect to="/commissions" /></Route>
      <Route path="/showreel"><Redirect to="/" /></Route>
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
