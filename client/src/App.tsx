import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Header from "./components/Header";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import SkillsSection from "./components/home/SkillsSection";
import ExperienceSection from "./components/home/ExperienceSection";
import ProjectsSection from "./components/home/ProjectsSection";
import ContactSection from "./components/home/ContactSection";
import Footer from "./components/Footer";

// Define the Home page as a combination of sections
const HomePage = () => (
  <>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
  </>
);

function AppRouter() {
  return (
    <Switch>
      <Route path="/">
        <HomePage />
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
      <TooltipProvider>
        <WouterRouter base="/johnmichaelcincoportfolio/">
          <Header />
          <AppRouter />
          <Footer />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;