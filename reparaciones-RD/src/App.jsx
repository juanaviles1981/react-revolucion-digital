import { useState } from "react";
import { HeroSection } from "./components/Hero";
import { ReparacionesForm } from "./components/ReparacionesForm";
function App() {
    const [showHero, setShowHero] = useState(true);
    
    const handleEnter = () => {
      setShowHero(false);
    };
    
    return (
      <>
        {showHero ? (
          <HeroSection onEnter={handleEnter} />
        ) : (
          <ReparacionesForm />
        )}
      </>
    );
  }
  
  export default App;
